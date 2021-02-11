namespace ManifestTool
{
    partial class Form1
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
            System.ComponentModel.ComponentResourceManager resources = new System.ComponentModel.ComponentResourceManager(typeof(Form1));
            this.progressBar1 = new System.Windows.Forms.ProgressBar();
            this.DirectoryPath = new System.Windows.Forms.TextBox();
            this.Open = new System.Windows.Forms.Button();
            this.Logging = new System.Windows.Forms.RichTextBox();
            this.Start = new System.Windows.Forms.Button();
            this.SuspendLayout();
            // 
            // progressBar1
            // 
            this.progressBar1.Location = new System.Drawing.Point(1, 82);
            this.progressBar1.Name = "progressBar1";
            this.progressBar1.Size = new System.Drawing.Size(531, 10);
            this.progressBar1.TabIndex = 0;
            // 
            // DirectoryPath
            // 
            this.DirectoryPath.Location = new System.Drawing.Point(1, 98);
            this.DirectoryPath.Name = "DirectoryPath";
            this.DirectoryPath.Size = new System.Drawing.Size(531, 20);
            this.DirectoryPath.TabIndex = 1;
            this.DirectoryPath.Text = "Target directory";
            // 
            // Open
            // 
            this.Open.BackgroundImage = ((System.Drawing.Image)(resources.GetObject("Open.BackgroundImage")));
            this.Open.FlatStyle = System.Windows.Forms.FlatStyle.Flat;
            this.Open.ForeColor = System.Drawing.Color.Black;
            this.Open.Location = new System.Drawing.Point(178, 24);
            this.Open.Name = "Open";
            this.Open.Size = new System.Drawing.Size(171, 41);
            this.Open.TabIndex = 2;
            this.Open.Text = "Select Folder";
            this.Open.UseVisualStyleBackColor = true;
            this.Open.Click += new System.EventHandler(this.button1_Click);
            // 
            // Logging
            // 
            this.Logging.Location = new System.Drawing.Point(1, 124);
            this.Logging.Name = "Logging";
            this.Logging.ReadOnly = true;
            this.Logging.Size = new System.Drawing.Size(531, 406);
            this.Logging.TabIndex = 3;
            this.Logging.Text = "";
            // 
            // Start
            // 
            this.Start.BackgroundImage = ((System.Drawing.Image)(resources.GetObject("Start.BackgroundImage")));
            this.Start.FlatStyle = System.Windows.Forms.FlatStyle.Flat;
            this.Start.Location = new System.Drawing.Point(355, 24);
            this.Start.Name = "Start";
            this.Start.Size = new System.Drawing.Size(171, 41);
            this.Start.TabIndex = 4;
            this.Start.Text = "Create Update File";
            this.Start.UseVisualStyleBackColor = true;
            this.Start.Click += new System.EventHandler(this.Start_Click);
            // 
            // Form1
            // 
            this.AutoScaleDimensions = new System.Drawing.SizeF(6F, 13F);
            this.AutoScaleMode = System.Windows.Forms.AutoScaleMode.Font;
            this.BackColor = System.Drawing.SystemColors.Control;
            this.BackgroundImage = ((System.Drawing.Image)(resources.GetObject("$this.BackgroundImage")));
            this.BackgroundImageLayout = System.Windows.Forms.ImageLayout.None;
            this.ClientSize = new System.Drawing.Size(534, 532);
            this.Controls.Add(this.Start);
            this.Controls.Add(this.Logging);
            this.Controls.Add(this.Open);
            this.Controls.Add(this.DirectoryPath);
            this.Controls.Add(this.progressBar1);
            this.FormBorderStyle = System.Windows.Forms.FormBorderStyle.FixedSingle;
            this.Icon = ((System.Drawing.Icon)(resources.GetObject("$this.Icon")));
            this.Name = "Form1";
            this.Text = "Manifest Generator";
            this.ResumeLayout(false);
            this.PerformLayout();

        }

        #endregion

        private System.Windows.Forms.ProgressBar progressBar1;
        private System.Windows.Forms.TextBox DirectoryPath;
        private System.Windows.Forms.Button Open;
        private System.Windows.Forms.RichTextBox Logging;
        private System.Windows.Forms.Button Start;
    }
}

