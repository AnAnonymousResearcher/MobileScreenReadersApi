/* This work is licensed under a Creative Commons Attribution-NonCommercial 4.0 International License. */
//
//  RNTAccessibleImage.h
//  RNAccessibilityFocus
//

#import <UIKit/UIKit.h>
#import <React/RCTComponent.h>
#import <React/RCTView.h>

NS_ASSUME_NONNULL_BEGIN

@interface RNTAccessibleWrapper : RCTView

@property (nonatomic, copy) RCTDirectEventBlock onFocusStart;
@property (nonatomic, copy) RCTDirectEventBlock onFocusEnd;

@end

NS_ASSUME_NONNULL_END
