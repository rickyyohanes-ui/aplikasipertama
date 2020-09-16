import React from 'react'
import Blog from './Blog'
import Produk from '../Class/Produk'

const Home = () => {
    return <div>
        {/* <Blog 
        tanggal="22-agustus-2020"
        judul = "teknologi backend"
        summary = "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book."
        />
        <Blog 
        tanggal="23-agustus-2020"
        judul = "teknologi IOT"
        summary = "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book."
        />
        <Blog 
        tanggal="24-agustus-2020"
        judul = "teknologi FRONTEND"
        summary = "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book."
        />         */}

        <Produk nama="macbook1" stock="10" harga="20001"/>
        <Produk nama="macbook2" stock="12" harga="20002"/>
        <Produk nama="macbook3" stock="14" harga="20003"/>
        <Produk nama="macbook4" stock="16" harga="20004"/>
        <Produk nama="macbook5" stock="18" harga="20005"/>

    </div>
}

export default Home;