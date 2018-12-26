import React from 'react'
import { Text, StyleSheet } from 'react-native'
import { purple } from '../utils/colors';

export default function DateHeader({date}) {
    return (
        <Text style={styles.dateHeader}>
            {date}
        </Text>
    )
}

const styles = StyleSheet.create({
    dateHeader: {
        color: purple,
        fontSize: 25,
    }
})