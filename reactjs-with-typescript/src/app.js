"use strict";
var React = require('react');
var ReactDOM = require('react-dom');
var Hello = function (props) {
    return (React.createElement("div", null, 
        React.createElement("div", null, props.compiler), 
        React.createElement("div", null, props.framework)));
};
ReactDOM.render(React.createElement(Hello, {compiler: "TypeScript", framework: "React"}), document.getElementById("root"));
//# sourceMappingURL=app.js.map