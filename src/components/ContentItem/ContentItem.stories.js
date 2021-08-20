const Template = args => {
  const {
    tag,
    date,
    location,
    heading,
    excerpt,
    authors,
    authorHeading,
    action,
    image
  } = args;

  return `
    <div class="tco-container-wrapper">
      <div class="tco-container tco-container--default">
        <article class="tco-content-item tco-text-media">
          <div class="tco-text-media-content tco-text-media-content-text">
            <div class="tco-content-item-meta">
              ${
                tag
                  ? `
                <span class="tco-tag">${tag}</span>
                `
                  : ''
              }
              <span class="tco-content-item-date">${date}</span>
              ${
                location
                  ? `
                <span class="tco-content-item-location">${location}</span>
              `
                  : ''
              }
            </div>
            <h1 class="tco-content-item-heading">
              <a href="#" class="tco-link">
                  ${heading}
              </a>
            </h1>
            ${
              excerpt
                ? `
              <p class="tco-text-media-lede">${excerpt}</p>
              `
                : ''
            }
            ${
              authors
                ? `
              <span class="tco-content-item-author-heading">${authorHeading}</span>
              <span class="tco-content-item-authors">${authors}</span>
              `
                : ''
            }
            <a href="#" class="tco-btn tco-btn--primary">${action}</a>
          </div>
          <div class="tco-text-media-content tco-text-media-content-media">
            <img class="tco-text-media-image" alt="An adorable kitten" src="${image}" />
          </div>
        </article>
      </div>
    </div>
  `;
};

export const ContentItem = Template.bind({});

export default {
  title: 'Components / Content Item',
  args: {
    tag: 'Workshop',
    date: 'June 2, 2020',
    location: 'Malvern, PA',
    heading: 'Become a Digital Disruptor in a Changing World (Pact Phorum)',
    excerpt:
      'Learn more about best practices for achieving internal alignment and framing conversations for the best possible outcome.',
    authors: 'Shawn Hickman, John Young, Dave Thomas',
    authorHeading: 'Hosted by: ',
    action: 'Learn More',
    image: 'https://placekitten.com/960/694'
  }
};
