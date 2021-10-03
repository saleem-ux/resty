import { render, fireEvent, waitFor, screen } from '@testing-library/react';
import Form from '../components/form';
// jdfoidjsfoisjd

it('runs a function on button click', async () => {
    let handleApiCall = jest.fn();
    render(<Form handleApiCall={handleApiCall} />);
    const button = screen.getByTestId('mybtn');
    expect(button).toBeInTheDocument();
    fireEvent.click(button);
    await waitFor(() => expect(handleApiCall).toHaveBeenCalled());
});

it('run a function on url input change', async () => {
    const setup = () => {
        const utils = render(<Form />);
        const input = screen.getByTestId('urlInput');
        return {
            input,
            ...utils,
        };
    };

    const { input } = setup();
    expect(input).toBeInTheDocument();
    fireEvent.change(input, { target: { value: 'test' } });
    expect(input.value).toBe('test');
});

it('changes the methoud and the class of the current method span to active on click', async () => {
    let handleMethod = jest.fn();
    render(<Form handleMethod={handleMethod} />);
    const span = screen.getByTestId('methodInput');
    expect(span).toBeInTheDocument();
    fireEvent.click(span);
    await waitFor(() => expect(span.className).toBe('active'));
});