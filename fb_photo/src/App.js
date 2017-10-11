import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import injectTapEventPlugin from 'react-tap-event-plugin';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import "bootstrap/dist/css/bootstrap.css";
import { Navbar, NavItem, Nav, Grid, Row, Col } from "react-bootstrap";
import { logout } from './actions';
import Login from './components/login/Login.js';


injectTapEventPlugin();

class App extends Component {
  constructor(props) {
    super(props);

    this.handleLogout = this.handleLogout.bind(this);
  }

  handleLogout() {
    this.props.dispatch(logout());
  }

  render() {
    return (
      <MuiThemeProvider>        
        <div>
        <Navbar>
          <Navbar.Header>
            <Navbar.Brand>
              Тестовое задание
            </Navbar.Brand>
          </Navbar.Header>
          <Nav>
      <NavItem eventKey={1} href="/">Главная</NavItem>
      <NavItem eventKey={2} href="/fileUpload">
        <span className="glyphicon glyphicon-open">  </span>
        Загрузить фото
      </NavItem>                      
      <NavItem eventKey={3}>
        {this.props.user && this.props.user.isLogin ?            
              <span>{this.props.user.name}</span>              
            :
            <span></span>
          }          
      </NavItem>                      
        <NavItem eventKey={4}>
          {this.props.user && this.props.user.isLogin ?            
              <button onClick={this.handleLogout} className="pull-right">Logout</button>             
            :
            <Login />
          }          
          <p></p>
        </NavItem>        
    </Nav>
        </Navbar>
        <Grid>
          <Row>            
            <Col md={12} sm={12}>              
              {this.props.user && this.props.user.isLogin ?
            <div>
              {this.props.children}              
            </div>
            :
            <div></div>
          }
            </Col>
          </Row>
        </Grid>
      </div>   
      </MuiThemeProvider>         
    );
  }
}

App.propTypes = {
  user: PropTypes.oneOfType([PropTypes.bool, PropTypes.object]),
  children: PropTypes.object.isRequired,
  dispatch: PropTypes.func.isRequired,
};

function mapStateToProps(store) {
  return {
    user: store.user,
  };
}

export default connect(mapStateToProps)(App);
