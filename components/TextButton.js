import React from 'react'
import { TouchableOpacity, Text, StyleSheet } from 'react-native'
import { purple } from '../utils/colors';

export default function TextButton({value, onPress, style = {}}) {
    return (
        <TouchableOpacity onPress={onPress}>
             <Text style={[styles.reset, style]}>{value}</Text>
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    reset: {
      textAlign: 'center',
      color: purple,
    }
})
