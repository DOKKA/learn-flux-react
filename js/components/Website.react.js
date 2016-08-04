
var React = require('react');
var LeftSection = require('./LeftSection.react');


var Website = React.createClass({

    render: function(){
        return (
            <div>
                <LeftSection></LeftSection>
                <div id="RightSection">hi2</div>
            </div>
        );
    }


});

module.exports = Website;