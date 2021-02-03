//
//  CustomView.swift
//  iOSAggregateViews
//
//  Created by Mattia Ducci on 19/04/2020.
//  Copyright © 2020 Mattia Ducci. All rights reserved.
//

import UIKit

class CustomView: UIView {
    
    @IBOutlet weak var titleLbl: UILabel!
    @IBOutlet weak var subtitleLbl: UILabel!
    
    var title:String?{
        willSet{
            DispatchQueue.main.async {
                self.titleLbl.text = newValue
                (self.accessibilityElements![0] as! UIAccessibilityElement).accessibilityLabel = "\(self.titleLbl.text!) \(self.subtitleLbl.text!)"
            }
        }
    }
    
    var subtitle:String?{
        willSet{
            DispatchQueue.main.async {
                self.subtitleLbl.text = newValue
                (self.accessibilityElements![0] as! UIAccessibilityElement).accessibilityLabel = "\(self.titleLbl.text!) \(self.subtitleLbl.text!)"
            }
        }
    }
    
    let nibName = "CustomView"
    var contentView: UIView!
    private var accElements:[UIAccessibilityElement]!
    
    public override init(frame: CGRect) {
        // For use in code
        super.init(frame: frame)
        setUpView()
    }
    
    public required init?(coder aDecoder: NSCoder) {
        // For use in Interface Builder
        super.init(coder: aDecoder)
        setUpView()
    }
    
    private func setUpView(){
        contentView = loadViewFromNib()
        contentView.frame = self.bounds
        contentView.autoresizingMask = [UIView.AutoresizingMask.flexibleWidth, UIView.AutoresizingMask.flexibleHeight]
        addSubview(contentView)
        initAccessibility()
    }
    
    private func loadViewFromNib() ->UIView {
        let bundle = Bundle(for: type(of: self))
        let nib = UINib(nibName: nibName, bundle: bundle)
        let view = nib.instantiate(withOwner: self, options: nil)[0] as! UIView
        return view
    }
    
    private func initAccessibility(){
        var elements = [UIAccessibilityElement]()
        let nameElement = UIAccessibilityElement(accessibilityContainer: self)
        nameElement.accessibilityLabel = "\(titleLbl.text!) \(subtitleLbl.text!)"
        
        nameElement.accessibilityFrameInContainerSpace = contentView.frame
        elements.append(nameElement)
        self.accessibilityElements = elements
    }
    


}
