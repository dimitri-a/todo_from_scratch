import React, {Component} from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux'

export class ListTodosContainer  extends Component {
    constructor(props) {
        super();
        this.props = props;
    }

    render() {
        console.log('this.props=',this.props);
        return (
            <div>
                {this.props.todos.map( todo => (
                   <div key={todo.id}> {todo.name}</div>
                ))}
            </div>
        );
    }

}
//
// const mapDispatchToProps = dispatch => ({
//     actions: bindActionCreators(, dispatch)
// })

const mapStateToProps = function (store) {
    return {
        todos: store
    }
}

//export default connect(mapStateToProps, mapDispatchToProps)()
export default connect(mapStateToProps)(ListTodosContainer)
