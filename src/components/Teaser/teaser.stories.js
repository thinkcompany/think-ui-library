import { select, boolean, text, number } from '@storybook/addon-knobs';

const colors = {
  Default: '',
  Tan: 'tco-container-wrapper--tan',
  Blue: 'tco-container-wrapper--blue',
  Navy: 'tco-container-wrapper--navy',
  Glass: 'tco-container-wrapper--glass'
};

const alignment = {
  Default: 'tco-post-teaser--align-left',
  Center: 'tco-post-teaser--align-center',
  Right: 'tco-post-teaser--align-right'
};

export const teaser = () => {
  const containerColor = select('Background Color', colors, colors.Default);
  const teaserAlignment = select('Alignment', alignment, alignment.Default);
  const teaserHeader = text('Header', 'From our blog');
  const teaserTitle = text('Post Title', 'Reflections on 2020');
  const teaserAuthor = text('Author Name', 'Russ Starke');
  const teaserPosition = text('Position', 'Chief Executive Officer');
  const teaserShowByline = boolean('Show Author', true);

  return `
    <div class="tco-post-teaser ${teaserAlignment}">
      <div class=" tco-post-teaser-content">
        <span class="tco-post-teaser-eyebrow tco-type-display--extra-small">${teaserHeader}</span>
        <h4 class="tco-post-teaser-title"><a href="#" class="tco-post-teaser-link">${teaserTitle}</a></h4>
        ${
          teaserShowByline
            ? `
          <p class="tco-post-teaser-author">by ${teaserAuthor}, ${teaserPosition}</p>
          `
            : ``
        }
      </div>
    </div>
  `;
};

export default { title: 'Components / Teaser' };
