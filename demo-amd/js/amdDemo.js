'use strict';

/**
 * Created by Newbody on 2016/3/5.
 */

if (typeof define === "function" && define.amd) {
    define(['react', 'jquery'], function (React, $) {
        var HelloMessage = React.createClass({
            displayName: 'HelloMessage',

            render: function render() {
                return React.createElement(
                    'h1',
                    null,
                    'Hello ',
                    this.props.name
                );
            }
        });
        console.log($("body").html());
        return { hello: HelloMessage };
    });
}