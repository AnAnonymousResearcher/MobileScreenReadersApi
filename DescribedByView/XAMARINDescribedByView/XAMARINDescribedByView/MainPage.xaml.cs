using System;
using System.Collections.Generic;
using System.ComponentModel;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using Xamarin.Forms;

namespace XAMARINDescribedByView
{
    // Learn more about making custom code visible in the Xamarin.Forms previewer
    // by visiting https://aka.ms/xamarinforms-previewer
    [DesignTimeVisible(false)]
    public partial class MainPage : ContentPage
    {
        Label label1;
        Entry entry1;

        public MainPage()
        {
            InitializeComponent();

            background.Padding = 10;

            label1 = new Label
            {
                Text = "This label describes the next view",
                BackgroundColor = Color.GreenYellow,
                HeightRequest = 50,
            };
            AutomationProperties.SetIsInAccessibleTree(label1, true);
            background.Children.Add(label1);

            entry1 = new Entry();
            background.Children.Add(entry1);
            AutomationProperties.SetIsInAccessibleTree(entry1, true);
            //This work only for Android
            AutomationProperties.SetLabeledBy(entry1, label1); //the view "entry1" will be described by view "label1"

            //For iOS manually set the Accessibility Description of entry1 equal to the text of label1
            if(Device.RuntimePlatform == Device.iOS)
            {
                AutomationProperties.SetName(entry1, label1.Text);
            }


        }
    }
}
