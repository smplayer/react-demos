/**
 * Created by Newbody on 2016/3/7.
 */
define('child', [
    'jquery',
    'react'
], function ($, React) {
    return React.createClass({
        getInitialState: function () {
            return {age:1,gen: this.props.gen+"-child"};
        },
        componentDidMount: function(){
            setInterval(function(){
                this.setState({
                    age: this.state.age+1
                });
            }.bind(this),1000);
        },
        handleChange: function(e){
            this.setState({
                gen: e.target.value
            });
        },
        render: function(){
            var v = this.state.gen + ":" + this.state.age;
            return(
                <input type='text' value={v} onChange={this.handleChange}/>
            );
        }
    });
});