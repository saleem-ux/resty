import { render, fireEvent, waitFor, screen } from '@testing-library/react';
import App from '../App';

test('renders the title', () => {
    render(<App />);
    const H1Element = screen.getByText(/RESTy/);
    expect(H1Element).toBeInTheDocument();
});

test('renders the request mathod and url', () => {
    render(<App />);
    const methodDivElement = screen.getByText(/Request Method/);
    const urlDivElement = screen.getByText(/URL/);
    expect(methodDivElement).toBeInTheDocument();
    expect(urlDivElement).toBeInTheDocument();
});