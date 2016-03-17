'use strict';

/**
 * Created by Newbody on 2016/3/7.
 */
define('child', ['jquery', 'react', 'signals'], function ($, React, Signal) {
    return React.createClass({
        getInitialState: function getInitialState() {
            return { age: 1, gen: this.props.gen + "-child" };
        },
        changeAge: function changeAge(n) {
            this.setState({
                age: this.state.age + n
            });
        },
        componentDidMount: function componentDidMount() {
            //setInterval(function(){
            //    this.setState({
            //        age: this.state.age+1
            //    });
            //}.bind(this),1000);
            //var signal = new Signal();
            this.binding = testSignal.add(this.changeAge);
        },
        componentWillUnmount: function componentWillUnmount() {
            this.binding.detach();
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