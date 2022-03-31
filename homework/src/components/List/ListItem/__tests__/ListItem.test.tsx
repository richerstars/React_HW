import React from "react";
import {mount, shallow} from 'enzyme';
import ListItem from "../ListItem";

describe('Item', () => {
    let props:any;
    beforeEach(() => {
        props = {
            value:'some task',
            deleteTodo: jest.fn(),
            isChecked: false,
            checked: jest.fn(),
            id: 1234,
            showNotification: jest.fn()
        };
    });
    it('should render correctly', () => {
        const component = shallow(<ListItem {...props}/>);
        expect(component).toMatchSnapshot();
    });
    it('should render prop value', () => {
        const component = mount(<ListItem {...props}/>);
        expect(component.find('div').at(1).text()).toEqual("DeleteCheck");
    });
    it('should call deleteTask', () => {
        const component = mount(<ListItem {...props}/>);
        component.find('button').at(0).getElement().props.onClick();
        expect(props.deleteTodo).toHaveBeenCalledWith(props.id);
    });
});
