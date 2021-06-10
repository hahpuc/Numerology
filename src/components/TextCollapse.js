import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import { Text, View, LayoutAnimation, Platform, UIManager,StyleSheet } from "react-native";
import { COLORS } from '../constants';

class TextCollaps extends PureComponent {

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
        text: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
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

export default TextCollaps;


const styles = StyleSheet.create({
    text: {
        fontFamily: 'Roboto-Regular',
        fontSize: 17,
        margin: 6,
        color: COLORS.black,
        textAlign: 'justify',
    },
})