import { screen, render } from '@testing-library/react';
import Customer from '.';

describe('Customer Component', () => {
  it('should render Customer', async () => {
    render(<Customer data={mockData}/>);

    expect(screen.getByTestId('name')).toBeInTheDocument();
    expect(screen.getByTestId('role')).toBeInTheDocument();
  });
});

const mockData = {
  id: "1",
  name: 'Atul Kumar',
  role: "ADMIN"
}