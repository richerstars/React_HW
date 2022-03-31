import React from 'react';
import {shallow, mount} from 'enzyme';
import Form from "../Form";
import {act} from "react-dom/test-utils";

describe('List', ()=> {
    const props = {
        addTodo: jest.fn(),
        showNotification: jest.fn(),
    };

    const setStateMock = jest.fn();
    beforeEach(() => {
        React.useState = jest.fn().mockReturnValue(['123', setStateMock]);
        Date.now = jest.fn(() => 1487076708000);
    });

    afterEach(() => {
        jest.clearAllMocks();
    });

    it('should render correctly', () => {
        const component = shallow(<Form {...props} />);
        expect(component).toMatchSnapshot();
    });
});
