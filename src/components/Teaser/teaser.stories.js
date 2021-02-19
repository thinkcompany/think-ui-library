import { select, boolean, text } from '@storybook/addon-knobs';

const alignment = {
  Default: 'tco-post-teaser--align-left',
  Center: 'tco-post-teaser--align-center',
  Right: 'tco-post-teaser--align-right'
};

export const teaser = () => {
  const teaserAlignment = select('Alignment', alignment, alignment.Default);
  const teaserHeader = text('Header', 'From our blog');
  const teaserTitle = text(
    'Post Title',
    '3 Fundamentals of Successful Product Design Teams'
  );
  const teaserAuthor = text('Author Name', 'Russ Starke');
  const teaserPosition = text('Position', 'Chief Executive Officer');
  const teaserShowByline = boolean('Show Author', false);

  return `
    <div class="tco-post-teaser ${teaserAlignment}">
      <div class=" tco-post-teaser-content">
        <p class="tco-post-teaser-eyebrow">${teaserHeader}</p>
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
