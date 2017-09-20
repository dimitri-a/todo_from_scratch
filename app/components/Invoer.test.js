import React from 'react';
import Invoer from "../components/Invoer";
import {createRenderer} from 'react-test-renderer/shallow';

it('should call this.props.saveTodo event when clicking on button on non empty value', () => {
    const props = {
        saveTodo: jest.fn()
    }

    const renderer = createRenderer();
    renderer.render(<Invoer {...props} />)
    const output = renderer.getRenderOutput()

    //tried to mock the state.textValue:
    output.props.children[0].value = 'hoera';

    output.props.children[1].props.onClick();

    expect(props.saveTodo).toBeCalled()
});
