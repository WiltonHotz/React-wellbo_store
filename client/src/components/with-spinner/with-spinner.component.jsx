import React from 'react'

import Spinner from '../spinner/spinner.component'

const WithSpinner = WrappedComponent => ({ isLoading, ...otherProps}) => { // wrap component with WithSpinner HOC
  return isLoading
  ? (
    <Spinner />
  )
  : (
    <WrappedComponent {...otherProps} />
  )
}

export default WithSpinner