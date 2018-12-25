import React from 'react'
import { TouchableOpacity, Text } from 'react-native'

export default function TextButton({value, onPress}) {
    return (
        <TouchableOpacity onPress={onPress}>
             <Text>{value}</Text>
        </TouchableOpacity>
    )
}
