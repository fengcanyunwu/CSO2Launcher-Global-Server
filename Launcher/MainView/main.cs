using System;
using System.Net.NetworkInformation;
using System.Collections.Generic;
using System.Windows.Forms;
using System.Threading;
using System.IO;
using System.Reflection;
using System.Diagnostics;
using System.Drawing;
using System.Linq;
using System.Text;
using Launcher.MainView;
using System.Web.UI.WebControls.WebParts;
using System.Net;
using System.Security.Principal;
using System.Windows;
using Microsoft.Win32;
using WindowsInput.Native;
using WindowsInput;
using System.ComponentModel;
using System.Data;
using System.Threading.Tasks;

namespace Launcher
{
    public partial class main : Form//MetroFramework.Forms.MetroForm
    {
        public Button _Play { get { return play; } }
        public Label _TotalFile { get { return totalDownload; } }
        public ProgressBar _ProgressBar { get { return progressBar; } }
        public Label _estimatedTime { get { return EstimatedTime; } }
        public Label _downloading { get { return downloading; } }
        public Label _downloadingInfo { get { return downloadingInfo; } }

        public string arguments { get; internal set; }

        private long totalSizeToDownload = 0;
        private long currentDownloadSize = 0;
        private long totalDownloaded = 0;
        private Downloader downloader = new Downloader();
        private Updater update = new Updater();
        private StateHandler myState = new StateHandler();
        private Thread thread;
        private List<string> downloadList;
        private DateTime startTime = DateTime.Now;
        private string downloadSpeed = "";

        private LauncherSettings settingsForm;

        /*******************************
            this is ou main function
        /********************************/
        public main()
        {
            InitializeComponent();
            updateIPDisplay();
            captivePortalTest();
            myState.changeButtonState(LauncherState.Idle, this);
            this.Shown += new System.EventHandler(this.AfterLoading);
            LauncherVersion.Text = this.Text + " Ver." + Assembly.GetExecutingAssembly().GetName().Version.ToString();
            XmlParser.LoadXML();
            settingsForm = new LauncherSettings(this);
        }






        public string btnStateStatus = "awaitingConnection";

        public void connectToVPN()
        {
            InputSimulator sim = new InputSimulator();

            string vpnUsername = "VPN-Username";
            string vpnPassword = "VPN-Password";

            sim.Keyboard.TextEntry(vpnUsername);
            sim.Keyboard.KeyPress(VirtualKeyCode.RETURN);
            sim.Keyboard.Sleep(500);
            sim.Keyboard.TextEntry(vpnPassword);
            sim.Keyboard.KeyPress(VirtualKeyCode.RETURN);
            sim.Keyboard.Sleep(500);
        }

        private async void btnConnectVPN_Click(object sender, EventArgs e)
        {
            switch (btnStateStatus)
            {
                case "awaitingConnection":
                    btnConnectVPN.Enabled = false;
                    btnConnectVPN.Text = "Bağlanılıyor...";
                    Directory.SetCurrentDirectory(@"C:\Windows\System32");
                    System.Diagnostics.Process.Start("rasdial.exe", "CSO2Server uservpn userpassword");
                    await Task.Delay(2000);
                    btnConnectVPN.Text = "Giriş Yapıldı";
                    connectToVPN();
                    await Task.Delay(5000);
                    btnConnectVPN.Enabled = true;
                    btnConnectVPN.Text = "Bağlantıyı Kes";
                    btnStateStatus = "connectionEstablished";
                    updateIPDisplay();
                    break;

                case "connectionEstablished":
                    btnConnectVPN.Enabled = false;
                    btnConnectVPN.Text = "Kapatılıyor...";
                    System.Diagnostics.Process.Start("rasdial.exe", "CSO2Server /d");
                    await Task.Delay(3850);
                    btnStateStatus = "awaitingConnection";
                    btnConnectVPN.Enabled = true;
                    btnConnectVPN.Text = "Reconnect";
                    updateIPDisplay();
                    break;
            }
        }



        public void updateIPDisplay()
        {
            string publicIPv4 = new WebClient().DownloadString("http://icanhazip.com");
            viewPublicIP.Text = publicIPv4;
        }

        public void captivePortalTest()
        {
            string captiveCheck = new WebClient().DownloadString("http://captive.apple.com");

            if (captiveCheck.Contains("Success") == false)
            {
                MessageBox.Show("A captive portal was detected - please authenticate into your network before connecting.", "SimpleConnect", MessageBoxButtons.OK, MessageBoxIcon.Exclamation);
            }
        }













        /*******************************
            formater to get the bytes suffix
        /********************************/
        private static string FormatBytes(long bytes)
        {
            string[] Suffix = { "B", "KB", "MB", "GB", "TB" };
            int i;
            double dblSByte = bytes;
            for (i = 0; i < Suffix.Length && bytes >= 1024; i++, bytes /= 1024)
            {
                dblSByte = bytes / 1024.0;
            }
            return String.Format("{0:0.##} {1}", dblSByte, Suffix[i]);
        }
        /*******************************
            update label download amount
        /********************************/
        public void updateDownloadedAmount(long val)
        {
            currentDownloadSize = totalDownloaded + val;
            if (_TotalFile.Visible == false)
                _TotalFile.Visible = true;
            _TotalFile.Text = FormatBytes(currentDownloadSize) + " of " + FormatBytes(totalSizeToDownload);
            _TotalFile.Text = _TotalFile.Text + "  (" + downloadSpeed + " /s)";
        }
        public void updateDownloadingInfo(int currentFile, int maxFile, string fileName)
        {
            _downloadingInfo.Text = fileName + " (file: " + currentFile + " of " + maxFile + ")";
        }
        /*******************************
            update label download speed
        /********************************/
        public void updateDownloadSpeed(int speed)
        {
            downloadSpeed = FormatBytes(speed > 0 ? speed : 0);
        }
        /*******************************
            update label estimate time
        /********************************/
        public void updateEstimatedTime()
        {
            TimeSpan timeRemaining = TimeSpan.FromTicks(DateTime.Now.Subtract(startTime).Ticks * (totalSizeToDownload - (currentDownloadSize + 1)) / (currentDownloadSize + 1));
            string time = (timeRemaining.Hours > 0 ? timeRemaining.Hours : 0) + "h" + (timeRemaining.Minutes > 0 ? timeRemaining.Minutes : 0) + "m" + (timeRemaining.Seconds > 0 ? timeRemaining.Seconds : 0) + "s";
            EstimatedTime.Text = time + " remaining.";
        }
        /*******************************
            update the progress bar
        /********************************/
        public void updateProgressBarValue(int value = 0)
        {
            if (value > 0)
                _ProgressBar.Value = value;
            else
            {
                double current = currentDownloadSize > 0 ? currentDownloadSize : 1;
                double total = totalSizeToDownload > 0 ? totalSizeToDownload : 1;
                double val = (current / total) * 100;
                if (val < 100)
                    _ProgressBar.Value = (int)val;
                else
                    _ProgressBar.Value = 100;
            }
        }
        /*******************************
            update the total downloaded size
        /********************************/
        public void updateAlreadyDownloaded(long val)
        {
            totalDownloaded += val;
        }
        /*******************************
            call back from updater (tell us if there is or not an update
        /********************************/
        public void updaterCallBack(List<string> listToDownload, long totalSize, bool fromRepair = false)
        {
            if (listToDownload.Count > 0)
            {
                totalSizeToDownload = totalSize;
                downloadList = listToDownload;
                _TotalFile.Text = FormatBytes(totalSizeToDownload) + " to download.";
                myState.changeButtonState(LauncherState.PendingUpdate, this);
            }
            else
            {
                if (fromRepair == false)
                {
                    Repair repair = new Repair();
                    myState.changeButtonState(LauncherState.Repair, this);
                    thread = new Thread(() => {
                        repair.PerformRepair(this);
                    });
                    thread.Start();
                }
                else
                    myState.changeButtonState(LauncherState.Idle, this);
            }
        }
        /*******************************
            download is completed we download everything
        /********************************/
        public void UpdateCompleted()
        {
            Repair repair = new Repair();
            myState.changeButtonState(LauncherState.Repair, this);
            thread = new Thread(() => {
                repair.PerformRepair(this);
            });
            thread.Start();
        }
        /*******************************
            Uninstall the game
        /********************************/
        public void PerformUninstall()
        {
            if (myState.getLauncherState() != LauncherState.Downloading)
            {
                if (MessageBox.Show("Do you want to uninstall the game?", "Remove", MessageBoxButtons.YesNo, MessageBoxIcon.Information) ==
                    DialogResult.Yes)
                {
                    Launcher.Uninstall uin = new Launcher.Uninstall();
                    uin.PerformUninstall();
                }
            }
        }
        /*******************************
            Repair the game
        /********************************/
        public void PerformRepair()
        {
            if (myState.getLauncherState() != LauncherState.Downloading)
            {
                Repair repair = new Repair();
                myState.changeButtonState(LauncherState.Repair, this);
                thread = new Thread(() =>
                {
                    repair.PerformRepair(this);
                });
                thread.Start();
            }
        }
        /*******************************
            verification if there us or not an update for the game
        /********************************/
        private void CheckForGameUpdate()
        {
            if (System.Net.NetworkInformation.NetworkInterface.GetIsNetworkAvailable())
            {
                Repair repair = new Repair();
                myState.changeButtonState(LauncherState.Repair, this);
                thread = new Thread(() => {
                    repair.PerformRepair(this);
                });
                thread.Start();
            }
            else
            {
                MessageBox.Show("No Internet Connection Check the Internet");
                Application.Exit();
            }
        }
        /*******************************
            verification if there is an update for the launcher
        /********************************/

        private void CheckForLauncherUpdate()
        {
            AutoUpdater launcherUpdater = new AutoUpdater();
            label1.Text = new Ping().Send("127.0.0.1").RoundtripTime.ToString() + " Ping";


            if (File.Exists("Data/0a2a3412fdbfc3549fbb01217c3099ae.pkg"))

                settingsForm.Hide();

            else
                MessageBox.Show("0a2a3412fdbfc3549fbb01217c3099ae.pkg file not found!", "Game Files Not Detected!",
                MessageBoxButtons.OK, MessageBoxIcon.Error);


            if (launcherUpdater.IsNeweerThan(Assembly.GetExecutingAssembly().GetName().Version.ToString()) == true)
            {
                if (MessageBox.Show("Hey! there is a new update in the game, would you like to get this awesome update?", "Update available", MessageBoxButtons.YesNo, MessageBoxIcon.Information) ==
                    DialogResult.Yes)
                {
                    launcherUpdater.doUpdateLauncher(this);
                }
                else
                {
                    Close();
                }
            }
            else
            {
                CheckForGameUpdate(); // then check update for the game.
            }
        }
        /*******************************
            called when the window is created
        /********************************/
        private void AfterLoading(object sender, EventArgs e)
        {
            CheckForLauncherUpdate(); // first check if there is a new version of the launcher.
        }
        /*******************************
            Handle the closing window and stop all operation
        /********************************/
        private void main_FormClosing(object sender, FormClosingEventArgs e)
        {
            if (downloader.getIsDownloading() == true)
            {
                // remove update file to be sure we download after restart
                downloader.CancelWorker();
            }
            if (thread != null && thread.IsAlive)
            {
                thread.Abort();
                thread.Interrupt();
                thread.Join();
            }
            if (myState.getLauncherState() != LauncherState.Idle)
            {
                string path = System.IO.Path.GetFullPath("./");
                FileInfo fileInfo = new FileInfo(path + NetworkThing.Info.getXmlFile());
                bool updateDelete = fileInfo.Exists;
                if (updateDelete == true)
                {
                    System.IO.File.Delete(path + NetworkThing.Info.getXmlFile());
                    fileInfo = new FileInfo(path + NetworkThing.Info.getManifestFile());
                    updateDelete = System.IO.File.Exists(path + NetworkThing.Info.getManifestFile());
                    if (updateDelete == true)
                        System.IO.File.Delete(path + NetworkThing.Info.getManifestFile());
                }
            }
        }
        /*******************************
            play button pressed
        /********************************/
        private void play_Click(object sender, EventArgs e)
        {
            settingsForm.Hide();

            if (myState.getLauncherState() == LauncherState.PendingUpdate)
            {
                downloader.PrepareDownload(this, downloadList, totalSizeToDownload);
                myState.changeButtonState(LauncherState.Downloading, this);
            }
            else if (myState.getLauncherState() == LauncherState.Idle)
            {
                Process.Start(NetworkThing.Info.getGameName());
                Application.Exit();
            }

        }
        /*******************************
            Set transparency
        /********************************/
        private void main_Load(object sender, EventArgs e)
        {
            _TotalFile.BackColor = Color.Transparent;
            _estimatedTime.BackColor = Color.Transparent;
            LauncherVersion.BackColor = Color.Transparent;
            _Close.BackColor = Color.Transparent;
            Minimize.BackColor = Color.Transparent;
            play.BackColor = Color.Transparent;
            downloading.BackColor = Color.Transparent;
            downloadingInfo.BackColor = Color.Transparent;
            TopPanel.BackColor = Color.Transparent;
            _Options.BackColor = Color.Transparent;

            _TotalFile.Parent = font;
            _estimatedTime.Parent = font;
            downloading.Parent = font;
            downloadingInfo.Parent = font;
            play.Parent = font;
            LauncherVersion.Parent = font;
            _Close.Parent = font;
            Minimize.Parent = font;
            _Options.Parent = font;
            TopPanel.Parent = font; // top panel, if you insert something in you must edit it before this line.

            play.FlatStyle = FlatStyle.Flat;
            play.FlatAppearance.BorderSize = 0;
            play.FlatAppearance.BorderColor = Color.FromArgb(0, 255, 255, 255);
        }
        /*******************************
            click on close
        /********************************/
        private void Close_Click(object sender, EventArgs e)
        {
            const string message = "The Update Will Be Canceled If You Close It In The Middle Of The Update!";
            const string caption = "Are You Sure You Want to Close the Launcher?";
            var result = MessageBox.Show(message, caption, MessageBoxButtons.YesNo, MessageBoxIcon.Question);
            if (result == DialogResult.Yes)
            {
                Application.Exit();
            }
            else if (result == DialogResult.Yes)
            {
                this.Close();
            }
        }
        /*******************************
            click on minimize
        /********************************/
        private void Minimize_Click(object sender, EventArgs e)
        {
            this.WindowState = FormWindowState.Minimized;
        }
        /*******************************
            handle the moving window
        /********************************/
        int mouseX, mouseY = 0;
        bool mouseDown;
        private void TopPanel_MouseMove(object sender, MouseEventArgs e)
        {
            if (mouseDown)
            {
                mouseX = MousePosition.X - 500; //edge
                mouseY = MousePosition.Y;

                this.SetDesktopLocation(mouseX, mouseY);
            }
        }
        private void TopPanel_MouseUp(object sender, MouseEventArgs e)
        {
            mouseDown = false;
        }
        private void TopPanel_MouseDown(object sender, MouseEventArgs e)
        {
            mouseDown = true;
        }

        private void LauncherVersion_Click(object sender, EventArgs e)
        {

        }

        private void totalDownload_Click(object sender, EventArgs e)
        {

        }

        private void progressBar_Click(object sender, EventArgs e)
        {

        }

        private void font_Click(object sender, EventArgs e)
        {

        }

        private void metroProgressBar1_Click(object sender, EventArgs e)
        {

        }

        private void button1_Click(object sender, EventArgs e)
        {
            Process.Start("http://127.0.0.1/download/");
        }

        private void button2_Click(object sender, EventArgs e)
        {
            Process.Start("https://www.facebook.com/CSOnline2TR/");
        }

        private void downloading_Click(object sender, EventArgs e)
        {

        }

        private void pictureBox1_Click(object sender, EventArgs e)
        {

        }

        private void TopPanel_Paint(object sender, PaintEventArgs e)
        {

        }

        private void button3_Click(object sender, EventArgs e)
        {
            Process.Start("Bin\\resources\\Low_Graphics.reg");
        }

        private void label1_Click(object sender, EventArgs e)
        {


        }

        private void timer1_Tick(object sender, EventArgs e)
        {

        }


        private void label3_Click(object sender, EventArgs e)
        {

        }


        /*******************************
   handle the options window
/********************************/
        private void Options_Click(object sender, EventArgs e)
        {
            if (myState.getLauncherState() != LauncherState.Idle && myState.getLauncherState() != LauncherState.PendingUpdate)
            {

            }
            else
                settingsForm.Show();
        }
    }
}
namespace NetworkThing
{
    public class Info
    {
        public static string getXmlFile()
        {
            return Launcher.Properties.Resources.XmlFile;
        }
        public static string getXmlFileFromUrl()
        {
            return getDownloadUrl() + Launcher.Properties.Resources.XmlFile;
        }
        public static string getGameName()
        {
            return Launcher.Properties.Resources.LauncherExe;
        }
        public static string getManifestFile()
        {
            return Launcher.Properties.Resources.Manifest;
        }
        public static string getManifestFileFromUrl()
        {
            return getDownloadUrl() + Launcher.Properties.Resources.Manifest;
        }
        public static string getDownloadUrl()
        {
            return Launcher.Properties.Resources.UrlLocation;
        }
    }
}