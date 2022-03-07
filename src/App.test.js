import { render, screen } from '@testing-library/react';
import App from './App';

test('renders learn react link', () => {
    render(<App />);
    const element = screen.getByTestId('mainDisplayTable')
    expect(element).toBeInTheDocument();
});
