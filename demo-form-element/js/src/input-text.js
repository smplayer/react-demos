/**
 * Created by Newbody on 2016/3/7.
 */
define('input-text', [
    'react'
], function(React){
    return React.createClass({
        getInitialState: function(){
            return {
                textContent: this.props.defaultText,
                placeholder: 'place holder text'
            };
        },
        handleChange: function(event){
            this.setState({
                textContent: event.target.value
            });
            console.log([this.state,"handleChange"]);
        },
        componentDidMount: function(){
            console.log([this.state,"componentDidMount"]);
        },
        render: function(){
            console.log([this.state,"render"]);
            return <input type="text" value={this.state.textContent} placeholder={this.state.placeholder}
                          onChange={this.handleChange} />
        }
    });
    //return {};
});