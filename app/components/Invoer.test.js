import React from 'react';
import Invoer from "../components/Invoer";
import {createRenderer} from 'react-test-renderer/shallow';

it('does it render and trigger saveTodo event when clicking on button', () => {
    const props = {
        saveTodo: jest.fn()
    }

    const renderer = createRenderer();
    renderer.render(<Invoer {...props} />)
    const output = renderer.getRenderOutput()

    //todo expect component top level type
    expect(output.type).toBe('header');

    //todo find element that contains the event connected to saveTodo in this case onClick on button
    output.props.children[1].props.onClick();

    expect(props.saveTodo).toBeCalled()
});
