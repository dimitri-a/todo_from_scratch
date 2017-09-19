import React, {Component} from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux'
import * as actions from '../actions/addaction'
import Invoer from '../Invoer';

export class InputTodoContainer extends Component {
    constructor(props) {
        super();
        this.props = props;
    }

    handleClick = (text) => {
        this.props.actions.addTodo(text);
    }

    render() {
        return (<div>
                <Invoer saveTodo={this.handleClick}></Invoer>
            </div>
        );
    }

}

const mapDispatchToProps = dispatch => ({
    actions: bindActionCreators(actions, dispatch)
})

const mapStateToProps = function (store) {
    return {
        todos: store
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(InputTodoContainer)
