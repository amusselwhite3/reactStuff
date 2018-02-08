//
//  TestView.swift
//  testProject
//
//  Created by Austin Musselwhite on 2/7/18.
//  Copyright © 2018 Facebook. All rights reserved.
//

import UIKit

class TestView: UIView {
  override init(frame: CGRect) {
    super.init(frame: frame)
    
    let label = UILabel(frame: CGRect(x:0, y:0, width:400, height:200))
    label.text = "This is an example Swift page"
    self.addSubview(label)
  }
  
  required init?(coder aDecoder: NSCoder) {
    fatalError("init(coder:) has not been implemented")
  }
  
}
