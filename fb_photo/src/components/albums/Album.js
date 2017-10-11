import React, { Component } from 'react'; 
import PropTypes from 'prop-types';
import { Link } from 'react-router';

import { GridList, GridTile } from 'material-ui/GridList';

import albumWithSubscription from '../../hoc/albumWithSubscription';

import BackButton from '../BackButton.js';
import "bootstrap/dist/css/bootstrap.css";


class Album extends Component {
  renderPhotos() {
    return this.props.photos.map((photo) => {
      return (
        <GridTile
          key={photo.id}
          title={photo.name}
          containerElement={<Link to={`/albums/${this.props.routeParams.albumId}/photo/${photo.id}`} />}>          
          <img src={photo.imageURL} alt=""/>
        </GridTile> 
      );
    });
  }

  render() {
    return (
      <div>       
        <ul className="list-group">
          <li className="list-group-item list-group-item-info">
            <BackButton toAlbum={false} />            
            {`Album: "${this.props.albumName}"`}
          </li>          
        </ul>

        <GridList
          cellHeight={180}
          cols={4}
        >
          {this.renderPhotos()}
        </GridList>
      </div>
    );
  }
}

Album.propTypes = {
  routeParams: PropTypes.shape({
    albumId: PropTypes.string,
  }).isRequired,
  photos: PropTypes.array,
};

export default albumWithSubscription(Album);
