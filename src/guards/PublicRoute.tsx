import React from 'react'
import { Route, RouteProps } from 'react-router-dom'

interface PublicRouteProps extends RouteProps {
  component: any
}

const PublicRoute: React.FC<PublicRouteProps> = ({ component: Component, ...rest }) => {
  return <Route {...rest} render={(props) => <Component {...props} />} />
}

export default PublicRoute
