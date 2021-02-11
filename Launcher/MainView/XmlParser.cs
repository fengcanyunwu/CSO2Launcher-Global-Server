using System;
using System.Collections.Generic;
using System.IO;
using System.Linq;
using System.Net;
using System.Text;
using System.Threading.Tasks;
using System.Windows.Forms;
using System.Xml.Linq;

namespace Launcher.MainView
{
    class XmlParser
    {
        static WebClient _wc = new WebClient();
        static XDocument doc = new XDocument();
        public static bool isFileExist(string pathFile)
        {
            string path = System.IO.Path.GetFullPath("./");
            bool isPathExist = System.IO.File.Exists(path + pathFile);
            return isPathExist;
        }
        public static void LoadXML()
        {
            try
            {
                string path = System.IO.Path.GetFullPath("./");
                string xml = _wc.DownloadString(NetworkThing.Info.getXmlFileFromUrl());
                if (isFileExist("ENG_Version.xml") == true)
                {
                    File.Delete(path + "ENG_Version.xml");
                }
                File.Create(path + "ENG_Version.xml").Close();
                File.WriteAllText(path + "ENG_Version.xml", xml);
                doc = XDocument.Load("ENG_Version.xml");
            }
            catch (Exception e)
            {
                MessageBox.Show(e.ToString());
            }
        }
        public static string getLauncherVersion()
        {
            var version = doc.Root.Element("Launcher").Value;
            return version;
        }
    }
}
