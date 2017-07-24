import React from 'react'
import { Link } from 'react-router-dom'

class About extends React.Component {

    constructor(props) {
        super(props)
    }

    componentDidMount() {
        // console.log('route data:', this.props.testProps)
    }

    render() {
        return (
            <div>
                <h2>About</h2>
                <Link to="/">index</Link>
                <hr />
                lijiaqiang@outlook.com
            </div>
        )
    }
}

export default About