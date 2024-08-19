export const Default = () => {
  return `
  <div class="tco-container-wrapper">
    <div class="tco-container">
      <nav class="tco-pagination" role="navigation">
        <ul class="tco-pagination-list">
          <li class="tco-pagination-list-item tco-pagination-list-item--prev">
            <a class="tco-pagination-link" href="#">
              <svg class="tco-icon" width="16" height="16" viewBox="0 0 16 16">
                <use xlink:href="/img/icons.svg#icon-arrow-right"></use>
              </svg>
              Previous
            </a>
          </li>
          <li class="tco-pagination-list-item" data-page="">
            <a class="tco-pagination-page tco-link--dark-theme" href="#">1</a>
          </li>
          <li class="tco-pagination-list-item"><span class="tco-pagination-page tco-pagination-page--ellipsis">…</span></li>

          <li class="tco-pagination-list-item"><a class="tco-pagination-page" href="#">12</a></li>
          <li class="tco-pagination-list-item"><a class="tco-pagination-page" href="#">13</a></li>
          <li class="tco-pagination-list-item tco-pagination-list-item--current">
            <span class="tco-pagination-page tco-pagination-page--current page-number page-numbers current">14</span>
          </li>
          <li class="tco-pagination-list-item"><a class="tco-pagination-page" href="#">15</a></li>
          <li class="tco-pagination-list-item"><a class="tco-pagination-page" href="#">16</a></li>
          <li class="tco-pagination-list-item"><a class="tco-pagination-page" href="#">17</a></li>
          <li class="tco-pagination-list-item"><span class="tco-pagination-page tco-pagination-page--ellipsis">…</span></li>
          <li class="tco-pagination-list-item"><a class="tco-pagination-page" href="#/">28</a></li>

          <li class="tco-pagination-list-item tco-pagination-list-item--next">
            <a href="" class="tco-link--dark-theme tco-pagination-link">
            Next
              <svg class="tco-icon tco-text-link-icon--alt" width="16" height="16" viewBox="0 0 16 16">
                <use xlink:href="/img/icons.svg#icon-arrow-right"></use>
              </svg>
            </a>
          </li>
        </ul>
      </nav>
    </div>
  </div>
  `;
};

export const DarkBackground = () => {
  return `
  <div class="tco-container-wrapper tco-container-wrapper--navy">
    <div class="tco-container">
      <nav class="tco-pagination" role="navigation">
        <ul class="tco-pagination-list">
          <li class="tco-pagination-list-item tco-pagination-list-item--prev">
            <a class="tco-pagination-link" href="#">
              <svg class="tco-icon" width="16" height="16" viewBox="0 0 16 16">
                <use xlink:href="/img/icons.svg#icon-arrow-right"></use>
              </svg>
              Previous
            </a>
          </li>
          <li class="tco-pagination-list-item" data-page="">
            <a class="tco-pagination-page tco-link--dark-theme" href="#">1</a>
          </li>
          <li class="tco-pagination-list-item"><span class="tco-pagination-page tco-pagination-page--ellipsis">…</span></li>

          <li class="tco-pagination-list-item"><a class="tco-pagination-page" href="#">12</a></li>
          <li class="tco-pagination-list-item"><a class="tco-pagination-page" href="#">13</a></li>
          <li class="tco-pagination-list-item tco-pagination-list-item--current">
            <span class="tco-pagination-page tco-pagination-page--current page-number page-numbers current">14</span>
          </li>
          <li class="tco-pagination-list-item"><a class="tco-pagination-page" href="#">15</a></li>
          <li class="tco-pagination-list-item"><a class="tco-pagination-page" href="#">16</a></li>
          <li class="tco-pagination-list-item"><a class="tco-pagination-page" href="#">17</a></li>
          <li class="tco-pagination-list-item"><span class="tco-pagination-page tco-pagination-page--ellipsis">…</span></li>
          <li class="tco-pagination-list-item"><a class="tco-pagination-page" href="#/">28</a></li>

          <li class="tco-pagination-list-item tco-pagination-list-item--next">
            <a href="" class="tco-link--dark-theme tco-pagination-link">
            Next
              <svg class="tco-icon tco-text-link-icon--alt" width="16" height="16" viewBox="0 0 16 16">
                <use xlink:href="/img/icons.svg#icon-arrow-right"></use>
              </svg>
            </a>
          </li>
        </ul>
      </nav>
    </div>
  </div>
  `;
};

export default {
  title: 'Components / Pagination'
};
