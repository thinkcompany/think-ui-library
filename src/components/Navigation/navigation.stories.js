import navMarkup from './navigation.html';
import Nav from './navigation.js';

export const header = () => `
<div style="background-color: #fff; height: 1000px;">
${navMarkup}
</div>`;

export * from '../Footer/Footer.stories';

export default {
  title: 'Navigation / Global',
  parameters: {
    options: {
      showPanel: false
    }
  }
};
