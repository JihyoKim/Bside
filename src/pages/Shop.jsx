import React from 'react'
import NewAlbum from '../components/shop/NewAlbum'
import ShippingBanner from '../components/shop/ShippingBanner'
import { Outlet } from 'react-router-dom'
import './Shop.css'

const Shop = () => {
  return (
    <div className="shop-container">
      <NewAlbum />
      <Outlet />
      <ShippingBanner />
    </div>
  )
}

export default Shop