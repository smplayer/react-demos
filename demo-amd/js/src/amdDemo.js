/**
 * Created by Newbody on 2016/3/5.
 */

if ( typeof define === "function" && define.amd ) {
    define(['react','jquery'], function(React, $) {
        var HelloMessage = React.createClass({
            render: function() {
                return <h1>Hello {this.props.name}</h1>;
            }
        });
        console.log($("body").html());
        return {hello:HelloMessage};
    });
}