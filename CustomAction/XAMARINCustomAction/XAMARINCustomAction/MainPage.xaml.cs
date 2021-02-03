using System;
using System.Collections.Generic;
using System.ComponentModel;
using System.Diagnostics;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using Xamarin.Forms;

namespace XAMARINCustomAction
{
    // Learn more about making custom code visible in the Xamarin.Forms previewer
    // by visiting https://aka.ms/xamarinforms-previewer
    [DesignTimeVisible(false)]
    public partial class MainPage : ContentPage
    {
        public static Label text, counter;

        public MainPage()
        {
            InitializeComponent();
            Console.WriteLine("PIPPO app started");
            Debug.WriteLine("PIPPO app started");
            text = new Label
            {
                Text = "Counter",
                HorizontalOptions = LayoutOptions.CenterAndExpand,
                VerticalOptions = LayoutOptions.CenterAndExpand,
                HorizontalTextAlignment = TextAlignment.Center,
            };
            AutomationProperties.SetIsInAccessibleTree(text, true);

            counter = new Label
            {
                Text = "0",
                HorizontalOptions = LayoutOptions.CenterAndExpand,
                VerticalOptions = LayoutOptions.CenterAndExpand,
                HorizontalTextAlignment = TextAlignment.Center,
            };
            AutomationProperties.SetIsInAccessibleTree(counter, true);

            background.Children.Add(text);
            background.Children.Add(counter);


        }

        protected override void OnAppearing()
        {
            base.OnAppearing();
            DependencyService.Get<ICustomAction>().initAccessibility(this);
        }

    }
}
