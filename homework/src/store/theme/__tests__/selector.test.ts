import {selectTheme} from '../selectors';

describe('selector', () => {
    it('should return correct selector', () => {
        const mockParameters = {theme: {dark: false}};
        const selected = selectTheme(mockParameters);
        expect(selected).toEqual(mockParameters.theme.dark);
    });
});
