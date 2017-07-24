import { connect } from 'react-redux'
import { getTickerData } from '../actions'
import BTCchart from '../components/BTCchart'

const mapStateToProps = (state, ownProps) => ({
    tickers: state.tickers
})

const mapDispatchToProps = (dispatch, ownProps) => ({
    onClickGetData: () => {
        dispatch(getTickerData())
    }
})

const BTCchartContainer = connect(
    mapStateToProps,
    mapDispatchToProps
)(BTCchart)

export default BTCchartContainer