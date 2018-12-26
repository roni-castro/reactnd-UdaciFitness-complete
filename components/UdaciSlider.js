import React from 'react'
import { View, Text, Slider, StyleSheet } from 'react-native'
import { gray, } from '../utils/colors';

export default function UdaciSlider ({max, step, unit, value, onChange }) {
    return (
        <View style={styles.row}>
            <Slider
                style={{flex: 1}}
                minimumValue={0}
                maximumValue={max}
                step={step}
                value={value}
                onValueChange={onChange}
            />
            <View style={styles.metric}>
                <Text style={{fontSize: 24, textAlign: 'center'}}>{value}</Text>
                <Text style={{fontSize: 18, color: gray}}>{unit}</Text>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    row: {
        flexDirection: 'row',
        alignItems: 'center',
        flex:1,
        margin: 10
    },
    metric: {
        width: 64,
        alignItems: 'center',
        justifyContent: 'center',
    }
})