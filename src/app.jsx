// react
const React = require('react');
const ReactDOM = require('react-dom');

// components
const Index = require("./views/index.jsx");


// router dependencies
const Router = require('react-router').Router;
const Route = require('react-router').Route;
const Link = require('react-router').Link
const browserHistory = require('react-router').browserHistory;

const App = React.createClass({
render() {
   return (
   	<Index />
		);
	}
});

ReactDOM.render(<App />, document.getElementById('container'));