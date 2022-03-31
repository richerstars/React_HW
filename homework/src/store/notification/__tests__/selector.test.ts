import {selectNotification} from '../selectors';

describe('selector', () => {
    it('should return correct selector', () => {
        const mockParameters = {notification: {type:'success', message:'success'}};
        const selected = selectNotification(mockParameters);
        expect(selected).toEqual(mockParameters.notify);
    });
});
