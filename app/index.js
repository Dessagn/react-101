var React = require('react');
var ReactDom = require('react-dom');
require('./css/styles.css');
var App = require('./components/app');


ReactDom.render(
    <App />,
    document.getElementById('app')
);