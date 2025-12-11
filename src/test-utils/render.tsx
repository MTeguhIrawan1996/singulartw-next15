import { render as testingLibraryRender } from '@testing-library/react';

import RootLayout from '@/app/layout';

export function render(ui: React.ReactNode) {
  return testingLibraryRender(<>{ui}</>, {
    wrapper: ({ children }: { children: React.ReactNode }) => (
      <RootLayout>{children}</RootLayout>
    ),
  });
}
