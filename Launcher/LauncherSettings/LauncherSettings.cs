using System;
using System.Drawing;
using System.Windows.Forms;

namespace Launcher
{
    public partial class LauncherSettings : Form
    {
        main MainView;
        public LauncherSettings(main Mainform)
        {
            MainView = Mainform;
            InitializeComponent();
        }
        private void _Close_Click(object sender, EventArgs e)
        {
            this.Hide();
        }
        private void LauncherSettings_Load(object sender, EventArgs e)
        {
            _Close.BackColor = Color.Transparent;
            Uninstall.BackColor = Color.Transparent;
            Repair.BackColor = Color.Transparent;
            Label.BackColor = Color.Transparent;

            Label.Parent = TopPanel;
            _Close.Parent = TopPanel;
            

            TopPanel.BackColor = Color.Transparent;
        }
        /*******************************
            handle the moving window
        /********************************/
        int mouseX, mouseY = 0;
        bool mouseDown;
        private void TopPanel_MouseDown(object sender, MouseEventArgs e)
        {
            mouseDown = true;
        }
        private void TopPanel_MouseMove(object sender, MouseEventArgs e)
        {
            if (mouseDown)
            {
                mouseX = MousePosition.X - 170; //edge
                mouseY = MousePosition.Y;

                this.SetDesktopLocation(mouseX, mouseY);
            }
        }
        private void Repair_Click(object sender, EventArgs e)
        {
            MainView.PerformRepair();
            this.Hide();
        }
        private void Uninstall_Click(object sender, EventArgs e)
        {

            const string message = "Oyun Veya Son Güncelleme Kaldırılacaktır Bundan Emin Misiniz!";
            const string caption = "Oyunu Kaldırmak İstediğinizden Emin Misiniz?";
            var result = MessageBox.Show(message, caption, MessageBoxButtons.YesNo, MessageBoxIcon.Question);
            if (result == DialogResult.Yes)
            {
                MainView.PerformUninstall();
                MainView.PerformRepair();
                this.Hide();
            }
            else if (result == DialogResult.Yes)
            {
                this.Close();
            }
        }

        private void pictureBox1_Click(object sender, EventArgs e)
        {
            pictureBox1.BackColor = Color.Transparent;
        }

        private void TopPanel_MouseUp(object sender, MouseEventArgs e)
        {
            mouseDown = false;
        }
    }
}
