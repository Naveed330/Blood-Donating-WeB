import react from 'react'
import {Route , Redirect} from 'react-router-dom'

function PrivateRoute({Chidren, ...rest}) {
    const isAuth = false;
    return(<>
   
    <Route {...rest} render={()=>isAuth?(Chidren):(<Redirect to={'/Login'} />)}  />
    </>)
}
export default PrivateRoute;