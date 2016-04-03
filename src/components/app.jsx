const React = require('react');

const App = React.createClass({
  render: function() {
    <Router history={browserHistory}>
      <Route path='/' component={OMDBSearch} />
      <Route path='/about' component={About} />
      <Route path='/results/:imdbID' component={ShowMovie}/>
    </Router>
  }
});

module.export = App;