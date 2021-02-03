using System;
using Xamarin.Forms;

namespace XAMARINAggregateViews
{
    public interface IGroupViews
    {
        void aggregateViews(Layout<View> v);
    }
}
