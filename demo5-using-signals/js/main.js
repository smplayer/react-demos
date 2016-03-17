"use strict";

//require.config({
//    paths路径相对于main.js文件来定位
//    paths: {
//        "jquery": "../../../js/jquery-2.2.1.min",
//        "react": "../react",
//        "react-dom": "../react-dom"
//    }
//});

require(['react', 'react-dom', 'parent', 'signals'], function (React, ReactDOM, Parent, Signal) {
    window.testSignal = new Signal();
    ReactDOM.render(React.createElement(Parent, null), document.getElementById('example'));
});