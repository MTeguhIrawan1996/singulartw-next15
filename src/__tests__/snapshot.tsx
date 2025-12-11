import RootLayout from '@/app/layout';
import Page from '@/app/page';
import { render } from '@/test-utils';

it('renders homepage unchanged', () => {
  const { container } = render(
    <RootLayout>
      <Page />
    </RootLayout>,
  );
  expect(container).toMatchSnapshot();
});
