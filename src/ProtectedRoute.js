import React from 'react';
import { Route, Redirect } from 'react-router-dom';
import { useCookies } from 'react-cookie';

const ProtectedRoute = ({ component: Component, ...rest }) => {

    const [ cookies ] = useCookies(['cred']);

  return (
    <Route 
        {...rest} 
        render={
            props => {
                if ( cookies.cred ) {
                   return <Component {...rest} {...props} />
                } else {
                    return <Redirect to={
                        {
                            pathname: '/',
                            state: {
                                from: props.location
                            }
                        }
                    } />
                    //
                }
            }
            
        } />
  )
}

export default ProtectedRoute;