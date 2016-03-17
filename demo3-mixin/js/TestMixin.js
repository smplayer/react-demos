'use strict';

/**
 * Created by Newbody on 2016/3/7.
 */
define('TestMixin', ['jquery', 'react', 'Mixin'], function ($, React, Mixin) {
    return React.createClass({
        mixins: [Mixin],
        getInitialState: function getInitialState() {
            return {
                text: ''
            };
        },
        render: function render() {
            return React.createElement(
                'div',
                null,
                React.createElement('input', { type: 'text', onChange: this.handleChange('text') }),
                React.createElement(
                    'p',
                    null,
                    this.state.text
                )
            );
        }
    });
});