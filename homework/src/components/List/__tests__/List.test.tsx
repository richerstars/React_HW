import React, {ReactComponentElement} from "react";
import {shallow,mount} from 'enzyme';
import List from "../List";
import {Provider} from "react-redux";
// @ts-ignore
import configureStore from "redux-mock-store";
export const mountSmart = (component: ReactComponentElement<any>, store: any) => {
    const core = <Provider store={store}>{component}</Provider>;
    return mount(core);
};

export const mockStore = configureStore();

describe('Item', () => {
    let props:any;
    beforeEach(() => {
        props = {
            todos: [{value: 'task1', id: 1, isChecked: false},
                {value: 'task2', id: 2, isChecked: false},
                {value: 'task3', id: 3, isChecked: false}]
        };
    });

    const store = mockStore({todos: [{value: 'task1', id: 1, isChecked: false},
        {value: 'task2', id: 2, isChecked: false},
        {value: 'task3', id: 3, isChecked: false}]});

    it('should render correctly', () => {
        const component = shallow(<List {...props}/>);
        expect(component).toMatchSnapshot();
    });

    it('should render correctly', () => {
        const component = mountSmart(<List {...props} />, store);
        expect(component.find('List').getElement().props.todos).toEqual(props.todos);
    });

    it('should render prop todos', () => {
        const component = mountSmart(<List {...props} />, store);
        expect(component.find('div').at(0).getElement().props.children.length).toEqual(props.todos.length-1);
    });

});
