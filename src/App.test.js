// src/App.test.js
import { render, screen } from '@testing-library/react';
import App from './App';

test('renders KineticBrain title', () => {
    render(<App />);
    const titleElement = screen.getByText(/KineticBrain/i);
    expect(titleElement).toBeInTheDocument();
});
