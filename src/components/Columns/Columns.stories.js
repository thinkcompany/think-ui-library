const layouts = ['50-50', '60-40'];

const Template = args => {
  const { layout } = args;

  return `
  <div class="tco-container-wrapper">
    <div class="tco-container">
      <div class="tco-columns tco-columns">
        <div class="tco-column tco-column--${layout}">
          <div class="tco-text-only tco-text-only--left ">
            <span class="tco-text-only-eyebrow">Text Only</span>
            <div class="tco-text-only-content tco-text-only-content--left tco-container--none">
              <p class="tco-text-only-lede tco-type-body--default">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce vitae dui posuere, porta nunc lacinia, pharetra diam. Maecenas dapibus orci vitae accumsan lacinia. Praesent dapibus ac leo ut aliquam. Praesent commodo hendrerit est.</p>
            </div>
          </div>
        </div>
        <div class="tco-column tco-column--${layout}">
          <div class="tco-checklist">
            <span class="tco-checklist-eyebrow">How we can help</span>
            <ul>
              <li>Launch a new product</li><li>Transform an existing product</li><li>Maintain and improve business systems</li><li>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce vitae dui posuere</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  </div>`;
};

export const Columns = Template.bind({});

export default {
  title: 'Components / Columns',
  args: {
    layout: layouts[0]
  },
  argTypes: {
    layout: {
      control: 'inline-radio',
      options: layouts
    }
  }
};
