import React from 'react'
import MenuItem from '../menu-item/menu-item.component'
import './directory.styles.scss'

class Directory extends React.Component {
  constructor() {
    super()

    // small 480*320
    // big 800*490
    this.state = {
      sections: [
        {
          title: 'sous-vide',
          imageUrl: '/images/sous-vide-meat.jpg',
          id: 1
        },
        {
          title: 'face masks',
          imageUrl: '/images/vitalik-moon.jpg',
          id: 2
        },
        {
          title: 'btc Futures',
          imageUrl: '/images/btc-mcdonalds.jpg',
          id: 3
        },
        {
          title: 'food diaries',
          imageUrl: '/images/spiky-sea-creature.jpg',
          size: 'large',
          id: 4
        },
        {
          title: 'another tesla',
          imageUrl: '/images/tesla-large.jpg',
          size: 'large',
          id: 5
        },
      ]
    }
  }

render() {
  return (
    <div className='directory-menu'> {
      this.state.sections.map(({title, imageUrl, id, size}) => (
        <MenuItem key={id} title={title} imageUrl={imageUrl} size={size} />
      ))
    }
    </div>
  )
}
}

export default Directory