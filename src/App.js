import React, { Component } from 'react';
import {BrowserRouter, Route, Switch, Redirect} from 'react-router-dom';

import Layout from './components/Layout/Layout';
import LandingPage from './components/LandingPage/LandingPage';
import Blog from './components/Blog/Blog';
import Loader from './components/Loader/Loader';

import {blogs} from './blogs';

class App extends Component {
  state = {
    loading: true
  }

  componentDidMount() {
    setTimeout(() => {
      this.setState({loading: false});
      window.scrollTo(0,0);
    }, 2000);
  }

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
            <Loader loading={this.state.loading}/>
            {routes}
          </Layout>
        </BrowserRouter>
      </div>
    );
  }
}

export default App;
