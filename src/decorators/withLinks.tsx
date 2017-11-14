import * as React from 'react'

// Higher Order Component 
const withLinks = (WrappedComponent: any) => {
  return class ProxyProps extends React.Component {
    constructor(props: any) {
      super(props)
    }
    render() {
      return <WrappedComponent {...this.props}/>
    }
  }
}

export default withLinks