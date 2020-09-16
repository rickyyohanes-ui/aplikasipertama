import React, { Component } from 'react'
import './CSS/Produk.css';


export default class Produk extends Component {

    constructor(props) {
        super(props)
        this.state = {
            stock: this.props.stock,
            sub: "beli",
            status: "tersedia",
            disabled: false,
        }
    }

    ButtonBeli = () => {
        this.setState({
            stock: this.state.stock -1
        })

        if(this.state.stock === 1){
            this.setState({
                status: "Habis",
                disabled: true,
            })
        }
    }

    render() {
        return (
            <div className="box-stock">
                <h2>{this.props.nama}</h2>
                <img src="http://placeimg.com/640/480/tech" alt=""/>
                <p>Rp.{this.props.harga}</p>
                <p>{this.state.stock}</p>
                <button className="btn-click" onClick={this.ButtonBeli} disabled={this.state.disabled}>Beli</button>
                <p>{this.state.status}</p>
            </div>
        )
    }
}
