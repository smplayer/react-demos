/**
 * Created by Newbody on 2016/3/7.
 */
define('TestMixin',[
    'jquery',
    'react',
    'Mixin'
], function($, React, Mixin){
    return React.createClass({
        mixins: [Mixin],
        getInitialState: function () {
            return {
                text: ''
            }
        },
        render: function(){
            return <div>
                <input type="text" onChange={this.handleChange('text')}/>
                <p>{this.state.text}</p>
                </div>
        }
    });
});