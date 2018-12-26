import React from 'react'
import { View, Text, StyleSheet } from 'react-native'
import MetricCard from './MetricCard';
import { connect } from 'react-redux'
import { white } from '../utils/colors';

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

    render() {
        const { params } = this.props.navigation.state;
        const { metrics } = this.props
        return (
            <View style={styles.container}>
                <MetricCard metrics={metrics} />
            </View>
        )
    }
  }

  function mapStateToProps(state, { navigation }) {
    const { entryId } = navigation.state.params
    return {
        metrics: state[entryId]
    }
  }

  const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: white,
        padding: 15,
    },
  })
  
   export default connect(mapStateToProps)(HistoryDetail);