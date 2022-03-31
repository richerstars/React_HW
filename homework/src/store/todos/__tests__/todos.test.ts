import todos from '../reducer';
import { ADD_TODO, DELETE_TODOS,CHECKED_TODOS } from "../actionTypes";

describe('reducer', () => {
    it('should provide the initial state', () => {
        expect(todos(undefined, {})).toEqual([{value: 'test', id: 1, isChecked: false}]);
    });
    it('should handle ADD_TODO action', () => {
        expect(todos([], {type:ADD_TODO, payload: {value: 'random Text for Test', id: 2, isChecked: false}})).toEqual([{value: 'random Text for Test', id: 2, isChecked: false}]);
    });
    it('should handle DELETE_TODO action', () => {
        expect(todos([{value: 'random Text for Test', id: 2, isChecked: false}], {type:DELETE_TODOS, payload: 2})).toEqual([]);
    });
    it('should handle CHECK_TODO action', () => {
        expect(todos([{value: 'random Text for Test', id: 2, isChecked: false}], {type:CHECKED_TODOS, payload: 2})).toEqual([{value: 'random Text for Test', id: 2, isChecked: true}]);
    });
    it('should handle default action', () => {
        expect(todos([{value: 'random Text for Test', id: 2, isChecked: false}], {type:'default'})).toEqual([{value: 'random Text for Test', id: 2, isChecked: false}]);
    });
});
