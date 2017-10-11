import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router';
import { List } from 'material-ui/List';
import "bootstrap/dist/css/bootstrap.css";


class Albums extends Component {
  renderAlbums() {
    // fake DB
    const fakeDB = [];
    this.props.albums.map(album => fakeDB.push(album.name));
    sessionStorage.setItem('fakeDB', [fakeDB]);

    return this.props.albums.map((album) => {
      return (                
        
          <div className="col-sm-6 col-md-3">
            <div className="thumbnail">
              {<img src={album.imageURL} alt="" />}          
              <div className="caption">
                <h3>{album.name}</h3>        
                <p> <Link to={`/albums/${album.id}`} className="btn btn-primary" role="button">Просмотр альбома</Link></p>
              </div>
            </div>
          </div>
        
      );
    });
  }

  render() {
    return (
      <div className="row">
        <List>
          {this.renderAlbums()}
        </List>
      </div>
    );
  }
}

Albums.propTypes = {
  name: PropTypes.string.isRequired,
  albums: PropTypes.array.isRequired,
};

export default Albums;
