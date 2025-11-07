import { render, screen, fireEvent } from '@testing-library/react';
import BugForm from '../components/BugForm';

test('clears input after submitting', async () => {
    const setBugs = jest.fn();
    render(<BugForm setBugs={setBugs} />);

    const input = screen.getByPlaceholderText(/bug title/i);
    fireEvent.change(input, { target: { value: 'New bug' } });
    fireEvent.submit(screen.getByRole('button'));

    expect(input.value).toBe('');
});