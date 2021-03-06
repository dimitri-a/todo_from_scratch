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
        //todo remove
        debugger;
        if (event.target.value !== '') {
            this.setState({textValue: event.target.value});
            console.log(event.target.value);
        }
    }

    onSave = () => {
        if (this.state.textValue!== '') {
            this.props.saveTodo(this.state.textValue);
        }
    }

    render() {
        return (
            <header>
                <input type="text" value={this.state.textValue} onChange={this.onChange}/>
                <button onClick={this.onSave}>save that shit</button>
            </header>
        );
    }
}
