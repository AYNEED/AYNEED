import React from 'react';
import { render, wait } from '@testing-library/react';

import { App } from 'src/components/App';

describe('Test render', () => {
  test('render without errors', async () => {
    const { getByText } = render(<App />);
    await wait();

    const title = getByText(/TODO: show preloader/i);
    expect(title).toBeInTheDocument();
  });
});
