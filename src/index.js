import React                            from 'react';
import ReactDOM                         from 'react-dom';
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import { Provider }                     from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import promise                          from 'redux-promise'
import reducers                         from './reducers';
import { PostsIndexContainer }          from './components/posts_index';
import { PostsNewContainer }            from './components/posts_new';
import { PostsShowContainer }           from './components/posts_show';

const createStoreWithMiddleware = applyMiddleware(promise)(createStore);

ReactDOM.render(
  <Provider store={createStoreWithMiddleware(reducers)}>
    <BrowserRouter>
      <div>
        <Switch>
          <Route path="/posts/new"  component={ PostsNewContainer }/>
          <Route path="/posts/:id"  component={ PostsShowContainer }/>
          <Route path="/"           component={ PostsIndexContainer }/>
        </Switch>
      </div>
    </BrowserRouter>
  </Provider>
  , document.querySelector('.container'));