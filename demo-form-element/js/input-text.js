'use strict';

/**
 * Created by Newbody on 2016/3/7.
 */
define('input-text', ['react'], function (React) {
    return React.createClass({
        getInitialState: function getInitialState() {
            return {
                textContent: this.props.defaultText,
                placeholder: 'place holder text'
            };
        },
        handleChange: function handleChange(event) {
            this.setState({
                textContent: event.target.value
            });
            console.log([this.state, "handleChange"]);
        },
        componentDidMount: function componentDidMount() {
            console.log([this.state, "componentDidMount"]);
        },
        render: function render() {
            console.log([this.state, "render"]);
            return React.createElement('input', { type: 'text', value: this.state.textContent, placeholder: this.state.placeholder,
                onChange: this.handleChange });
        }
    });
    //return {};
});