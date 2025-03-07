import Animated, { useAnimatedStyle, withRepeat, withSequence, withSpring, withTiming } from 'react-native-reanimated';
import { useSharedValue } from 'react-native-reanimated';
import { Button, StyleSheet } from 'react-native';
import { View } from 'tamagui';

export function ShakingView() {

    const offset = useSharedValue<number>(0);

    const style = useAnimatedStyle(() => ({
        transform: [{ translateX: offset.value }],
    }));

    const OFFSET = 100;
    const TIME = 250;

    const handlePress = () => {
        offset.value = withSequence(
            // start from -OFFSET
            withTiming(-OFFSET, { duration: TIME / 2 }),
            // shake between -OFFSET and OFFSET 5 times
            withRepeat(withTiming(OFFSET, { duration: TIME }), 3, true),
            // go back to 0 at the end
            withTiming(0, { duration: TIME / 2 })
        );
    };

    return (
        <View style={styles.container}>
            <Animated.View style={[styles.box, style]} />
            <Button title="shake" onPress={handlePress} />
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
    },
    box: {
        height: 120,
        width: 120,
        backgroundColor: '#b58df1',
        borderRadius: 20,
        marginVertical: 50,
    },
});