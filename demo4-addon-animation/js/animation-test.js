'use strict';

/**
 * Created by Newbody on 2016/3/7.
 */
define(['jquery', 'react'], function ($, React) {
    var CSSTransitionGroup = React.addons.CSSTransitionGroup;
    var List = React.createClass({
        displayName: 'List',

        getInitialState: function getInitialState() {
            return { items: ['hello', 'world', 'click', 'me'] };
        },
        handleAdd: function handleAdd() {
            var newItems = this.state.items.concat([prompt('some other text')]);
            this.setState({ items: newItems });
        },
        handleRemove: function handleRemove(i) {
            var newItems = this.state.items.slice();
            newItems.splice(i, 1);
            this.setState({ items: newItems });
        },
        render: function render() {
            var items = this.state.items.map(function (item, i) {
                return React.createElement(
                    'div',
                    { key: item, onClick: this.handleRemove.bind(this, i) },
                    item
                );
            }.bind(this));
            return React.createElement(
                'div',
                null,
                React.createElement(
                    'button',
                    { onClick: this.handleAdd },
                    'Add Item'
                ),
                React.createElement(
                    CSSTransitionGroup,
                    { transitionName: 'example', transitionEnterTimeOut: 500, transitionLeaveTimeout: 300 },
                    items
                )
            );
        }
    });
    return List;
});