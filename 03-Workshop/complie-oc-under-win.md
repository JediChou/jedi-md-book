# Step

## Create a hello.m
```objective-c
#import <Foundation/Foundation.h>
int main (int argc, const char * argv[])
{
	NSAutoreleasePool * pool = [[NSAutoreleasePool alloc] init];
	NSLog (@"hello world");
    [pool drain];
    return 0;
}
```

## complie
```
gcc `gnustep-config --objc-flags` -L /GNUstep/System/Library/Libraries hello.m -o hello -lgnustep-base -lobjc
```
