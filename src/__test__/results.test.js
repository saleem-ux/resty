import Results from '../components/results';
import { render, fireEvent, waitFor, screen } from '@testing-library/react'
import '@testing-library/jest-dom'
import '@testing-library/jest-dom/extend-expect';


it('Should render star wars list', () => {
    const data = {
        Headers: {
            "cache-control": 'string no-cache'
        },
        count: 2,
        results: [
            { name: 'fake thing 1', url: 'http://fakethings.com/1' },
            { name: 'fake thing 2', url: 'http://fakethings.com/2' },
        ],
    };
    render(<Results data={data} />);
    const items = screen.getByTestId('result');

    expect(items).toHaveTextContent('"Headers": { "cache-control": "string no-cache" }, "count": 2, "results": [ { "name": "fake thing 1", "url": "http://fakethings.com/1" }, { "name": "fake thing 2", "url": "http://fakethings.com/2" } ]');

});

test('renders null for results before subitting Url', () => {
    render(<Results />);
    const resultsPreElement = screen.getByTestId('result');
    expect(resultsPreElement).toBeInTheDocument();
    expect(resultsPreElement).toContainHTML('<section data-testid="result">');
    expect(resultsPreElement).toHaveTextContent('');
});