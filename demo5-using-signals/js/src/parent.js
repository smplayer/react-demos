/**
 * Created by Newbody on 2016/3/7.
 */
define('parent',[
    'jquery',
    'react',
    'child',
    'signals'
], function ($, React, Child, Signal) {
    return React.createClass({
        getInitialState: function () {
            return {gen: "father"};
        },
        handleChange: function (e) {
            this.setState({
                gen: e.target.value
            });
        },
        componentDidMount: function(){
            setInterval(function () {
                testSignal.dispatch(1);
            },1000);
        },
        render: function () {
            return (
                <div>
                    <input type='text' value={this.state.gen} onChange={this.handleChange}/><br/>
                    <Child gen={this.state.gen}/>
                </div>
            );
        }
    });
});