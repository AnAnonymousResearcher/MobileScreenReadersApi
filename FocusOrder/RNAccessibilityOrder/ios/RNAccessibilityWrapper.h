//
//  RNAccessibilityWrapper.h
//
//  Created by Louay Alakkad on 10/04/2019.
//  Copyright © 2019 Facebook. All rights reserved.
//

#import <UIKit/UIKit.h>
#import <UIKit/UIAccessibilityContainer.h>

#import <React/RCTView.h>

@interface RNAccessibilityWrapper : RCTView

- (void) setAccessibilityFields: (NSArray *)reactTags;

@end
