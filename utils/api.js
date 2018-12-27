import { AsyncStorage } from 'react-native'
import { CALENDAR_STORAGE_KEY, formatCalendarResults } from './_calendar'

export function submitEntry({ value, key }) {
    return AsyncStorage.mergeItem(key, JSON.stringify({
        [key]: value
    }))
}

export function removeEntry(key) {
    return AsyncStorage.getItem(CALENDAR_STORAGE_KEY).then((results) => {
        const data = JSON.parse(results)
        data[key] = undefined
        delete data[key]
        AsyncStorage.setItem(CALENDAR_STORAGE_KEY, JSON.stringify(data))
     })
}

export function fetchCalendarResults() {
    return AsyncStorage.getItem(CALENDAR_STORAGE_KEY)
        .then(formatCalendarResults)
}