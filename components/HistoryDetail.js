import React from 'react'
import MetricCard from './MetricCard';
import TextButton from './TextButton';
import { View, StyleSheet } from 'react-native'
import { connect } from 'react-redux'
import { white } from '../utils/colors';
import { addEntry } from '../actions'
import  { removeEntry } from '../utils/api'
import { timeToString, getDailyReminderValue } from '../utils/helpers';

class HistoryDetail extends React.Component {
    static navigationOptions = ({ navigation }) => {
        const { entryId } = navigation.state.params 

        const dateValues = entryId.split('-')
        const year = dateValues[0]
        const month = dateValues[1]
        const day = dateValues[2]
        return {
            title: `${day}/${month}/${year}`
        }
    }

    shouldComponentUpdate(newProps) {
        return newProps.metrics !== null && newProps.metrics.today
    }

    reset = () => {
        const { remove, goBack, entryId } = this.props
        remove()
        removeEntry(entryId)
        goBack()
    }

    render() {
        const { metrics } = this.props
        return (
            <View style={styles.container}>
                <MetricCard metrics={metrics} />
                <TextButton style={{ margin: 20 }} value='RESET' onPress={this.reset} />
            </View>
        )
    }
}

function mapStateToProps(state, { navigation }) {
    const { entryId } = navigation.state.params
    return {
        entryId,
        metrics: state[entryId]
    }
}

function mapDispatchToProps(dispatch, { navigation }) {
    const { entryId } = navigation.state.params
    return {
        remove: () => dispatch(addEntry({
            [entryId]: timeToString() === entryId 
                ? getDailyReminderValue()
                : null
        })),
        goBack: () => navigation.goBack()
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: white,
        padding: 15,
    },
})
  
export default connect(mapStateToProps, mapDispatchToProps)(HistoryDetail);