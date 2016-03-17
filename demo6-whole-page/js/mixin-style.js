'use strict';

/**
 * Created by Newbody on 2016/3/7.
 */
define('mixin-style', ['jquery', 'react'], function ($, React) {
    return {
        setStyles: function setStyles() {
            if (!this.state.styles) {
                this.state.styles = {};
            }
            if (this.props.styles) {
                for (var key in this.props.styles) {
                    this.state.styles[key] = this.props.styles[key];
                }
            }
        }
    };
});