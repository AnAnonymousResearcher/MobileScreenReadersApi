/* This work is licensed under a Creative Commons Attribution-NonCommercial 4.0 International License. */

//
//  RNTAccessibleWrapper.m
//  RNAccessibilityFocus
//

#import "RNTAccessibleWrapper.h"

@implementation RNTAccessibleWrapper

//From React parameters methods

#pragma mark - Accessibility

- (void)accessibilityElementDidBecomeFocused{

    _onFocusStart(@{});
}

- (BOOL)isAccessibilityElement{

    return YES;
}

- (void)accessibilityElementDidLoseFocus{

    _onFocusEnd(@{});
}



@end
