/* This work is licensed under a Creative Commons Attribution-NonCommercial 4.0 International License. */

#import "RNAccessibilityFocus.h"
#import "RNTAccessibleWrapper.h"

@implementation RNAccessibilityFocus

RCT_EXPORT_MODULE()
RCT_EXPORT_VIEW_PROPERTY(onFocusStart, RCTDirectEventBlock)
RCT_EXPORT_VIEW_PROPERTY(onFocusEnd, RCTDirectEventBlock)

-(UIView*) view{

    RNTAccessibleWrapper* wrapper=[[RNTAccessibleWrapper alloc]init];
    return wrapper;
}

@end

