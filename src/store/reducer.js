import * as actionTypes from './actionTypes'
import { updateObject } from './utility'

const initialState = {
    loading: false,
    inputSearchValue: "",
    filteredItems: [],
    currSearItem: {}
}

const completeSearch = (state, action) => {
    return updateObject(state, {
        loading: false,
        inputSearchValue: action.searchKeyword,
        filteredItems: action.searchItems
    })
}

const storeFinalItem = (state, action) => {
    return updateObject(state, {
        currSearItem: action.finalItem
    })
}

const noResult = (state, action) => {
    return updateObject(state, initialState)
}

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case actionTypes.START_SEARCH:
            return updateObject(state, { loading: true })
        case actionTypes.NO_RESULT:
            return noResult(state, action)
        case actionTypes.COMPLETE_SEARCH:
            return completeSearch(state, action)
        case actionTypes.STORE_FINAL_ITEM:
            return storeFinalItem(state, action)
        default:
            return state
    }
}

export default reducer;