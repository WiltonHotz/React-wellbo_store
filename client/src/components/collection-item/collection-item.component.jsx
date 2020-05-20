import React from 'react'
import {
  CollectionItemContainer,
  CollectionFooterContainer,
  AddButton,
  NameContainer,
  PriceContainer,
  BackgroundImage
} from './collection-item.styles'
import { connect } from 'react-redux'
import { addItem } from '../../redux/cart/cart.actions'


export const CollectionItem = ({ item, addItem }) => {
  const { name, price, imageUrl } = item
  return (
  <CollectionItemContainer>
    <BackgroundImage imageUrl={imageUrl} className='image'/>
      <CollectionFooterContainer>
        <NameContainer>{ name }</NameContainer>
        <PriceContainer>{ price }</PriceContainer>
      </CollectionFooterContainer>
      <AddButton onClick={() => addItem(item)} inverted> Add to cart </AddButton>
  </CollectionItemContainer>
)}

const mapDispatchToProps = dispatch => ({
  addItem: item => dispatch(addItem(item))
})

export default connect(null, mapDispatchToProps)(CollectionItem)