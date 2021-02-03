using System;
using System.Collections.Generic;
using System.ComponentModel;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using Xamarin.Forms;

namespace XAMARINAggregateViews
{
    // Learn more about making custom code visible in the Xamarin.Forms previewer
    // by visiting https://aka.ms/xamarinforms-previewer
    [DesignTimeVisible(false)]
    public partial class MainPage : ContentPage
    {
        StackLayout separateElements, aggregateElements;
        Label sep1, sep2, sep3;
        Label agg1, agg2, agg3;

        public MainPage()
        {
            InitializeComponent();
            background.Padding = 10;

            //container for the separated views
            separateElements = new StackLayout
            {
                BackgroundColor = Color.IndianRed,
                HeightRequest = 150,
                Padding = 10,
            };
            background.Children.Add(separateElements);
            AutomationProperties.SetIsInAccessibleTree(separateElements, false);

            //here I create the single separated views
            sep1 = new Label
            {
                Text = "Separated label 1",
                BackgroundColor = Color.Orange,
                HeightRequest = 40,
            };
            AutomationProperties.SetIsInAccessibleTree(sep1, true);
            sep2 = new Label
            {
                Text = "Separated label 2",
                BackgroundColor = Color.Orange,
                HeightRequest = 40,
            };
            AutomationProperties.SetIsInAccessibleTree(sep2, true);
            sep3 = new Label
            {
                Text = "Separated label 3",
                BackgroundColor = Color.Orange,
                HeightRequest = 40,
            };
            AutomationProperties.SetIsInAccessibleTree(sep3, true);
            separateElements.Children.Add(sep1);
            separateElements.Children.Add(sep2);
            separateElements.Children.Add(sep3);


            //container for the aggregated views
            aggregateElements = new StackLayout
            {
                BackgroundColor = Color.GreenYellow,
                HeightRequest = 150,
                Padding = 10,
            };
            AutomationProperties.SetIsInAccessibleTree(aggregateElements, true);

            //the container that aggregates the views has to be accessible, setting his "AutomationProperties.IsInAccessibleTree" property to true
            if (Device.RuntimePlatform == Device.Android)
            {
                AutomationProperties.SetIsInAccessibleTree(aggregateElements, true);
            }
            background.Children.Add(aggregateElements);

            //here I create the single views to be aggregated into one single element
            //all the "Label" in Xamarin have "AutomationProperties.IsInAccessibleTree" property setted to false by default
            agg1 = new Label
            {
                Text = "Aggregated label 1",
                BackgroundColor = Color.Orange,
                HeightRequest = 40,
            };
            AutomationProperties.SetIsInAccessibleTree(agg1, false);
            agg2 = new Label
            {
                Text = "Aggregated label 2",
                BackgroundColor = Color.Orange,
                HeightRequest = 40,
            };
            AutomationProperties.SetIsInAccessibleTree(agg2, false);
            agg3 = new Label
            {
                Text = "Aggregated label 3",
                BackgroundColor = Color.Orange,
                HeightRequest = 40,
            };
            AutomationProperties.SetIsInAccessibleTree(agg3, false);

            aggregateElements.Children.Add(agg1);
            aggregateElements.Children.Add(agg2);
            aggregateElements.Children.Add(agg3);

        }

        private void groupAccessibleItems(Layout container)
        {
            String desc = "";
            foreach(Label l in container.Children)
            {
                Console.WriteLine($"PIPPO: id={l.Text}");
                AutomationProperties.SetIsInAccessibleTree(l, false);
                desc += l.Text;
            }
            Console.WriteLine($"PIPPO: totaldesc={desc}");
            AutomationProperties.SetIsInAccessibleTree(container, true);
            AutomationProperties.SetName(container, desc);
        }

        protected override void OnAppearing()
        {
            if (Device.RuntimePlatform == Device.iOS)
            {
                groupAccessibleItems(aggregateElements);
            }
        }

    }
}
