import React, {Component} from 'react';
import './App.css';
import Home from './home/home'
import About from './about/about'
import Contact from './contact/contact'

export const Pages = {
  HOME: <Home/>,
  ABOUT: <About/>,
  CONTACT: <Contact/>
};

class App extends Component {

  constructor(props) {
    super(props)
    this.state = {currentPage: Pages.HOME}
  }
  
  render() {
    return (
      <div className="container-fluid root">
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
          <a className="navbar-brand" href="/">Website</a>
          <button
            className="navbar-toggler"
            type="button"
            data-toggle="collapse"
            data-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>

          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav mr-auto">
              <li className="nav-item">
                <button className="nav-link btn btn-link" onClick={(e)=> {
                  this.setState({currentPage: Pages.HOME})
                }} >Home</button>
              </li>
              <li className="nav-item">
                <button className="nav-link btn btn-link" href="#" onClick={(e)=> {
                  this.setState({currentPage: Pages.ABOUT})
                }}>About</button>
              </li>
              <li className="nav-item">
                <button className="nav-link btn btn-link" href="#" onClick={(e)=> {
                  this.setState({currentPage: Pages.CONTACT})
                }}>Contact</button>
              </li>
            </ul>
          </div>
        </nav>

        <div>
          {this.state.currentPage}
        </div>

      </div>
    );
  }
}

export default App;
