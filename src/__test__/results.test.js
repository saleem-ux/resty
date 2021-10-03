import { render, fireEvent, waitFor, screen } from '@testing-library/react';
import Results from '../components/results';
import { rest } from 'msw';
import { setupServer } from 'msw/node';
import '@testing-library/jest-dom/extend-expect';
import Form from '../components/form';

test('renders the loading spinner', () => {
    render(<Results />);
    const loadingDivElement = screen.getByTestId('loading');
    expect(loadingDivElement).toBeInTheDocument();
});

test('renders null for results before submitting Url', () => {
    render(<Results />);
    const resultsPreElement = screen.getByTestId('results');
    expect(resultsPreElement).toBeInTheDocument();
    expect(resultsPreElement).toContainHTML('<div data-testid="results" />');
    expect(resultsPreElement).toHaveTextContent('');
});

test('renders the correct data form the api', async () => {
    let requestParams = {
        url: `https:pokeapi.co/api/v2/pokemon`,
    };
    const server = setupServer(
        rest.get('/greeting', (req, res, ctx) => {
            return res(ctx.fetch(requestParams.url).json());
        })
    );

    const raw = await fetch(requestParams.url);
    const data = await raw.json();

    let result = `"name": "venusaur", "url": "https://pokeapi.co/api/v2/pokemon/3/"`;

    () => server.listen();

    render(<Results data={data} />);
    render(<Form />);

    fireEvent.click(screen.getByTestId('results'));

    expect(screen.getByTestId('results')).toHaveTextContent(result);
    () => server.resetHandlers();
});