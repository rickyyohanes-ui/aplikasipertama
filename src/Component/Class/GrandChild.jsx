import React, { Component } from 'react'

export default class GrandChild extends Component {
    render() {
        return (
            <div>
                <h3>Grand Child</h3>
                <p>{this.props.data}</p>
            </div>
        )
    }
}
