import React from 'react';
import {shallow} from 'enzyme';
import Invoer from "../components/Invoer";

import { createRenderer } from 'react-test-renderer/shallow';

it('does it render', () => {

    const props = {
      saveTodo: jest.fn()
    }

    const renderer = createRenderer();
    renderer.render(<Invoer {...props} />)
    const output = renderer.getRenderOutput()

    //todo expect component top level type
    expect(output.type).toBe('header');

    console.log( output.props.children.props);

    output.props.children.props.onChange();

    expect(props.saveTodo).toBeCalled()

  });
