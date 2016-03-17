'use strict';

/**
 * Created by Newbody on 2016/3/7.
 */
define('layout-top', ['jquery', 'react', 'mixin-style'], function ($, React, StyleMixin) {
    var Top = React.createClass({
        displayName: 'Top',

        mixins: [StyleMixin],
        getInitialState: function getInitialState() {
            return {
                styles: {
                    height: "44px",
                    marginTop: '-44px'
                }
            };
        },
        componentWillMount: function componentWillMount() {
            this.setStyles();
        },
        render: function render() {
            return React.createElement(
                'div',
                { style: this.state.styles },
                React.createElement(
                    'a',
                    { href: '#' },
                    '<'
                ),
                React.createElement(
                    'span',
                    null,
                    'title'
                ),
                React.createElement(
                    'a',
                    { href: '#' },
                    '>'
                )
            );
        }
    });
    return Top;
});