import React from 'react';
import PropTypes from 'prop-types';
import {
  NativeModules,
  ViewProps,
  ViewPropTypes,
  findNodeHandle,
  requireNativeComponent,
  Platform,
  View,
} from 'react-native';

const {RNAccessibilityWrapperManager} = NativeModules;

const RNAccessibilityWrapper = requireNativeComponent('RNAccessibilityWrapper');

const AccessibilityWrapperPropTypes = {
  ...ViewPropTypes,
  fieldsRefs: PropTypes.arrayOf(
    PropTypes.shape({
      current: PropTypes.object,
    }),
  ),
};

class AccessibilityWrapper extends React.Component {
  static propTypes = AccessibilityWrapperPropTypes;

  ref = React.createRef();

  componentDidMount() {
    if (this.props.fieldsRefs) {
      this.setAccessibilityFields(
        this.props.fieldsRefs.map(ref => ref.current),
      );
    }
  }
  componentDidUpdate() {
    if (this.props.fieldsRefs) {
      this.setAccessibilityFields(
        this.props.fieldsRefs.map(ref => ref.current),
      );
    }
  }

  setAccessibilityFields = (fields = []) => {
    const fieldTags =
      fields && fields.map(component => component && findNodeHandle(component));
    return RNAccessibilityWrapperManager.setAccessibilityFields(
      findNodeHandle(this.ref.current),
      fieldTags,
    );
  };

  render() {
    return <RNAccessibilityWrapper {...this.props} ref={this.ref} />;
  }
}

const AccessibilityWrapperAndroid = ({fieldsRefs, ...props}) => (
  <View {...props} />
);
AccessibilityWrapperAndroid.propTypes = AccessibilityWrapperPropTypes;

/**
 * The AccessibilityWrapper component allows you to adjust the behaviour of the native platform
 * when it comes to accessibility. Using this component you can tell the native platform to
 * group all subviews together for accessibility purposes (since it's not always done by
 * default), and you can even override the focus order of subviews
 *
 * @example
 *  export default class App extends Component<{}> {
 *    fooRef = React.createRef<Text>();
 *    barRef = React.createRef<Text>();
 *    bazRef = React.createRef<Text>();
 *
 *    public render() {
 *      return (
 *        <AccessibilityWrapper fieldsRefs={[
 *          this.barRef,
 *          this.fooRef,
 *          this.bazRef,
 *        ]}>
 *          <SafeAreaView>
 *            <Text ref={this.fooRef}>Foo</Text>
 *            <Text ref={this.barRef}>Bar</Text>
 *            <Text ref={this.bazRef}>Baz</Text>
 *          </SafeAreaView>
 *        </AccessibilityWrapper>
 *      );
 *    }
 *  }
 */
export default Platform.select({
  ios: AccessibilityWrapper,
  android: AccessibilityWrapperAndroid,
});
