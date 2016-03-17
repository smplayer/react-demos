"use strict";

/**
 * Created by Newbody on 2016/3/5.
 */
//require.config({
//    paths: {
//        "jquery": "../../../js/jquery-2.2.1.min",
//        "react": "../react",
//        "react-dom": "../react-dom"
//    }
//});
require(['amdDemo', 'react-dom', 'react'], function(amdDemo, rd, React){
    rd.render(
        <amdDemo.hello name='newbody'/>,document.getElementById('example')
    );
});