"use strict";

require.config({
    // paths路径相对于main.js文件来定位
    paths: {
        //"jquery": "../../../js/jquery-2.2.1.min",
        "react": "./react-with-addons",
        "react-dom": "./react-dom"
    }
});
require(['react', 'react-dom', 'animation-test'], function(React, ReactDOM, AnimationTest){
    ReactDOM.render(<AnimationTest />, document.getElementById('example'));
});