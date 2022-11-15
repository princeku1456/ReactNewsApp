import {render,screen ,cleanup} from '@testing-library/react';
import News from '../news';
//test case for api call
//way to mock the import mocking

jest.mock('axios');

const mockfunction = jest.fn();


afterEach(cleanup);

describe('News', () => {
    // it('button prev', () => {
    //     render(<News  apiKey={'9cbd5b0c2d474a35b90ac1a242b0d0df'}  pageSize={16} country={'us'} newsType={"general"} category={"general"}/>);
    //     const button = screen.getByTestId('button-1');
    //     fireEvent.click(button);
        
    // });

    // it('button next', () => {
    //     render(<News  apiKey={'9cbd5b0c2d474a35b90ac1a242b0d0df'}  pageSize={16} country={'us'} newsType={"general"} category={"general"}/>);
    //     const button = screen.getByTestId('button-2');
    //     fireEvent.click(button);
    //     // expect page value to be greater than 1
        
    // });
    // it('should make a api call', async ()=> {
    //         render(<News apiKey={'9cbd5b0c2d474a35b90ac1a242b0d0df'} pageSize={16} country={'us'} category={"sports"} />);
    //         await waitFor(() => {
    //             expect(screen.getByText(/sports/i)).toBeInTheDocument();
    //         });
    //     });

    // it('should make a api call', async function () {
    //     axiosMock.get.mockResolvedValueOnce({
    //         data: {
    //             articles: [
    //                 {
    //                     source: {
    //                         id: 'abc-news',
    //                         name: 'ABC News',
    //                     },
    //                     "author": "ABC News",
    //                     "title": "Biden to nominate former Fed chair Janet Yellen as Treasury secretary - ABC News",
    //                     "description": "President-elect Joe Biden is expected to nominate Janet",
    //                     "url": "https://abcnews.go.com/Politics/biden-nominate-former-fed-chair-janet-yellen-treasury/story?id=74710000",
    //                     "urlToImage": "https://s.abcnews.com/images/Politics/202012_janet_yellen_gty_jc_121320_hpMain_16x9_992.jpg",
    //                     "publishedAt": "2020-12-13T17:00:00Z",
    //                     "content": "President-elect Joe Biden is expected to nominate Janet Yellen as his Treasury secretary, according to a source familiar with the matter"
    //                 }
    //             ]
    //         }
    //     });
    //     render(<News/>);
    //     await waitFor(() => {
    //         // const name = screen.getByTestText('name');
    //         // expect(name).toBeInTheDocument();
    //         expect(axiosMock.get).toHaveBeenCalledTimes(1);
    //         // eslint-disable-next-line testing-library/no-wait-for-multiple-assertions
    //         expect(axiosMock.get).toHaveBeenCalledWith("https://newsapi.org/v2/top-headlines?apiKey=77ca9bfef0744275b6724319a9db3b5b&country=in&category=general&page=1&pageSize=8");
    //     });
    // });

    // it('should make a mock api call', async function () {
    //     axiosMock.get.mockResolvedValueOnce({
    //         data: {
    //             articles: [
    //                 {
    //                     source: {
    //                         id: 'abc-news',
    //                         name: 'ABC News',
    //                     },
    //                     "author": "ABC News",
    //                     "title": "Biden to nominate former Fed chair Janet Yellen as Treasury secretary - ABC News",
    //                     "description": "President-elect Joe Biden is expected to nominate Janet",
    //                     "url": "https://abcnews.go.com/Politics/biden-nominate-former-fed-chair-janet-yellen-treasury/story?id=74710000",
    //                     "urlToImage": "https://s.abcnews.com/images/Politics/202012_janet_yellen_gty_jc_121320_hpMain_16x9_992.jpg",
    //                     "publishedAt": "2020-12-13T17:00:00Z",
    //                     "content": "President-elect Joe Biden is expected to nominate Janet Yellen as his Treasury secretary, according to a source familiar with the matter"
    //                 }
    //             ]
    //         }
    //     });
    //     render(<News/>);
    //     const name = await screen.findByText('ABC News');
    //     expect(name).toBeInTheDocument();
    // });
    it('should make a mock api call', async ()=>{
        render(<News setProgress={mockfunction}/>);
        const name = await screen.findByText('ABC News');
        expect(name).toBeInTheDocument();
    });
});