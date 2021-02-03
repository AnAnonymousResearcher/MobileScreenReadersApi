//
//  ViewController.swift
//  iOSViewDescribedByAnotherOne
//
//  Created by Mattia Ducci on 30/04/2020.
//  Copyright © 2020 Mattia Ducci. All rights reserved.
//

import UIKit

class ViewController: UIViewController {
    
    @IBOutlet weak var describingLbl: UILabel!
    @IBOutlet weak var describedLbl: UILabel!
    
    private let accessibilityLabelText = "my label"

    override func viewDidLoad() {
        super.viewDidLoad()
        
        describingLbl.accessibilityLabel = accessibilityLabelText
        describedLbl.accessibilityLabel = accessibilityLabelText
    }
    


}

