"use strict";

//require.config({
//    paths路径相对于main.js文件来定位
//    paths: {
//        "jquery": "../../../js/jquery-2.2.1.min",
//        "react": "../react",
//        "react-dom": "../react-dom"
//    }
//});

require(['test-link', 'react', 'react-dom'], function (TestLink, React, ReactDOM) {
    ReactDOM.render(React.createElement(TestLink, { url: 'http://baidu.com' }), document.getElementById('example'));
});