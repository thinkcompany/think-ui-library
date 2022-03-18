import { SocialIcons as icons } from '../SocialIcons/social-icons.stories';

const AuthorTemplate = args => {
  const { eyebrow, name, title, image, bio, socialLabel, showSocial } = args;

  return `
  <div class="tco-container-wrapper">
	  <div class="tco-container">
      <div class="tco-text-media tco-text-media--align-right tco-author">
        <div class="tco-text-media-content tco-text-media-content-text">
          <span class="tco-author-eyebrow">${eyebrow}</span>
          <h2 class="tco-author-heading">${name}</h2>
          <p class="tco-author-title">${title}</p>
          <p class="tco-author-bio tco-type-body--default">${bio}</p>
          ${
            showSocial
              ? `<div class="tco-author-social">
                  <p class="tco-author-social-heading">${socialLabel}</p>
                  ${icons()}
                </div>`
              : ''
          }
        </div>
        <div class="tco-text-media-content tco-text-media-content-media tco-author-container-media">
          <img class="tco-author-image" src="${image}" alt="${name}" />
        </div>
      </div>
    </div>
  </div>
  `;
};

export const Author = AuthorTemplate.bind({});

Author.args = {
  eyebrow: 'Meet the Author',
  bio: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce vel fermentum orci. In commodo tellus eget risus condimentum cursus. Maecenas cursus, risus tristique dictum venenatis, lectus quam finibus est, sit amet feugiat lacus nibh in urna. Aliquam fringilla egestas augue, at dictum ex consequat et. Vestibulum ac imperdiet lectus. Integer rhoncus quis est a fringilla.',
  socialLabel: 'Say Hello',
  showSocial: true
};

const SpeakerTemplate = args => {
  const { name, title, image, bio } = args;

  return `
    <div class="tco-container-wrapper">
      <div class="tco-container">
        <div class="tco-text-media tco-text-media--align-left tco-speaker">
          <div class="tco-text-media-content tco-text-media-content-text tco-text-media-content-text--has-image">
            <h2 class="tco-author-heading">${name}</h2>
            <p class="tco-type-body--large">${title}</p>
            <p class="tco-type-body--default">${bio}</p>
          </div>
          <div class="tco-text-media-content tco-text-media-content-media">
            <img class="tco-speaker-image" src="${image}" alt="${name}" />
          </div>
        </div>
      </div>
    </div>
  `;
};

export const Speaker = SpeakerTemplate.bind({});

Speaker.args = {
  bio: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce vel fermentum orci. In commodo tellus eget risus condimentum cursus. Maecenas cursus, risus tristique dictum venenatis, lectus quam finibus est, sit amet feugiat lacus nibh in urna.'
};

export default {
  title: 'Components / Bio',
  args: {
    name: 'Abby DePrimo',
    title: 'Vice President, Design Operations',
    image:
      'https://www.thinkcompany.com/wp-content/uploads/2020/03/AbbyDePrimo_Web.jpg'
  },
  argTypes: {
    showSocial: {
      name: 'show social'
    },
    socialLabel: {
      name: 'social label'
    }
  }
};
