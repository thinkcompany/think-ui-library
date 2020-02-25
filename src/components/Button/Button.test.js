import React from 'react';
import { create } from 'react-test-renderer';

import Button from './Button';

describe('<Button />', () => {
  it('renders correctly', () => {
    const tree = create(<Button>Button</Button>).toJSON();

    expect(tree).toMatchInlineSnapshot(`
      <button
        className="ui-btn"
        type="button"
      >
        Button
      </button>
    `);
  });
});
