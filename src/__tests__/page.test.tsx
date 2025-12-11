import '@testing-library/jest-dom';

import RootLayout from '@/app/layout';
import Page from '@/app/page';
import { render, screen } from '@/test-utils';

describe('Page', () => {
  it('renders a heading', () => {
    render(
      <RootLayout>
        <Page />
      </RootLayout>,
    );

    const heading = screen.getByRole('heading', { level: 1 });

    expect(heading).toBeInTheDocument();
  });
});
