import React, {Component, PropTypes} from 'react';


export default class Invoer extends Component {

    static propTypes = {
        saveTodo: PropTypes.func.isRequired
    }

    onSave = () => {
        this.props.saveTodo('fjkshfjksdhjkfhdskj');
    }

    render() {
        return (
            <header>
                <input type="text" onChange={this.onSave}/>
            </header>
        );
    }
}
