using System;
using System.Diagnostics;
using Foundation;
using ObjCRuntime;
using UIKit;
using Xamarin.Forms;
using Xamarin.Forms.Platform.iOS;
using XAMARINCustomAction.iOS;

[assembly: Dependency(typeof(CustomActionIos))]
namespace XAMARINCustomAction.iOS
{
    public class CustomActionIos : ICustomAction
    {
        MainPage mainpage;

        public void initAccessibility(MainPage page)
        {
            mainpage = page;
            var iospage = page.GetRenderer().ViewController;

            UIAccessibilityCustomAction up = new UIAccessibilityCustomAction("Increment", actionHandler: Increment);
            UIAccessibilityCustomAction down = new UIAccessibilityCustomAction("Decrement", actionHandler: Decrement);
            iospage.AccessibilityCustomActions = new UIAccessibilityCustomAction[2] { up, down };
            Debug.WriteLine($"PIPPO: DS, counter = {MainPage.counter.Text}");

        }

        private bool Increment(UIAccessibilityCustomAction customAction)
        {
            int n = Int32.Parse(MainPage.counter.Text);
            n++;
            Debug.WriteLine("PIPPO: clicked increment");
            MainPage.counter.Text = "" + (n);
            return true;
        }

        private bool Decrement(UIAccessibilityCustomAction customAction)
        {
            int n = Int32.Parse(MainPage.counter.Text);
            if (n <= 0)
            {
                return false;
            }
            Debug.WriteLine("PIPPO: clicked decrement");
            n--;
            MainPage.counter.Text = "" + (n);
            return true;
        }

    }
}
