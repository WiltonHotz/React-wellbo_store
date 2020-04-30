const INITIAL_STATE = {
  sections: [
    {
      title: 'sous-vide',
      imageUrl: '/images/sections-data/sous-vide-meat.jpg',
      id: 1,
      linkUrl: 'shop/sous-vide',
    },
    {
      title: 'face masks',
      imageUrl: '/images/sections-data/vitalik-moon.jpg',
      id: 2,
      linkUrl: 'shop/face-masks',
    },
    {
      title: 'btc Futures',
      imageUrl: '/images/sections-data/btc-mcdonalds.jpg',
      id: 3,
      linkUrl: 'shop/btc-futures',
    },
    {
      title: 'deli food',
      imageUrl: '/images/sections-data/spiky-sea-creature.jpg',
      size: 'large',
      id: 4,
      linkUrl: 'shop/deli-food',
    },
    {
      title: 'another tesla',
      imageUrl: '/images/sections-data/tesla-large.jpg',
      size: 'large',
      id: 5,
      linkUrl: 'shop/another-tesla',
    },
  ]
}

const directoryReducer = (state = INITIAL_STATE , action) => {
  switch(action.type) {
    default:
      return state
  }
}

export default directoryReducer