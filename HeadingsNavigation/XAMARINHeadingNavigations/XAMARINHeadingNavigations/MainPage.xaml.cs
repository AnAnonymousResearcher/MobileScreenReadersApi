using System;
using System.Collections.Generic;
using System.ComponentModel;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using Xamarin.Forms;

namespace XAMARINHeadingNavigations
{
    // Learn more about making custom code visible in the Xamarin.Forms previewer
    // by visiting https://aka.ms/xamarinforms-previewer
    [DesignTimeVisible(false)]
    public partial class MainPage : ContentPage
    {
        Label heading1, heading2;
        Label text1, text2;

        public MainPage()
        {
            InitializeComponent();

            heading1 = new Label
            {
                Text = "Header 1",
                BackgroundColor = Color.GreenYellow,
            };
            AutomationProperties.SetIsInAccessibleTree(heading1, true);
            text1 = new Label
            {
                Text = "Label 1 under header 1",
                BackgroundColor = Color.Orange,
            };
            AutomationProperties.SetIsInAccessibleTree(text1, true);
            background.Children.Add(heading1);
            background.Children.Add(text1);

            heading2 = new Label
            {
                Text = "Header 2",
                BackgroundColor = Color.GreenYellow,
            };
            AutomationProperties.SetIsInAccessibleTree(heading2, true);
            text2 = new Label
            {
                Text = "Label 2 under header 2",
                BackgroundColor = Color.Orange,
            };
            AutomationProperties.SetIsInAccessibleTree(text2, true);
            background.Children.Add(heading2);
            background.Children.Add(text2);

            
        }

        protected override void OnAppearing()
        {
            base.OnAppearing();

            //only Android has this function
            if(Device.RuntimePlatform == Device.Android)
            {
                DependencyService.Get<IAccessibilityHeading>().SetHeading(heading1);
                DependencyService.Get<IAccessibilityHeading>().SetHeading(heading2);

                //this is just to check if view is correctly been set as a header
                DependencyService.Get<IAccessibilityHeading>().CheckHeading(heading1);
                DependencyService.Get<IAccessibilityHeading>().CheckHeading(heading2);
            }
            
        }
    }
}
