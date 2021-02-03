//
//  ViewController.swift
//  iOSCustomAction
//
//  Created by Mattia Ducci on 19/04/2020.
//  Copyright © 2020 Mattia Ducci. All rights reserved.
//

import UIKit

class ViewController: UIViewController {
    
    var curCnt:Int! = 0{
        willSet{
            DispatchQueue.main.async {
                self.counterLbl.text = "\(newValue!)"
            }
        }
    }
    
    
    @IBOutlet weak var counterLbl: UILabel!
    
    override func viewDidLoad() {
        super.viewDidLoad()
        initAccessibility()
    }
    
    private func initAccessibility(){
        let up = UIAccessibilityCustomAction(name: "Increment", target: self, selector: #selector(increment))
        let down = UIAccessibilityCustomAction(name: "Decrement", target: self, selector: #selector(decrement))
        self.accessibilityCustomActions = [up,down]
    }
    
    @objc private func increment() -> Bool{
        curCnt += 1
        return true
    }
    
    @objc private func decrement() -> Bool{
        guard curCnt > 0 else {return false}
        curCnt -= 1
        return true
    }


}

