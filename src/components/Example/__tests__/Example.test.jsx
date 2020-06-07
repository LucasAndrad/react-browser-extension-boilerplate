import { render } from '@testing-library/preact';
// import { render, fireEvent, screen } from '@testing-library/react';
import Example from '../Example';

describe('Example component', () => {
  it('should render Example correctly', () => {
    const { results } = render(<Example />);
    // expect(screen.getByAltText(chrome.i18n.getMessage('greeting'))).toBeVisible();
  });
});
