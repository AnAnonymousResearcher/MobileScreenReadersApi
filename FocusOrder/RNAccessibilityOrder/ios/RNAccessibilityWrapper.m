//
//  RNAccessibilityWrapper.m
//
//  Created by Louay Alakkad on 10/04/2019.
//  Copyright © 2019 Facebook. All rights reserved.
//

#import <Foundation/Foundation.h>
#import "RNAccessibilityWrapper.h"
#import <UIKit/UIKit.h>

@implementation RNAccessibilityWrapper

- (void) setAccessibilityFields: (NSArray *)fields
{
  NSMutableArray *accessibleElements = [NSMutableArray arrayWithCapacity:[fields count]];
  [fields enumerateObjectsUsingBlock:^(id obj, NSUInteger idx, BOOL * stop) {
    UIView *field = obj;
    [accessibleElements addObject:field];
  }];
  self.accessibilityElements = (NSArray *)accessibleElements;
}

- (bool) shouldGroupAccessibilityChildren {
  return YES;
}

@end
