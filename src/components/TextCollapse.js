import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import { FONTS} from '../constants';
import { Text, View, LayoutAnimation, Platform, UIManager,StyleSheet } from "react-native";
import { COLORS } from '../constants';

class TextCollapse extends PureComponent {

    constructor(props) {
        super(props);
        this.state = {
            showMore: false
        };
        if (Platform.OS === 'android') {
            UIManager.setLayoutAnimationEnabledExperimental && UIManager.setLayoutAnimationEnabledExperimental(true);
        }
        const { collapseDuration, collapseType, springDamping } = this.props;
        this.LayoutAnimation = {
            duration: collapseDuration,
            create: {
                type: LayoutAnimation.Types[collapseType],
                property: LayoutAnimation.Properties.scaleY,
            },
            update: {
                type: LayoutAnimation.Types[collapseType],
                springDamping: springDamping,
            },
        };
    }
    static defaultProps = {
        text: "Nothing to show",
        initialTextLength: 159,
        collapseDuration: 250,
        collapseType: 'spring',
        springDamping: 0.7,
        showMoreTextStyle: {
            color: '#858585',
            paddingStart: 5
        }
    };

    static propTypes = {
        text: PropTypes.string.isRequired,
        containerStyle: PropTypes.object,
        textStyle: PropTypes.object,
        showMoreTextStyle: PropTypes.object,
        initialTextLength: PropTypes.number,
        collapseDuration: PropTypes.number,
        collapseType: PropTypes.string,
        springDamping: PropTypes.number,
    };

    toggleShowMore = () => {
        const { showMore } = this.state;
        LayoutAnimation.configureNext(this.LayoutAnimation);
        this.setState({ showMore: !showMore })
    };

    render() {
        const { showMore } = this.state;
        const { text, textStyle, initialTextLength, showMoreTextStyle, containerStyle } = this.props;
        const shouldTrimmed = text.length > initialTextLength;
        const trimmedText = shouldTrimmed ? text.substring(0, initialTextLength) + '...' : text;
        return (
            <View style={{ width: '100%', overflow: 'hidden' }}>
                <View style={containerStyle}>
                    <Text style={styles.text}>
                        {showMore ? text : trimmedText}
                        {shouldTrimmed && <Text style={showMoreTextStyle}>
                            {/* {showMore ? 'less' : 'more'} */}
                        </Text>}
                    </Text>
                </View>
            </View>
        )
    }
}

export default TextCollapse;


const styles = StyleSheet.create({
    text: {
        ...FONTS.light3,
        margin: 6,
        color: COLORS.black,
        textAlign: 'justify',
    },
})