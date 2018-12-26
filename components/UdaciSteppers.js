import React from 'react'
import { View, Text, TouchableOpacity, StyleSheet, Platform } from 'react-native'
import { FontAwesome } from '@expo/vector-icons'
import { black, gray, purple, white } from '../utils/colors';

export default function UdaciSteppers ({onDecrement, onIncrement, unit, value}) {
    return (
        <View style={[styles.row, {justifyContent: 'space-between'}]}>
            {Platform.OS === 'ios' 
            ? <View style={{flexDirection: 'row'}}>
                    <TouchableOpacity 
                        style={[styles.iosBtn, {borderTopRightRadius: 0, borderBottomRightRadius: 0}]}
                        onPress={onDecrement}>
                        <FontAwesome name='minus' size={30} color={black}/>
                    </TouchableOpacity>
                    <TouchableOpacity  
                            style={[styles.iosBtn, {borderTopRightRadius: 0, borderBottomRightRadius: 0}]}
                            onPress={onIncrement}>
                        <FontAwesome name='plus' size={30} color={black}/>
                    </TouchableOpacity>
                </View>
            : <View style={{flexDirection: 'row'}}>
                <TouchableOpacity 
                    style={[styles.androidBtn]}
                    onPress={onDecrement}>
                    <FontAwesome name='minus' size={30} color={white}/>
                </TouchableOpacity>
                <TouchableOpacity  
                    style={[styles.androidBtn]}
                    onPress={onIncrement}>
                    <FontAwesome name='plus' size={30} color={white}/>
                </TouchableOpacity>
            </View>
            }
            <View style={styles.metric}>
                <Text style={{fontSize: 24}}>{value}</Text>
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
    },
    androidBtn: {
        margin: 5,
        backgroundColor: purple,
        padding: 10,
        borderRadius: 2,
    },
    iosBtn: {
        backgroundColor: white,
        borderColor: purple,
        borderWidth: 1,
        borderRadius: 3,
        padding: 5,
        paddingLeft: 25,
        paddingRight: 25,
    },
})