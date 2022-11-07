const alignments = ['left', 'right'];
const styles = ['Midnight', 'Blue'];

const Template = args => {
  const { quote, side, name, style } = args;

  return `
  <div class="tco-container-wrapper">
    <div class="tco-container tco-container--narrow">
      <p>Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
      <h3>Lorem Ipsum</h3>
      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>

      <blockquote class="tco-pull-quote tco-pull-quote--${side} tco-pull-quote--${style}">
        <p class="tco-pull-quote-text">${quote}</p>
        <div class="tco-pull-quote-footer">
          <cite class="tco-pull-quote-name">${name}</cite>
        </div>
      </blockquote>

      <p>Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
    </div>
  </div>
  `;
};

export const PullQuote = Template.bind({});

export default {
  title: 'Components / Pull Quote',
  args: {
    quote:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod.',
    name: 'Name Here',
    alignment: alignments[0],
    style: styles[0]
  },
  argTypes: {
    quote: {
      name: 'quote'
    },
    name: {
      name: 'name'
    },
    side: {
      name: 'quote alignment',
      control: 'inline-radio',
      options: alignments
    },
    style: {
      name: 'quote style',
      control: 'inline-radio',
      options: styles,
      mapping: {
        Midnight: 'default',
        Blue: 'alt'
      }
    }
  }
};
