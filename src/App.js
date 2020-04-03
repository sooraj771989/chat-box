import React, { useState, useEffect } from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Login from './Login';
import Dashboard from './Dashboard';
import Home from './Home';
import PrivateRoute from './Utils/PrivateRoute';
import PublicRoute from './Utils/PublicRoute';
import { getToken, removeUserSession } from './Utils/Common';

function App() {
  const [authLoading, setAuthLoading] = useState(true);
 
  useEffect(() => {
    const token = getToken();
    if (!token) {
      return;
    }
    if (sessionStorage.getItem("token") !== null) {
      setAuthLoading(false);
    }
    else{
      removeUserSession();
      setAuthLoading(false);
    }
  }, []);

  if (authLoading && getToken()) {
    return <div className="content">Checking Authentication...</div>
  }

  return (
    <div className="App flex mx-auto">
      <BrowserRouter>
            <Switch>
          
              <PublicRoute path="/" component={Login} />
              <PrivateRoute path="/dashboard" component={Dashboard} />
            </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
