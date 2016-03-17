'use strict';

var names = ['Alice', 'Emily', 'Kate'];

ReactDOM.render(React.createElement('div', null, names.map(function (name) {
    return React.createElement('div', null, 'Hello, ', name, '!');
})), document.getElementById('example'));