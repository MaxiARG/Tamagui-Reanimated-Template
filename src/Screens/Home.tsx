import { NavigationProp, useNavigation } from "@react-navigation/native"
import { useEffect, } from "react"
import { ScrollView, View } from "tamagui"
import Text from "../DesignSystem/atoms/Text"
import { AppScreensParams } from "../Navigator/RootStack"

const Home = () => {
    const navigation = useNavigation<NavigationProp<AppScreensParams>>()

    useEffect(() => {
        navigation.setOptions({
            title: 'Animations'
        })
    }
        , [])

    return (
        <>
            <View flex={0.4} backgroundColor={'white'}></View>
            <ScrollView
                flex={1}
                contentContainerStyle={{
                    paddingVertical: '$padding.md',
                    alignItems: 'center',
                    justifyContent: 'center',
                    backgroundColor: 'white'
                }}
            >
                <View rowGap={10} alignItems="center">
                    <Text link onPress={() => navigation.navigate('ShakingView')}>❤️ Shaking View</Text>
                    <Text>Just another placeholder</Text>
                </View>
            </ScrollView>
            <View flex={0.4} backgroundColor={'white'}></View>
        </>
    )
}

export default Home

