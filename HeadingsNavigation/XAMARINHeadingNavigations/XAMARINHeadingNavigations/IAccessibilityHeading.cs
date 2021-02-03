using System;
using Xamarin.Forms;

namespace XAMARINHeadingNavigations
{
    public interface IAccessibilityHeading
    {
        void SetHeading(View v);

        //this is just to check if view is correctly been set as a header
        void CheckHeading(View vc);
    }
}
