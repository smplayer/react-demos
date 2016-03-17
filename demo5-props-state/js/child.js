'use strict';

/**
 * Created by Newbody on 2016/3/7.
 */
define('child', ['jquery', 'react'], function ($, React) {
    return React.createClass({
        getInitialState: function getInitialState() {
            return { age: 1, gen: this.props.gen + "-child" };
        },
        componentDidMount: function componentDidMount() {
            setInterval(function () {
                this.setState({
                    age: this.state.age + 1
                });
            }.bind(this), 1000);
        },
        handleChange: function handleChange(e) {
            this.setState({
                gen: e.target.value
            });
        },
        render: function render() {
            var v = this.state.gen + ":" + this.state.age;
            return React.createElement('input', { type: 'text', value: v, onChange: this.handleChange });
        }
    });
});