import React, { Component } from 'react';
import {BrowserRouter, Route, Switch, Redirect} from 'react-router-dom';

import Layout from './components/Layout/Layout';
import LandingPage from './components/LandingPage/LandingPage';
import Blog from './components/Blog/Blog';

import {blogs} from './blogs';

class App extends Component {

  render() {
    // retrieve all possible route names from the blog object
    const blogRoutes = [];
    for(var blog in blogs) {
      blogRoutes.push(blog);
    };
    // map all routes
    const allRoutes = blogRoutes.map((blog, idx) => {
      return <Route path={`/${blog}`} exact key={idx} component={Blog} />
    });

    let routes = (
      <Switch>
        <Route path="/" exact component={LandingPage} />
        {allRoutes}
        <Redirect to="/" />
      </Switch>
    );

    return (
      <div>
        <BrowserRouter>
          <Layout>
            {routes}
          </Layout>
        </BrowserRouter>
      </div>
    );
  }
}

export default App;
