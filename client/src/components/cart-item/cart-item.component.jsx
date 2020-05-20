import React from 'react'
import {
  CartItemContainer,
  CartItemImage,
  ItemDetailsContainer,
  NamePriceContainer
} from './cart-item.styles'

export const CartItem = ({item: {imageUrl, price, name, quantity}}) => (
  <CartItemContainer>
    <CartItemImage src={imageUrl} alt='item' />
    <ItemDetailsContainer>
      <NamePriceContainer>{name}</NamePriceContainer>
      <NamePriceContainer>{quantity} x ${price}</NamePriceContainer>
    </ItemDetailsContainer>
  </CartItemContainer>
)

export default React.memo(CartItem)