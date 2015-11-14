var React = require('react');
var ContentView = require('../contentView/ContentView');
var MainStore = require('../../stores/MainStore');
var connectToStores = require('fluxible-addons-react').connectToStores;
var NavLink = require('fluxible-router').NavLink;

var About = React.createClass({
    render: function() {
        return (
            <div>
                <p>
                    Lorem ipsum dolor sit amet, duo everti scriptorem no, falli ubique tritani vix ad. Eos et quodsi legimus ullamcorper, mei modus dicit id. Fastidii interesset mea ea, no simul mucius has, eam an reque mucius voluptaria. Ornatus lobortis no sed, eripuit salutatus euripidis eu vix, hinc utinam complectitur mel et. Erat dolores interpretaris ex quo, at vide torquatos pri.
                </p>
            </div>
        );
    }
});

module.exports = About;