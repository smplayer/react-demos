/**
 * Created by Newbody on 2016/3/7.
 */
define('layout-tmb', [
    'jquery',
    'react',
    'layout-top'
], function($, React, Top){
    var TMB = React.createClass({
        getInitialState: function () {
            return {
                topHeight: "50px"
            };
        },
        render: function () {
            return(
                <div style={{height:'100%', paddingTop: this.state.topHeight}}>
                    <Top styles={{height:'50px',marginTop: '-50px'}}/>
                </div>
            );
        }
    });
    return TMB;
});