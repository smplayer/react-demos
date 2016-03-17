/**
 * Created by Newbody on 2016/3/7.
 */
define('Mixin', [
    'jquery',
    'react'
], function($, React){
    return {
        handleChange: function(key) {
            var newState = {};
            var _this = this;
            return function(e){
                newState[key] = e.target.value;
                _this.setState(newState);
            }
        }
    };
});