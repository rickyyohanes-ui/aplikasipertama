import React, { Component } from 'react'

export default class Child1 extends Component {

    minBeli = 2;

    render() {
        return (
            <div>
                <h3>Child Component</h3>
                <p>Stock Produk :{this.props.stock}</p>
                <button onClick={()=>this.props.fungsi(this.minBeli)} >Beli</button>
            </div>
        )
    }
}


