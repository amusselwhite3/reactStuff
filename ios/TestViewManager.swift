//
//  testProject
//
//  Created by Austin Musselwhite on 2/7/18.
//  Copyright © 2018 Facebook. All rights reserved.
//

import UIKit

@objc(TestViewManager)
class TestViewManager : RCTViewManager {
  override func view() -> UIView! {
    return TestView();
  }
}
