import React from 'react'
import StripeCheckout from 'react-stripe-checkout'

const StripeCheckoutButton = ({ price }) => {
  const priceForStripe = price * 100
  const publishableKey = 'pk_test_bCphn3QkM0bayN4yWS1SW8yQ001GJtVqqC'

  const onToken = token => {
    alert('Payment Successful')
  }

  return (
    <StripeCheckout
      label='Pay Now'
      name='Wellbo Store Ltd.'
      billingAddress
      shippingAddress
      image='https://svgshare.com/i/CUz.svg'
      description={`Your total is $${price}`}
      amount={priceForStripe}
      panelLabel='Pay Now'
      token={onToken}
      stripeKey={publishableKey}
      />
  )
}

export default StripeCheckoutButton