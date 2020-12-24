import navMarkup from './navigation.html';

export const header = () => `
<div style="background-color: #eee; height: 1000px; margin: -20px">
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
