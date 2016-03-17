'use strict';

/**
 * Created by Newbody on 2016/3/7.
 */
define('layout-tmb', ['jquery', 'react', 'layout-top'], function ($, React, Top) {
    var TMB = React.createClass({
        displayName: 'TMB',

        getInitialState: function getInitialState() {
            return {
                topHeight: "50px"
            };
        },
        render: function render() {
            return React.createElement(
                'div',
                { style: { height: '100%', paddingTop: this.state.topHeight } },
                React.createElement(Top, { styles: { height: '50px', marginTop: '-50px' } })
            );
        }
    });
    return TMB;
});