import {render,screen, fireEvent ,cleanup} from '@testing-library/react';
import News from '../news';
//test case for api call
//way to mock the import mocking

jest.mock('axios');

const mockfunction = jest.fn();


afterEach(cleanup);

describe('News', () => {
    it('button prev', async () => {
        render(<News setProgress={mockfunction}/>);
        const button = screen.getByTestId('button-1');
        fireEvent.click(button);  
    });
    it('button next', async() => {
        render(<News setProgress={mockfunction}/>);
        const button = screen.getByTestId('button-2');
        fireEvent.click(button);
        // expect page value to be greater than 1
    });
    it('should make a mock api call', async ()=>{
        render(<News setProgress={mockfunction}/>);
        const name = await screen.findByText('ABC News');
        expect(name).toBeInTheDocument();
    });
});