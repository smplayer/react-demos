/**
 * Created by Newbody on 2016/3/7.
 */
define('parent',[
    'jquery',
    'react',
    'child'
], function ($, React, Child) {
    return React.createClass({
        getInitialState: function () {
            return {gen: "father"};
        },
        handleChange: function (e) {
            this.setState({
                gen: e.target.value
            });
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