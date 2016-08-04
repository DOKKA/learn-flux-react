var React = require('react');

var LeftSection = React.createClass({

    render: function(){
        return (
            <ul id="LeftSection">
                <li onClick={this._onClick}>hi</li>
            </ul>
        );
    },

    _onClick: function(){
        console.log(arguments);
    }

});

module.exports = LeftSection;