import React from 'react';
import { render, waitFor } from '@testing-library/react';

import { App } from 'src/components/App';

describe('Test render', () => {
  test('render without errors', async () => {
    const { getByTestId } = render(<App />);

    await waitFor(() => expect(getByTestId('page')).toBeInTheDocument());
  });
});
