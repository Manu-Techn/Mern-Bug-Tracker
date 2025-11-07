import { render, screen } from '@testing-library/react';
import BugList from '../components/BugList';

test('shows message when list is empty', () => {
  render(<BugList bugs={[]} setBugs={() => {}} />);
  expect(screen.queryByRole('listitem')).toBeNull();
});

test('shows all bugs in list', () => {
  const bugs = [
    { _id: '1', title: 'Bug 1', status: 'open' },
    { _id: '2', title: 'Bug 2', status: 'resolved' },
  ];
  render(<BugList bugs={bugs} setBugs={() => {}} />);
  expect(screen.getByText(/Bug 1/i)).toBeInTheDocument();
  expect(screen.getByText(/Bug 2/i)).toBeInTheDocument();
});
