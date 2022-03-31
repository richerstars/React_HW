import {shallow, mount} from 'enzyme';
import ListItem from "../ListItem";
describe('ListItem', ()=> {

    const props = {
        value: 'ToDo testing text',
        checked: jest.fn(),
        isChecked: false,
        id: 20,
        deleteTodo: jest.fn(),
        showNotification: jest.fn()
    };

    it('should render correctly', () => {
        const component = shallow(<ListItem {...props} />);
        expect(component).toMatchSnapshot();
    });

    it('should render checked prop', () => {
        const component = mount(<ListItem {...props} />);
        expect(component.props().isChecked).toEqual(props.isChecked);
    });
    it('should render value', () => {
        const component = mount(<ListItem {...props} />);
        expect(component.find('p').text()).toEqual(props.value);
    });

    it('should render deleteTodo prop', () => {
        const component = mount(<ListItem {...props} />);
        component.find('button').at(0).getElement().props.onClick();
        expect(props.deleteTodo).toHaveBeenCalledWith(props.id);
    });
    it('should render checked prop', () => {
        const component = mount(<ListItem {...props} />);
        component.find('button').at(1).getElement().props.onClick();
        expect(props.checked).toHaveBeenCalledWith(props.id);
    });

})
