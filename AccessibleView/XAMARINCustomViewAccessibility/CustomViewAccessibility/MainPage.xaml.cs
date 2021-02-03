using System;
using System.ComponentModel;
using Xamarin.Forms;

namespace CustomViewAccessibility
{
    [DesignTimeVisible(false)]
    public partial class MainPage : ContentPage
    {
        
        public MainPage()
        {
            InitializeComponent();
            Title = "Xamarin accessibility events";

            Button notAccessibleButton = new Button
            {
                Text = "Button 1",
                BackgroundColor = Color.LightGray,
            };
            stacklayout.Children.Add(notAccessibleButton);

            IAccessibleButton accessibleButton = new IAccessibleButton
            {
                Text = "NOT IN FOCUS",
                TextColor = Color.Black,
            };
            AutomationProperties.SetIsInAccessibleTree(accessibleButton, true);
            stacklayout.Children.Add(accessibleButton);

        }

	}
}