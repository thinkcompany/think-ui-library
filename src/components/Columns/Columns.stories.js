import { select, text, boolean } from '@storybook/addon-knobs';
import { textOnly } from '../TextOnly/text-only.stories';
import { checklist } from '../Checklist/checklist.stories';

const layouts = {
  Even: '50-50',
  Offset: '60-40'
};

export const Default = () => {
  const layout = select('Layout', layouts, layouts.Split);
  const heading = text('Heading', '');
  const showCta = boolean('CTA', false);

  return `
  <div class="tco-container-wrapper">
    <div class="tco-container">
      <div class="tco-columns tco-columns">
        <div class="tco-column tco-column--${layout}">${textOnly(
    heading,
    showCta
  )}</div>
        <div class="tco-column tco-column--${layout}">${checklist()}</div>
      </div>
    </div>
  </div>`;
};

export default {
  title: 'Components / Columns',
  // enables Chromatic for the component
  parameters: {
    chromatic: { disable: false }
  }
};
