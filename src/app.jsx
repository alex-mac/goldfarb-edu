// react
const React = require('react');
const ReactDOM = require('react-dom');

// components
const About = require('./components/About');

// router dependencies
const Router = require('react-router').Router;
const Route = require('react-router').Route;
const Link = require('react-router').Link
const browserHistory = require('react-router').browserHistory;

const App = React.createClass({
  render: function() {
    <Router history={browserHistory}>
      <Route path='/' component={OMDBSearch} />
      <Route path='/about' component={About} />
      <Route path='/results/:imdbID' component={ShowMovie}/>
    </Router>
  }
});

ReactDOM.render(<App />, document.getElementById('container'));