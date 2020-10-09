export const Default = () => {
  return `
  <div class="tco-post-info">
  <div class="tco-post-info-category">
    <span class="tco-post-info-category-label">Filed Under:</span>
    <a href="#" class="tco-post-info-category-link">Research</a>
  </div>
  <div class="tco-post-info-share">
    <span class="tco-post-info-share-label">Share this post:</span>
    <ul class="tco-post-info-share-list">
      <li>
        <a href="https://www.facebook.com/sharer/sharer.php?u={{ post.link }}">
        <span class="tco-accessibly-hidden">Facebook</span>
          <svg class="tco-icon" role="presentation" width="16" height="16" viewBox="0 0 16 16">
            <use xlink:href="img/icons.svg#icon-facebook"></use>
          </svg>
        </a>
      </li>
      <li>
        <a href="http://twitter.com/intent/tweet?text=On%20the%20Think%20Blog%20&amp;url={{ post.link }}" data-text="Check this out!">
        <span class="tco-accessibly-hidden">Twitter</span>
          <svg class="tco-icon" role="presentation" width="16" height="16" viewBox="0 0 16 16">
            <use xlink:href="img/icons.svg#icon-twitter"></use>
          </svg>
        </a>
      </li>
      <li>
        <a href="http://www.linkedin.com/shareArticle?url={{ post.link }}">
          <span class="tco-accessibly-hidden">LinkedIn</span>
          <svg class="tco-icon" role="presentation" width="16" height="16" viewBox="0 0 16 16">
            <use xlink:href="img/icons.svg#icon-linkedin"></use>
          </svg>
        </a>
      </li>
    </ul>
  </div>
</div>
  `;
};

export default {
  title: 'Components / Post Info'
};
