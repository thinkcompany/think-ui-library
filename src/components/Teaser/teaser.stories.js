import { select, boolean, text, number } from '@storybook/addon-knobs';

const colors = {
  Default: '',
  Tan: 'tco-container-wrapper--tan',
  Blue: 'tco-container-wrapper--blue',
  Navy: 'tco-container-wrapper--navy',
  Glass: 'tco-container-wrapper--glass'
};

const alignment = {
  Default: 'tco-from-blog--align-left',
  Center: 'tco-from-blog--align-center',
  Right: 'tco-from-blog--align-right'
};

export const Default = () => {
  const containerColor = select('Background Color', colors, colors.Default);
  const teaserAlignment = select('Alignment', alignment, alignment.Default);
  const teaserHeader = text('Header', 'From our blog');
  const teaserTitle = text('Post Title', 'Reflections on 2020');
  const teaserAuthor = text('Author Name', 'Russ Starke');
  const teaserPosition = text('Position', 'Chief Executive Officer');

  return `
    <div class="tco-container-wrapper ${containerColor} ">
      <div class="tco-container">
        <div class="tco-from-blog ${teaserAlignment}">
          <div class=" tco-from-blog-content">
            <span class="tco-type-display--small">${teaserHeader}</span>
            <h4 class="tco-from-blog-title"><a href="#" >${teaserTitle}</a></h4>
            <p class="tco-byline-description">by ${teaserAuthor}, ${teaserPosition}</p>
          </div>
        </div>
      </div>
    </div>
  `;
};

export default {
  title: 'Components / Teaser',
  parameters: {
    options: {
      showPanel: true
    }
  }
};
