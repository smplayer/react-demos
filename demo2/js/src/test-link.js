/**
 * Created by Newbody on 2016/3/7.
 */
define('test-link', [
    'jquery',
    'react'
], function ($, React) {
    return React.createClass({
        render: function(){
            return <div>
                <a href={this.props.url}>测试链接</a>
            </div>
        }
    });

    //return React.createClass({
    //    render: function () {
    //        console.log([this.state, "render"]);
    //        return
    //        <div><a href={this.props.url}>测试链接</a></div>
    //    }
    //});
});