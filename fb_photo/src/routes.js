import React from 'react';
import { Router, Route, IndexRoute } from 'react-router';

import App from './App.js';
import Album from './components/albums/Album.js';
import Photo from './components/albums/Photo.js';
import FileUpload from './components/fileUpload/FileUpload.js';
import NotFound from './components/NotFound.js';

import AlbumsContainer from './containers/AlbumsContainer.js';


const Routes = props => (
  <Router {...props}>
    <Route path="/" component={App}>
      <IndexRoute component={AlbumsContainer} />
      <Route path="/albums/:albumId" component={Album} />
      <Route path="/albums/:albumId/photo/:photoId" component={Photo} />
      <Route path="/fileUpload" component={FileUpload} />
    </Route>
    <Route path="*" component={NotFound} />
  </Router>
);

export default Routes;
