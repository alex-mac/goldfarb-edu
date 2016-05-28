var React = require("react");

module.exports=React.createClass({
	render: function(){
		return (
				<div>
					<nav className="navbar navbar-fixed-top">
					  <div className="container-fluid">
					    <div className="navbar-header">
					      <button type="button" class="navbar-toggle" data-toggle="collapse" data-target="#myNavbar">
					        <span class="icon-bar"></span>
					        <span class="icon-bar"></span>
					        <span class="icon-bar"></span>
					      </button>
					      <a className="navbar-brand" href="index.html"><img src="images/editedlogo.png" id="logo" height="75px" width="300px"></a>
					      </div>

					      <div className="collapse navbar-collapse" id="myNavbar">
					        <ul className="nav navbar-nav navbar-right">      
					            <li><a href="index.html">Home</a></li>
					            <li><a href="services.html">Services</a></li>
					            <li><a href="infobank.html">InfoBank</a></li>
					            <li><a href="about.html">About</a></li>
					            <li><a href="contactus.html">Contact Us</a></li>
					        </ul>
					      </div>
					   </div> 
					  </nav> 
				</div>	
		);
	}
});