export const computePlus = {
    type: 'COMPUTE_PLUS'
}

export const computeMinus = {
    type: 'COMPUTE_MINUS'
}

const requestData = {
    type: 'REQUEST_DATA'
}

const receiveData = (data) => ({
    type: 'RECEIVE_DATA',
    coinData: data
})

export const getTickerData = () => dispatch => {
    dispatch(requestData)
    fetch('/tickerDatas', {method: 'GET'})
        .then(res => res.json())
        .then(data => dispatch(receiveData(data)))
}