import React, {Component} from 'react';
import {connect} from 'react-redux';
import store from '../store';

class InvoerText extends Component {

    constructor(props) {
        super();
        this.props = props;
        this.state = {textValue: ''}
    }

    handleChange =(text) => {
        this.setState({textValue:text});
    }

    render() {
        return (<input type="text" onChange={this.handleChange}/>
        );
    }
}
