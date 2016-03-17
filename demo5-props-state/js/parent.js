'use strict';

/**
 * Created by Newbody on 2016/3/7.
 */
define('parent', ['jquery', 'react', 'child'], function ($, React, Child) {
    return React.createClass({
        getInitialState: function getInitialState() {
            return { gen: "father" };
        },
        handleChange: function handleChange(e) {
            this.setState({
                gen: e.target.value
            });
        },
        render: function render() {
            return React.createElement(
                'div',
                null,
                React.createElement('input', { type: 'text', value: this.state.gen, onChange: this.handleChange }),
                React.createElement('br', null),
                React.createElement(Child, { gen: this.state.gen })
            );
        }
    });
});