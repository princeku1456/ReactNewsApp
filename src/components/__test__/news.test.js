import {render, screen, fireEvent, waitFor } from '@testing-library/react';
import News from '../news';

//test case for api call


describe('News', () => {
    it('button prev', () => {
        render(<News  apiKey={'9cbd5b0c2d474a35b90ac1a242b0d0df'}  pageSize={16} country={'us'} newsType={"general"} category={"general"}/>);
        const button = screen.getByTestId('button-1');
        fireEvent.click(button);

    });

    it('button next', () => {
        render(<News  apiKey={'9cbd5b0c2d474a35b90ac1a242b0d0df'}  pageSize={16} country={'us'} newsType={"general"} category={"general"}/>);
        const button = screen.getByTestId('button-2');
        fireEvent.click(button);
        
    });

    //test api call

    it('should make a api call', async function () {
            render(<News apiKey={'9cbd5b0c2d474a35b90ac1a242b0d0df'} pageSize={16} country={'us'} category={"sports"} />);
            await waitFor(() => {
                expect(screen.getByText(/sports/i)).toBeInTheDocument();
            });
        });

    
});

    