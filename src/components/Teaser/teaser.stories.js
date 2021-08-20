export const Teaser = args => {
  const { header, title, author, position, showByline } = args;

  return `
    <div class="tco-post-teaser">
      <div class=" tco-post-teaser-content">
        <p class="tco-post-teaser-eyebrow">${header}</p>
        <h4 class="tco-post-teaser-title"><a href="#" class="tco-post-teaser-link">${title}</a></h4>
        ${
          showByline
            ? `
          <p class="tco-post-teaser-author">by ${author}, ${position}</p>
          `
            : ``
        }
      </div>
    </div>
  `;
};

export default {
  title: 'Components / Teaser',
  args: {
    header: 'From our blog',
    title: '3 Fundamentals of Successful Product Design Teams',
    author: 'Russ Starke',
    position: 'Chief Executive Officer',
    showByline: false
  }
};
