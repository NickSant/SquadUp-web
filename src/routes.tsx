import React from 'react';
import { BrowserRouter, Switch, Route} from 'react-router-dom';

import Login from "./pages/Login";
import Signup from './pages/Signup';

export default function Routes(){
    return(
        <BrowserRouter>
            <Switch>
                <Route path="/" component={Login} exact/>
                <Route path="/Signup" component={Signup} />
            </Switch>
        </BrowserRouter>
    );
}