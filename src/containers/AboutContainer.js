import { connect } from 'react-redux'
import About from '../components/About'

const mapStateToProps = (state, ownProps) => ({
    testProps: ownProps
})

const mapDispatchToProps = (dispatch, ownProps) => ({
    
})

const AboutContainer = connect(
    mapStateToProps,
    mapDispatchToProps
)(About)

export default AboutContainer