const tickers = (state=[] , action) => {
    switch (action.type) {
        case 'RECEIVE_DATA':
            var newState = [...state,
                                [action.coinData.ticker.date, action.coinData.ticker.last] ]
            if (newState.length > 400) {
                newState.shift()
            }
            return newState
        default:
            return state
    }
}

export default tickers