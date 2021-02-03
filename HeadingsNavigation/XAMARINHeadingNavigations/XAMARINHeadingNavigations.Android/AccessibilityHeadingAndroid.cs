using System;
using Xamarin.Forms;
using Xamarin.Forms.Platform.Android;
using XAMARINHeadingNavigations.Droid;

[assembly: Dependency(typeof(AccessibilityHeadingAndroid))]
namespace XAMARINHeadingNavigations.Droid
{
    public class AccessibilityHeadingAndroid : IAccessibilityHeading
    {
        public void SetHeading(View v)
        {
            v.GetRenderer().View.AccessibilityHeading = true;
            
        }

        //check if the passed view (vc) is a header
        public void CheckHeading(View vc)
        {
            if(vc.GetRenderer().View.AccessibilityHeading == true)
            {
                Console.WriteLine("PIPPO, I am an header");
            }
        }
    }
}
