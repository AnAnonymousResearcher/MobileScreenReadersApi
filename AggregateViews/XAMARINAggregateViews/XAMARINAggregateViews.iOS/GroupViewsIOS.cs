using System;
using System.Collections.Generic;
using System.Linq;
using CoreGraphics;
using UIKit;
using Xamarin.Forms;
using Xamarin.Forms.Platform.iOS;
using XAMARINAggregateViews.iOS;

[assembly: Dependency(typeof(GroupViewsIOS))]
namespace XAMARINAggregateViews.iOS
{
    public class GroupViewsIOS : IGroupViews
    {
        public void aggregateViews(Layout<View> v)
        {
            
            UIView vista = v.GetRenderer().NativeView;
            
            var elements = new List<UIAccessibilityElement>();
            var nameElement = new UIAccessibilityElement(vista.Superview);

            var labels = vista.Subviews;

            foreach (UIView vi in labels)
            {
                var l = vi as UILabel;
                nameElement.AccessibilityLabel = "pippo";
            }

            nameElement.AccessibilityFrameInContainerSpace = vista.Frame;

            elements.Append(nameElement);

        }
    }
}
