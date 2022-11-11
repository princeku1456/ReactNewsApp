import {render, screen } from '@testing-library/react';
import NewsComponent from '../newsComponent';


//test case for props

describe('NewsComponent', () => {
    it('should render NewsComponent', () => {
        render(<NewsComponent title="cricket" />);
        const linkElement = screen.getByText(/cricket/i);
        expect(linkElement).toBeInTheDocument();
    });

    it('description', () => {
        render(<NewsComponent description="cricket" />);
        const linkElement = screen.getByText(/cricket/i);
        expect(linkElement).toBeInTheDocument();
    });

    it('imageUrl', () => {
        render(<NewsComponent imageUrl="https://clipartion.com/wp-content/uploads/2015/11/free-retro-clipart-of-a-man-reading-interesting-news-from-a-newspaper.jpg" />);
        const linkElement = screen.getByTestId('backgroundImage');
        expect(linkElement).toBeInTheDocument();
    });

    it('newsUrl', () => {
        render(<NewsComponent newsUrl="https://www.google.com" />);
        const linkElement = screen.getByText(/read more/i);
        expect(linkElement).toBeInTheDocument();
    });

    it('author', () => {
        render(<NewsComponent author="cricket" />);
        const linkElement = screen.getByText(/cricket/i);
        expect(linkElement).toBeInTheDocument();
    });

    it('publishedAt', () => {
        render(<NewsComponent publishedAt="2022-11-11T04:28:09Z" />);
        const linkElement = screen.getByText(/Fri, 11 Nov 2022 04:28:09 GMT/i);
        expect(linkElement).toBeInTheDocument();
    });

    it('source', () => {
        render(<NewsComponent source="cricket" />);
        const linkElement = screen.getByText(/cricket/i);
        expect(linkElement).toBeInTheDocument();
    } );

});
