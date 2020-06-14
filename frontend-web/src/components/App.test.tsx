import React from 'react';
import { render } from '@testing-library/react';

import { App } from 'src/components/App';

test('render without errors', () => {
  const { getByText } = render(<App />);
  const title = getByText(/AYneed/i);

  expect(title).toBeInTheDocument();
});
