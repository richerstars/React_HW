import React from 'react';
import {shallow, mount} from 'enzyme';
// import ReactTestUtils from 'react-dom/test-utils';
// import renderer from 'react-test-renderer';
import ListItem from "../ListItem";
import {StyledTasksDiv} from "../styled";
describe('ListItem', ()=> {

    const props = {
        value: 'ToDo testing text' ,
        checked: jest.fn(),
        isChecked: false,
        id: 20,
        deleteTodo: jest.fn()
    };

    it('should render correctly', () => {
        const component = shallow(<ListItem {...props} />);
        expect(component).toMatchSnapshot();
    });

    it('should render checked prop', () => {
        const component = mount(<ListItem {...props} />);
        // eslint-disable-next-line testing-library/no-debugging-utils
        console.log(component.debug());
        expect(component.props().isChecked).toEqual(props.isChecked);
    });
    it('should render value', () => {
        const component = mount(<ListItem {...props} />);
        // eslint-disable-next-line testing-library/no-debugging-utils
        console.log(component.debug());
        expect(component.find('p').text()).toEqual(props.value);
    });

    it('should render deleteTodo prop', () => {
        const component = mount(<ListItem {...props} />);
        // eslint-disable-next-line testing-library/no-debugging-utils
        console.log(component.debug());
        component.find('button').at(0).getElement().props.onClick();
        expect(props.deleteTodo).toHaveBeenCalledWith(props.id);
    });
    it('should render checked prop', () => {
        const component = mount(<ListItem {...props} />);
        // eslint-disable-next-line testing-library/no-debugging-utils
        console.log(component.debug());
        component.find('button').at(1).getElement().props.onClick();
        expect(props.checked).toHaveBeenCalledWith(props.id);
    });

})