/* This work is licensed under a Creative Commons Attribution-NonCommercial 4.0 International License. */

import React from 'react';
import PropTypes from 'prop-types';
import {
  requireNativeComponent,
  ViewPropTypes,
} from 'react-native';

const iface = {
  name: 'AccessibilityFocus',
  propTypes: {
    ...ViewPropTypes, // include the default view properties
  },
};

const RNAccessibilityFocus = requireNativeComponent('RNAccessibilityFocus', iface);

const emptyFn = _ => _;

export default class IosAccessibleWrapper extends React.Component {
  render() {
    return (<RNAccessibilityFocus
      style={{...this.props.style}}
      onFocusStart={(this.props.onFocusStart) ? this.props.onFocusStart : emptyFn}
      onFocusEnd={(this.props.onFocusEnd) ? this.props.onFocusEnd : emptyFn}>
    {this.props.children}
    </RNAccessibilityFocus>);
  }
}
