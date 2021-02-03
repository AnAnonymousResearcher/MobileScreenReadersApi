//
//  ViewController.swift
//  IOSHideFocus
//
//  Created by Paolo Pecis on 01/03/2020.
//  Copyright © 2020 Paolo Pecis. All rights reserved.
//

import UIKit

class ViewController: UIViewController {
    
    @IBOutlet weak var hideFocusBtn: UIButton!
    @IBOutlet weak var button2: UIButton!
    @IBOutlet weak var button3: UIButton!
    
    override func viewDidLoad() {
        super.viewDidLoad()
        
    }
    
    @IBAction func makeButton3UnfocusableDidTap(_ sender: Any) {
        button3.isAccessibilityElement = false
        button3.setTitle("I am no more focusable", for: .normal)
    }
    
   

}

