"use strict";

//require.config({
//    paths路径相对于main.js文件来定位
//    paths: {
//        "jquery": "../../../js/jquery-2.2.1.min",
//        "react": "../react",
//        "react-dom": "../react-dom"
//    }
//});
require(['react', 'react-dom', 'layout-tmb'], function(React, ReactDOM, TMB){
    ReactDOM.render(<TMB />, document.getElementById('example'));
});