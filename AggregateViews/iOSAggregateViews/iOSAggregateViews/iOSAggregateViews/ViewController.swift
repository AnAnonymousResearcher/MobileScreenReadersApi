//
//  ViewController.swift
//  iOSAggregateViews
//
//  Created by Mattia Ducci on 19/04/2020.
//  Copyright © 2020 Mattia Ducci. All rights reserved.
//

import UIKit

class ViewController: UIViewController {
    
    @IBOutlet weak var songView: CustomView!
    @IBOutlet weak var additionalInfoView: CustomView!
    
    

    override func viewDidLoad() {
        super.viewDidLoad()
        
        songView.title = "Title:"
        songView.subtitle = "Nothing else matter"
        
        additionalInfoView.title = "Year"
        additionalInfoView.subtitle = "1991"
    }


}

