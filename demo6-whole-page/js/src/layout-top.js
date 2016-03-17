/**
 * Created by Newbody on 2016/3/7.
 */
define('layout-top', [
    'jquery',
    'react',
    'mixin-style'
], function($, React, StyleMixin){
    var Top = React.createClass({
        mixins: [StyleMixin],
        getInitialState: function () {
            return {
                styles : {
                    height: "44px",
                    marginTop: '-44px'
                }
            };
        },
        componentWillMount: function () {
            this.setStyles();
        },
        render: function () {
            return(
                <div style={this.state.styles}>
                    <a href="#">&lt;</a>
                    <span>title</span>
                    <a href="#">&gt;</a>
                </div>
            );
        }
    });
    return Top;
});