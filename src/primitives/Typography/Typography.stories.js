const displayStyles = [
  {
    name: 'Display Extra Large',
    class: 'tco-type-display--extra-large',
    sass: '@include type-display-extra-large',
    textLength: 1,
    size: '53px / 120px'
  },
  {
    name: 'Display Large',
    class: 'tco-type-display--large',
    sass: '@include type-display-large',
    textLength: 1,
    size: '48px / 90px'
  },
  {
    name: 'Display Large 80',
    class: 'tco-type-display--large-small',
    sass: '@include type-display-large($small: true)',
    textLength: 1,
    size: '48px / 80px'
  },
  {
    name: 'Display Medium',
    class: 'tco-type-display--medium',
    sass: '@include type-display-medium',
    textLength: 1,
    size: '36px / 52px'
  },
  {
    name: 'Display Medium 48',
    class: 'tco-type-display--medium-48',
    sass: '@include type-display-medium($med48: true)',
    textLength: 1,
    size: '36px / 48px'
  },
  {
    name: 'Display Medium 36',
    class: 'tco-type-display--medium-36',
    sass: '@include type-display-medium($med36: true)',
    textLength: 1,
    size: '24px / 36px'
  },
  {
    name: 'Display Small',
    class: 'tco-type-display--small',
    sass: '@include type-display-small',
    textLength: 1,
    size: '24px / 28px'
  },
  {
    name: 'Display Small 24',
    class: 'tco-type-display--small-24',
    sass: '@include type-display-small($small24: true)',
    textLength: 1,
    size: '20px / 24px'
  },
  {
    name: 'Eyebrow',
    class: 'tco-type-eyebrow',
    sass: '@include type-eyebrow',
    textLength: 1,
    size: '16px / 18px'
  }
];

const bodyStyles = [
  {
    name: 'Body Text Default',
    class: 'tco-type-body',
    sass: '@include type-body',
    textLength: 10,
    size: '16px'
  },
  {
    name: 'Body Text X-Large',
    class: 'tco-type-body--x-large',
    sass: '@include type-body-large($xl: true)',
    textLength: 1,
    size: '24px / 28px'
  },
  {
    name: 'Body Text Large',
    class: 'tco-type-body--large',
    sass: '@include type-body-large',
    textLength: 1,
    size: '20px / 24px'
  },
  {
    name: 'Body Text Medium',
    class: 'tco-type-body--medium',
    sass: '@include type-eyebrow',
    textLength: 1,
    size: '16px / 18px'
  },
  {
    name: 'Body Text Small',
    class: 'tco-type-body--small',
    sass: '@include type-body-small',
    textLength: 1,
    size: '15px'
  },
  {
    name: 'Body Text Small 14',
    class: 'tco-type-body--small-14',
    sass: '@include type-body-small($font-size-14)',
    textLength: 1,
    size: '14px'
  },
  {
    name: 'Body Text Small 10',
    class: 'tco-type-body--small-10',
    sass: '@include type-body-small($font-size-10)',
    textLength: 1,
    size: '10px'
  }
];

const archive = [
  {
    name: 'Display 64 ',
    class: 'tco-type-display--64',
    sass: '@include type-display-64',
    textLength: 1
  },
  {
    name: 'Display Junior',
    class: 'tco-type-display--junior',
    sass: '@include type-display-junior',
    textLength: 1
  },

  {
    name: 'Display Thin',
    class: 'tco-type-display--thin',
    sass: '@include type-display-thin',
    textLength: 1
  },
  {
    name: 'Display Sans 80 ',
    class: 'tco-type-display--sans-80',
    sass: '@include type-display-80',
    textLength: 1
  },
  {
    name: 'Display Sans Large',
    class: 'tco-type-display--sans-large',
    sass: '@include type-display-sans-large',
    textLength: 1
  },
  {
    name: 'Display Sans',
    class: 'tco-type-display--sans',
    sass: '@include type-display-sans',
    textLength: 1
  },
  {
    name: 'Display Sans 48 ',
    class: 'tco-type-display--sans-48',
    sass: '@include type-display-48',
    textLength: 1
  },
  {
    name: 'Body Text Sans Small',
    class: 'tco-type-body--sans-small',
    sass: '@include type-body-small',
    textLength: 1
  },
  {
    name: 'Body Text Sans Small Light',
    class: 'tco-type-body--sans-small-light',
    sass: '@include type-body-small-light',
    textLength: 1
  },

  {
    name: 'Body Text Large Sans',
    class: 'tco-type-body--large-sans',
    sass: '@include type-body-large-sans',
    textLength: 1
  },
  {
    name: 'Body Text Large & Tall',
    class: 'tco-type-body--large-tall',
    sass: '@include type-body-large-tall',
    textLength: 1
  }
];

// builds a text example where `length` is the number of sentences included
const genText = length => {
  const text =
    `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris ac pharetra velit. Suspendisse dictum consequat ornare. Nullam efficitur pharetra est quis ornare. <em>Nunc a dignissim odio</em>. Lorem ipsum dolor sit amet, consectetur adipiscing elit. In varius leo vitae dui pellentesque, et rhoncus turpis feugiat. Curabitur interdum ipsum in nulla scelerisque, eget ullamcorper massa pharetra. Nam sed odio in magna placerat eleifend in vitae dui. Suspendisse potenti. Donec ac cursus velit, quis rhoncus nunc. Curabitur ante leo, faucibus in luctus ullamcorper, pretium ut neque. Sed dignissim magna ut pulvinar consectetur. Proin ullamcorper ante aliquam purus aliquam pulvinar. Sed laoreet aliquet massa ac imperdiet. Sed pellentesque leo vitae risus facilisis, id eleifend dui dapibus. Etiam rhoncus euismod ex sit amet laoreet. Sed mollis placerat eros, vel consequat dui elementum a. Nam accumsan vitae lectus a tempus. Nunc non finibus quam. Sed convallis urna sed hendrerit tempor. Aenean euismod, diam in ornare imperdiet, eros purus ornare lectus, quis porttitor nulla mauris in est. Nullam consectetur vel velit ut ornare. Donec cursus viverra diam, vel bibendum metus. Nunc ipsum enim, commodo ac consectetur eget, rhoncus ut lectus. Fusce aliquet cursus faucibus. Suspendisse semper laoreet est, at mollis felis vehicula sed. Quisque in justo at nibh facilisis finibus eget non risus. Pellentesque vitae leo at risus sodales iaculis in nec urna. Nam at magna nec orci placerat suscipit ut quis justo. Maecenas posuere suscipit dapibus. Donec ac felis viverra, finibus velit sit amet, pulvinar ligula. Sed dictum odio sed hendrerit feugiat. Praesent euismod urna eget rutrum semper. Curabitur est lacus, suscipit vitae vestibulum at, volutpat ut leo. Etiam fermentum mi in tellus aliquet, vitae porttitor nibh tristique. Nam vehicula ligula sit amet diam pellentesque, et efficitur dolor pulvinar. Nullam tempor libero a eros lacinia hendrerit. Duis eu blandit nisl. Etiam ipsum turpis, interdum at dolor quis, tempus fermentum magna. Pellentesque maximus in arcu eget aliquam.`.split(
      '. '
    );

  return `${text.slice(0, length).join('. ')}.`;
};

// wraps a story in the documentation grid list
const wrapGrid = input => `<div class="documentation-grid--list">${input}</div>`;

// wraps the story item's name
const nameBlock = input => (input.name ? `<p><strong>${input.name}</strong></p>` : '');

// wraps the story item's classes
const classBlock = input => (input.class ? `<p><code>.${input.class}</code></p>` : '');

// wraps the story item's sass declarations
const sassBlock = input => (input.sass ? `<p><code>${input.sass}</code></p>` : '');

const sizeBlock = input => (input.size ? `<p><code>size: ${input.size}</code></p>` : '');

/**
 * Generate Story Block
 * puts the above strings together to create a Type story block
 * a story block consists of:
 * body
 *   example of the specific text
 *   optional demo that shows the text between two demo blocks
 * footer
 *   text style name
 *   classes used
 *   sass used
 */
const typeItem = (input, demoLength, demo = true) => `
<div class="documentation-grid--item documentation-block documentation-typography">
  <div class="type-block">
    <p class="${input.class}">${genText(input.textLength)}</p>
  </div>
  ${
    demo
      ? `
  <div class="type-block type-block--demo">
      <div>
        <p>${genText(demoLength)}</p>
        <p class="${input.class}">${genText(input.textLength)}</p>
        <p>${genText(demoLength)}</p>
      </div>
  </div>
`
      : ''
  }
  <div class="doc-footer">
    ${nameBlock(input)}
    ${classBlock(input)}
    ${sassBlock(input)}
    ${sizeBlock(input)}
  </div>
</div>
`;

export const All = () =>
  wrapGrid([...displayStyles, ...bodyStyles].map(item => typeItem(item, 8, false)).join(''));

export const Display = () => wrapGrid(displayStyles.map(item => typeItem(item, 8)).join(''));

export const Body = () => wrapGrid(bodyStyles.map(item => typeItem(item, 8)).join(''));

export const Archive = () => wrapGrid(archive.map(item => typeItem(item, 8)).join(''));

All.parameters = {
  controls: { hideNoControlsWarning: true }
};

Display.parameters = {
  controls: { hideNoControlsWarning: true }
};

Body.parameters = {
  controls: { hideNoControlsWarning: true }
};

Archive.parameters = {
  controls: { hideNoControlsWarning: true }
};

export default {
  title: 'Primitives / Typography'
};
