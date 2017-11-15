import * as React from 'react'
import { Link } from 'react-router-dom'

// Higher Order Component 
const withLinks = (WrappedComponent: any) => {
  return class ProxyProps extends React.Component {
    constructor(props: any) {
      super(props)
    }
    render() {
      return (
        <div>
          <Link to="/"> index </Link>
          <Link to="/about"> about </Link>
          <WrappedComponent {...this.props}/>
        </div>
      )
    }
  }
}

export default withLinks