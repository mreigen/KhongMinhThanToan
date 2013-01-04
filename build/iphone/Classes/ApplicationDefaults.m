/**
* Appcelerator Titanium Mobile
* This is generated code. Do not modify. Your changes *will* be lost.
* Generated code is Copyright (c) 2009-2011 by Appcelerator, Inc.
* All Rights Reserved.
*/
#import <Foundation/Foundation.h>
#import "TiUtils.h"
#import "ApplicationDefaults.h"
 
@implementation ApplicationDefaults
  
+ (NSMutableDictionary*) copyDefaults
{
    NSMutableDictionary * _property = [[NSMutableDictionary alloc] init];

    [_property setObject:[TiUtils stringValue:@"CPoNZudse1wl6lgtn2eX7VuzL62OvfaM"] forKey:@"acs-oauth-secret-production"];
    [_property setObject:[TiUtils stringValue:@"F8KvIcfWuenthpzFTWiZfuyMD3g6YvVk"] forKey:@"acs-oauth-key-production"];
    [_property setObject:[TiUtils stringValue:@"eveduLFLQ5H9cgw1UvSHxPkZgQfV6bnq"] forKey:@"acs-api-key-production"];
    [_property setObject:[TiUtils stringValue:@"Nnf1PUWB4D6hexRf5ZJf5sfHXuuYf7E1"] forKey:@"acs-oauth-secret-development"];
    [_property setObject:[TiUtils stringValue:@"8A2bvLbkyB7KP3GPHihfNS69RMHkTlfi"] forKey:@"acs-oauth-key-development"];
    [_property setObject:[TiUtils stringValue:@"mZOlbTERO5N4cOa4ABJNE1OoEe0VX5Vc"] forKey:@"acs-api-key-development"];
    [_property setObject:[TiUtils stringValue:@"system"] forKey:@"ti.ui.defaultunit"];

    return _property;
}
@end
