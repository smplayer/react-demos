/**
 * Created by Newbody on 2016/3/7.
 */
define([
    'jquery',
    'react'
], function ($, React) {
    var CSSTransitionGroup = React.addons.CSSTransitionGroup;
    var List = React.createClass({
        getInitialState: function () {
            return {items: ['hello', 'world', 'click', 'me']};
        },
        handleAdd: function () {
            var newItems = this.state.items.concat([prompt('some other text')]);
            this.setState({items: newItems});
        },
        handleRemove: function (i) {
            var newItems = this.state.items.slice();
            newItems.splice(i, 1);
            this.setState({items: newItems});
        },
        render: function () {
            var items = this.state.items.map(function (item, i) {
                return (
                    <div key={item} onClick={this.handleRemove.bind(this, i)}>
                        {item}
                    </div>
                );
            }.bind(this));
            return (
                <div>
                    <button onClick={this.handleAdd}>Add Item</button>
                    <CSSTransitionGroup transitionName="example" transitionEnterTimeOut={500} transitionLeaveTimeout={300}>
                        {items}
                    </CSSTransitionGroup>
                </div>
            );
        }
    });
    return List;
});