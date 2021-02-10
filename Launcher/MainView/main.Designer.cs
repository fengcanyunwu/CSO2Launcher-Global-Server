namespace Launcher
{
    partial class main
    {
        /// <summary>
        /// Required designer variable.
        /// </summary>
        private System.ComponentModel.IContainer components = null;

        /// <summary>
        /// Clean up any resources being used.
        /// </summary>
        /// <param name="disposing">true if managed resources should be disposed; otherwise, false.</param>
        protected override void Dispose(bool disposing)
        {
            if (disposing && (components != null))
            {
                components.Dispose();
            }
            base.Dispose(disposing);
        }

        #region Windows Form Designer generated code

        /// <summary>
        /// Required method for Designer support - do not modify
        /// the contents of this method with the code editor.
        /// </summary>
        private void InitializeComponent()
        {
            this.components = new System.ComponentModel.Container();
            System.ComponentModel.ComponentResourceManager resources = new System.ComponentModel.ComponentResourceManager(typeof(main));
            this.EstimatedTime = new System.Windows.Forms.Label();
            this.progressBar = new MetroFramework.Controls.MetroProgressBar();
            this.totalDownload = new System.Windows.Forms.Label();
            this.downloading = new System.Windows.Forms.Label();
            this.downloadingInfo = new System.Windows.Forms.Label();
            this._Options = new System.Windows.Forms.PictureBox();
            this.Minimize = new System.Windows.Forms.PictureBox();
            this._Close = new System.Windows.Forms.PictureBox();
            this.webBrowser1 = new System.Windows.Forms.WebBrowser();
            this.play = new System.Windows.Forms.Button();
            this.font = new System.Windows.Forms.PictureBox();
            this.metroProgressBar1 = new MetroFramework.Controls.MetroProgressBar();
            this.button1 = new System.Windows.Forms.Button();
            this.button2 = new System.Windows.Forms.Button();
            this.pictureBox1 = new System.Windows.Forms.PictureBox();
            this.LauncherVersion = new System.Windows.Forms.Label();
            this.TopPanel = new System.Windows.Forms.Panel();
            this.label1 = new System.Windows.Forms.Label();
            this.button3 = new System.Windows.Forms.Button();
            this.timer1 = new System.Windows.Forms.Timer(this.components);
            ((System.ComponentModel.ISupportInitialize)(this._Options)).BeginInit();
            ((System.ComponentModel.ISupportInitialize)(this.Minimize)).BeginInit();
            ((System.ComponentModel.ISupportInitialize)(this._Close)).BeginInit();
            ((System.ComponentModel.ISupportInitialize)(this.font)).BeginInit();
            ((System.ComponentModel.ISupportInitialize)(this.pictureBox1)).BeginInit();
            this.TopPanel.SuspendLayout();
            this.SuspendLayout();
            // 
            // EstimatedTime
            // 
            this.EstimatedTime.Anchor = ((System.Windows.Forms.AnchorStyles)((System.Windows.Forms.AnchorStyles.Bottom | System.Windows.Forms.AnchorStyles.Left)));
            this.EstimatedTime.AutoSize = true;
            this.EstimatedTime.BackColor = System.Drawing.Color.Lime;
            this.EstimatedTime.Location = new System.Drawing.Point(3, 108);
            this.EstimatedTime.Name = "EstimatedTime";
            this.EstimatedTime.Size = new System.Drawing.Size(69, 13);
            this.EstimatedTime.TabIndex = 5;
            this.EstimatedTime.Text = "Tahmini Süre";
            this.EstimatedTime.TextAlign = System.Drawing.ContentAlignment.MiddleLeft;
            // 
            // progressBar
            // 
            this.progressBar.Location = new System.Drawing.Point(0, 124);
            this.progressBar.Name = "progressBar";
            this.progressBar.Size = new System.Drawing.Size(837, 10);
            this.progressBar.Style = MetroFramework.MetroColorStyle.Blue;
            this.progressBar.TabIndex = 6;
            this.progressBar.Theme = MetroFramework.MetroThemeStyle.Dark;
            this.progressBar.UseCustomBackColor = true;
            this.progressBar.Value = 100;
            this.progressBar.Click += new System.EventHandler(this.progressBar_Click);
            // 
            // totalDownload
            // 
            this.totalDownload.BackColor = System.Drawing.Color.Lime;
            this.totalDownload.Font = new System.Drawing.Font("Arial", 9.75F, System.Drawing.FontStyle.Regular, System.Drawing.GraphicsUnit.Point, ((byte)(0)));
            this.totalDownload.ForeColor = System.Drawing.Color.White;
            this.totalDownload.Location = new System.Drawing.Point(0, 152);
            this.totalDownload.Name = "totalDownload";
            this.totalDownload.Size = new System.Drawing.Size(834, 22);
            this.totalDownload.TabIndex = 9;
            this.totalDownload.Text = "2.45 GB to download";
            this.totalDownload.TextAlign = System.Drawing.ContentAlignment.BottomRight;
            this.totalDownload.UseCompatibleTextRendering = true;
            this.totalDownload.UseMnemonic = false;
            this.totalDownload.Click += new System.EventHandler(this.totalDownload_Click);
            // 
            // downloading
            // 
            this.downloading.AutoSize = true;
            this.downloading.BackColor = System.Drawing.Color.Lime;
            this.downloading.Font = new System.Drawing.Font("Microsoft Sans Serif", 9.75F, System.Drawing.FontStyle.Regular, System.Drawing.GraphicsUnit.Point, ((byte)(0)));
            this.downloading.Location = new System.Drawing.Point(98, 108);
            this.downloading.Name = "downloading";
            this.downloading.Size = new System.Drawing.Size(61, 16);
            this.downloading.TabIndex = 11;
            this.downloading.Text = "İndiriliyor";
            this.downloading.Click += new System.EventHandler(this.downloading_Click);
            // 
            // downloadingInfo
            // 
            this.downloadingInfo.AutoSize = true;
            this.downloadingInfo.BackColor = System.Drawing.Color.Lime;
            this.downloadingInfo.Font = new System.Drawing.Font("Microsoft Sans Serif", 9.75F, System.Drawing.FontStyle.Regular, System.Drawing.GraphicsUnit.Point, ((byte)(0)));
            this.downloadingInfo.Location = new System.Drawing.Point(3, 89);
            this.downloadingInfo.Name = "downloadingInfo";
            this.downloadingInfo.Size = new System.Drawing.Size(105, 16);
            this.downloadingInfo.TabIndex = 12;
            this.downloadingInfo.Text = "Bilgiler Alınıyor...";
            // 
            // _Options
            // 
            this._Options.BackColor = System.Drawing.Color.Lime;
            this._Options.BackgroundImage = ((System.Drawing.Image)(resources.GetObject("_Options.BackgroundImage")));
            this._Options.BackgroundImageLayout = System.Windows.Forms.ImageLayout.Stretch;
            this._Options.Location = new System.Drawing.Point(757, 3);
            this._Options.Name = "_Options";
            this._Options.Size = new System.Drawing.Size(20, 20);
            this._Options.TabIndex = 15;
            this._Options.TabStop = false;
            this._Options.Click += new System.EventHandler(this.Options_Click);
            // 
            // Minimize
            // 
            this.Minimize.BackColor = System.Drawing.Color.Lime;
            this.Minimize.BackgroundImage = ((System.Drawing.Image)(resources.GetObject("Minimize.BackgroundImage")));
            this.Minimize.BackgroundImageLayout = System.Windows.Forms.ImageLayout.Stretch;
            this.Minimize.Location = new System.Drawing.Point(783, 3);
            this.Minimize.Name = "Minimize";
            this.Minimize.Size = new System.Drawing.Size(20, 20);
            this.Minimize.TabIndex = 14;
            this.Minimize.TabStop = false;
            this.Minimize.Click += new System.EventHandler(this.Minimize_Click);
            // 
            // _Close
            // 
            this._Close.BackColor = System.Drawing.Color.Lime;
            this._Close.BackgroundImage = ((System.Drawing.Image)(resources.GetObject("_Close.BackgroundImage")));
            this._Close.BackgroundImageLayout = System.Windows.Forms.ImageLayout.Stretch;
            this._Close.Location = new System.Drawing.Point(809, 3);
            this._Close.Name = "_Close";
            this._Close.Size = new System.Drawing.Size(20, 20);
            this._Close.TabIndex = 10;
            this._Close.TabStop = false;
            this._Close.Click += new System.EventHandler(this.Close_Click);
            // 
            // webBrowser1
            // 
            this.webBrowser1.AllowNavigation = false;
            this.webBrowser1.AllowWebBrowserDrop = false;
            this.webBrowser1.Location = new System.Drawing.Point(0, 185);
            this.webBrowser1.MinimumSize = new System.Drawing.Size(20, 20);
            this.webBrowser1.Name = "webBrowser1";
            this.webBrowser1.ScriptErrorsSuppressed = true;
            this.webBrowser1.ScrollBarsEnabled = false;
            this.webBrowser1.Size = new System.Drawing.Size(837, 451);
            this.webBrowser1.TabIndex = 18;
            this.webBrowser1.Url = new System.Uri("http://45.145.23.31/update/turkish", System.UriKind.Absolute);
            // 
            // play
            // 
            this.play.BackColor = System.Drawing.Color.Lime;
            this.play.BackgroundImage = global::Launcher.Properties.Resources.verifing;
            this.play.BackgroundImageLayout = System.Windows.Forms.ImageLayout.Stretch;
            this.play.FlatAppearance.BorderSize = 0;
            this.play.FlatAppearance.MouseDownBackColor = System.Drawing.Color.Transparent;
            this.play.FlatAppearance.MouseOverBackColor = System.Drawing.Color.Transparent;
            this.play.FlatStyle = System.Windows.Forms.FlatStyle.Flat;
            this.play.Font = new System.Drawing.Font("Impact", 9.75F, System.Drawing.FontStyle.Regular, System.Drawing.GraphicsUnit.Point, ((byte)(0)));
            this.play.ForeColor = System.Drawing.Color.White;
            this.play.Location = new System.Drawing.Point(713, 93);
            this.play.Name = "play";
            this.play.Size = new System.Drawing.Size(121, 25);
            this.play.TabIndex = 20;
            this.play.Text = "Kontrol Ediliyor...";
            this.play.UseVisualStyleBackColor = false;
            this.play.Click += new System.EventHandler(this.play_Click);
            // 
            // font
            // 
            this.font.Anchor = ((System.Windows.Forms.AnchorStyles)((((System.Windows.Forms.AnchorStyles.Top | System.Windows.Forms.AnchorStyles.Bottom) 
            | System.Windows.Forms.AnchorStyles.Left) 
            | System.Windows.Forms.AnchorStyles.Right)));
            this.font.BackColor = System.Drawing.Color.Black;
            this.font.BackgroundImage = global::Launcher.Properties.Resources.font;
            this.font.BackgroundImageLayout = System.Windows.Forms.ImageLayout.Stretch;
            this.font.Image = global::Launcher.Properties.Resources.maxresdefault1;
            this.font.Location = new System.Drawing.Point(0, -1);
            this.font.Name = "font";
            this.font.Size = new System.Drawing.Size(837, 657);
            this.font.TabIndex = 16;
            this.font.TabStop = false;
            this.font.Click += new System.EventHandler(this.font_Click);
            this.font.MouseDown += new System.Windows.Forms.MouseEventHandler(this.TopPanel_MouseDown);
            this.font.MouseMove += new System.Windows.Forms.MouseEventHandler(this.TopPanel_MouseMove);
            this.font.MouseUp += new System.Windows.Forms.MouseEventHandler(this.TopPanel_MouseUp);
            // 
            // metroProgressBar1
            // 
            this.metroProgressBar1.Location = new System.Drawing.Point(0, 140);
            this.metroProgressBar1.Name = "metroProgressBar1";
            this.metroProgressBar1.Size = new System.Drawing.Size(837, 10);
            this.metroProgressBar1.Style = MetroFramework.MetroColorStyle.Silver;
            this.metroProgressBar1.TabIndex = 21;
            this.metroProgressBar1.Theme = MetroFramework.MetroThemeStyle.Dark;
            this.metroProgressBar1.UseCustomBackColor = true;
            this.metroProgressBar1.Value = 100;
            this.metroProgressBar1.Click += new System.EventHandler(this.metroProgressBar1_Click);
            // 
            // button1
            // 
            this.button1.BackColor = System.Drawing.Color.Lime;
            this.button1.BackgroundImage = global::Launcher.Properties.Resources.nonebutton;
            this.button1.BackgroundImageLayout = System.Windows.Forms.ImageLayout.Stretch;
            this.button1.FlatAppearance.BorderSize = 0;
            this.button1.FlatAppearance.MouseDownBackColor = System.Drawing.Color.Transparent;
            this.button1.FlatAppearance.MouseOverBackColor = System.Drawing.Color.Transparent;
            this.button1.FlatStyle = System.Windows.Forms.FlatStyle.Flat;
            this.button1.Font = new System.Drawing.Font("Impact", 9.75F, System.Drawing.FontStyle.Regular, System.Drawing.GraphicsUnit.Point, ((byte)(0)));
            this.button1.ForeColor = System.Drawing.Color.White;
            this.button1.Location = new System.Drawing.Point(500, 93);
            this.button1.Name = "button1";
            this.button1.Size = new System.Drawing.Size(207, 25);
            this.button1.TabIndex = 22;
            this.button1.Text = "Güncellemeyi Manuel  İndir";
            this.button1.UseVisualStyleBackColor = false;
            this.button1.Click += new System.EventHandler(this.button1_Click);
            // 
            // button2
            // 
            this.button2.BackColor = System.Drawing.Color.Lime;
            this.button2.BackgroundImage = global::Launcher.Properties.Resources.nonebutton;
            this.button2.BackgroundImageLayout = System.Windows.Forms.ImageLayout.Stretch;
            this.button2.FlatAppearance.BorderSize = 0;
            this.button2.FlatAppearance.MouseDownBackColor = System.Drawing.Color.Transparent;
            this.button2.FlatAppearance.MouseOverBackColor = System.Drawing.Color.Transparent;
            this.button2.FlatStyle = System.Windows.Forms.FlatStyle.Flat;
            this.button2.Font = new System.Drawing.Font("Impact", 9.75F, System.Drawing.FontStyle.Regular, System.Drawing.GraphicsUnit.Point, ((byte)(0)));
            this.button2.ForeColor = System.Drawing.Color.White;
            this.button2.Location = new System.Drawing.Point(257, 93);
            this.button2.Name = "button2";
            this.button2.Size = new System.Drawing.Size(82, 25);
            this.button2.TabIndex = 23;
            this.button2.Text = "Facebook";
            this.button2.UseVisualStyleBackColor = false;
            this.button2.Click += new System.EventHandler(this.button2_Click);
            // 
            // pictureBox1
            // 
            this.pictureBox1.BackColor = System.Drawing.Color.Transparent;
            this.pictureBox1.BackgroundImageLayout = System.Windows.Forms.ImageLayout.Center;
            this.pictureBox1.Image = global::Launcher.Properties.Resources.logom;
            this.pictureBox1.Location = new System.Drawing.Point(552, 28);
            this.pictureBox1.Name = "pictureBox1";
            this.pictureBox1.Size = new System.Drawing.Size(274, 50);
            this.pictureBox1.TabIndex = 24;
            this.pictureBox1.TabStop = false;
            this.pictureBox1.Click += new System.EventHandler(this.pictureBox1_Click);
            this.pictureBox1.Paint += new System.Windows.Forms.PaintEventHandler(this.TopPanel_Paint);
            this.pictureBox1.MouseDown += new System.Windows.Forms.MouseEventHandler(this.TopPanel_MouseDown);
            this.pictureBox1.MouseMove += new System.Windows.Forms.MouseEventHandler(this.TopPanel_MouseMove);
            this.pictureBox1.MouseUp += new System.Windows.Forms.MouseEventHandler(this.TopPanel_MouseUp);
            // 
            // LauncherVersion
            // 
            this.LauncherVersion.AutoSize = true;
            this.LauncherVersion.BackColor = System.Drawing.Color.Lime;
            this.LauncherVersion.Font = new System.Drawing.Font("Microsoft Sans Serif", 9.75F, System.Drawing.FontStyle.Regular, System.Drawing.GraphicsUnit.Point, ((byte)(0)));
            this.LauncherVersion.Location = new System.Drawing.Point(3, 5);
            this.LauncherVersion.Name = "LauncherVersion";
            this.LauncherVersion.Size = new System.Drawing.Size(11, 16);
            this.LauncherVersion.TabIndex = 8;
            this.LauncherVersion.Text = " ";
            this.LauncherVersion.Click += new System.EventHandler(this.LauncherVersion_Click);
            // 
            // TopPanel
            // 
            this.TopPanel.BackColor = System.Drawing.Color.Lime;
            this.TopPanel.Controls.Add(this.label1);
            this.TopPanel.Controls.Add(this.LauncherVersion);
            this.TopPanel.Controls.Add(this.pictureBox1);
            this.TopPanel.Location = new System.Drawing.Point(3, -2);
            this.TopPanel.Name = "TopPanel";
            this.TopPanel.Size = new System.Drawing.Size(834, 89);
            this.TopPanel.TabIndex = 18;
            this.TopPanel.Paint += new System.Windows.Forms.PaintEventHandler(this.TopPanel_Paint);
            this.TopPanel.MouseDown += new System.Windows.Forms.MouseEventHandler(this.TopPanel_MouseDown);
            this.TopPanel.MouseMove += new System.Windows.Forms.MouseEventHandler(this.TopPanel_MouseMove);
            this.TopPanel.MouseUp += new System.Windows.Forms.MouseEventHandler(this.TopPanel_MouseUp);
            // 
            // label1
            // 
            this.label1.AutoSize = true;
            this.label1.Location = new System.Drawing.Point(552, 12);
            this.label1.Name = "label1";
            this.label1.Size = new System.Drawing.Size(49, 13);
            this.label1.TabIndex = 25;
            this.label1.Text = "150 Ping";
            // 
            // button3
            // 
            this.button3.BackColor = System.Drawing.Color.Lime;
            this.button3.BackgroundImage = global::Launcher.Properties.Resources.nonebutton;
            this.button3.BackgroundImageLayout = System.Windows.Forms.ImageLayout.Stretch;
            this.button3.FlatAppearance.BorderSize = 0;
            this.button3.FlatAppearance.MouseDownBackColor = System.Drawing.Color.Transparent;
            this.button3.FlatAppearance.MouseOverBackColor = System.Drawing.Color.Transparent;
            this.button3.FlatStyle = System.Windows.Forms.FlatStyle.Flat;
            this.button3.Font = new System.Drawing.Font("Impact", 9.75F, System.Drawing.FontStyle.Regular, System.Drawing.GraphicsUnit.Point, ((byte)(0)));
            this.button3.ForeColor = System.Drawing.Color.White;
            this.button3.Location = new System.Drawing.Point(345, 93);
            this.button3.Name = "button3";
            this.button3.Size = new System.Drawing.Size(149, 25);
            this.button3.TabIndex = 24;
            this.button3.Text = "Grafikleri Düşürün!";
            this.button3.UseVisualStyleBackColor = false;
            this.button3.Click += new System.EventHandler(this.button3_Click);
            // 
            // timer1
            // 
            this.timer1.Tick += new System.EventHandler(this.timer1_Tick);
            // 
            // main
            // 
            this.AutoScaleDimensions = new System.Drawing.SizeF(6F, 13F);
            this.AutoScaleMode = System.Windows.Forms.AutoScaleMode.Font;
            this.BackColor = System.Drawing.Color.FromArgb(((int)(((byte)(16)))), ((int)(((byte)(16)))), ((int)(((byte)(15)))));
            this.BackgroundImageLayout = System.Windows.Forms.ImageLayout.Stretch;
            this.ClientSize = new System.Drawing.Size(838, 634);
            this.ControlBox = false;
            this.Controls.Add(this.downloadingInfo);
            this.Controls.Add(this.EstimatedTime);
            this.Controls.Add(this.downloading);
            this.Controls.Add(this.button3);
            this.Controls.Add(this._Options);
            this.Controls.Add(this.button2);
            this.Controls.Add(this.Minimize);
            this.Controls.Add(this.button1);
            this.Controls.Add(this._Close);
            this.Controls.Add(this.metroProgressBar1);
            this.Controls.Add(this.play);
            this.Controls.Add(this.totalDownload);
            this.Controls.Add(this.progressBar);
            this.Controls.Add(this.TopPanel);
            this.Controls.Add(this.webBrowser1);
            this.Controls.Add(this.font);
            this.ForeColor = System.Drawing.Color.White;
            this.FormBorderStyle = System.Windows.Forms.FormBorderStyle.None;
            this.Icon = ((System.Drawing.Icon)(resources.GetObject("$this.Icon")));
            this.MaximizeBox = false;
            this.MinimizeBox = false;
            this.Name = "main";
            this.Padding = new System.Windows.Forms.Padding(20, 30, 20, 20);
            this.StartPosition = System.Windows.Forms.FormStartPosition.CenterScreen;
            this.Text = "Counter-Strike Online 2 English Launcher";
            this.TransparencyKey = System.Drawing.Color.Lime;
            this.FormClosing += new System.Windows.Forms.FormClosingEventHandler(this.main_FormClosing);
            this.Load += new System.EventHandler(this.main_Load);
            ((System.ComponentModel.ISupportInitialize)(this._Options)).EndInit();
            ((System.ComponentModel.ISupportInitialize)(this.Minimize)).EndInit();
            ((System.ComponentModel.ISupportInitialize)(this._Close)).EndInit();
            ((System.ComponentModel.ISupportInitialize)(this.font)).EndInit();
            ((System.ComponentModel.ISupportInitialize)(this.pictureBox1)).EndInit();
            this.TopPanel.ResumeLayout(false);
            this.TopPanel.PerformLayout();
            this.ResumeLayout(false);
            this.PerformLayout();

        }

        #endregion
        private System.Windows.Forms.PictureBox font;
        private System.Windows.Forms.Label EstimatedTime;
        private MetroFramework.Controls.MetroProgressBar progressBar;
        public System.Windows.Forms.Label totalDownload;
        private System.Windows.Forms.PictureBox _Close;
        private System.Windows.Forms.PictureBox Minimize;
        private System.Windows.Forms.Label downloading;
        private System.Windows.Forms.Label downloadingInfo;
        private System.Windows.Forms.Button play;
        private System.Windows.Forms.PictureBox _Options;
        private MetroFramework.Controls.MetroProgressBar metroProgressBar1;
        public System.Windows.Forms.WebBrowser webBrowser1;
        private System.Windows.Forms.Button button1;
        private System.Windows.Forms.Button button2;
        private System.Windows.Forms.PictureBox pictureBox1;
        private System.Windows.Forms.Label LauncherVersion;
        private System.Windows.Forms.Panel TopPanel;
        private System.Windows.Forms.Button button3;
        private System.Windows.Forms.Timer timer1;
        private System.Windows.Forms.Label label1;
    }
}

