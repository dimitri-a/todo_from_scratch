import React, {Component, PropTypes} from 'react';

export default class Invoer extends Component {

    static propTypes = {
        saveTodo: PropTypes.func.isRequired
    }

    constructor(props) {
        super();
        this.props = props;
        this.state = {textValue: ''};
    }


    onChange = (event) => {
        this.setState({textValue:event.target.value});
        console.log(event.target.value);
    }


    onSave = () => {
        this.props.saveTodo(this.state.textValue);
    }

    render() {
        return (
            <header>
                <input type="text" onChange={this.onChange} />
                <button onClick={this.onSave}>save that shit</button>
            </header>
        );
    }
}
