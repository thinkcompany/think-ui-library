export const Default = () => {
  return `
  <div class="tco-container-wrapper">
  <div class="tco-container">
    <nav class="tco-pagination" role="navigation">
      <ul class="tco-pagination-list">
        <li class="tco-pagination-list-item"><a class="tco-pagination-page tco-pagination-page--previous" href="#">‹<span class="tco-pagination-label">Previous</span></a></li>
        <li class="tco-pagination-list-item"><a class="tco-pagination-page" href="#">1</a></li>
        <li class="tco-pagination-list-item"><span class="tco-pagination-page tco-pagination-page--ellipsis">…</span></li>
        <li class="tco-pagination-list-item"><a class="tco-pagination-page" href="#">12</a></li>
        <li class="tco-pagination-list-item"><a class="tco-pagination-page" href="#">13</a></li>
        <li class="tco-pagination-list-item"><span aria-current="page" class="tco-pagination-page tco-pagination-page--current">14</span></li>
        <li class="tco-pagination-list-item"><a class="tco-pagination-page" href="#">15</a></li>
        <li class="tco-pagination-list-item"><a class="tco-pagination-page" href="#">16</a></li>
        <li class="tco-pagination-list-item"><a class="tco-pagination-page" href="#">17</a></li>
        <li class="tco-pagination-list-item"><span class="tco-pagination-page tco-pagination-page--ellipsis">…</span></li>
        <li class="tco-pagination-list-item"><a class="tco-pagination-page" href="#/">28</a></li>
        <li class="tco-pagination-list-item"><a class="next tco-pagination-page" href="#"><span class="tco-pagination-label">Next</span>›</a></li>
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
        <li class="tco-pagination-list-item"><a class="tco-pagination-page tco-pagination-page--previous" href="#">‹<span class="tco-pagination-label">Previous</span></a></li>
        <li class="tco-pagination-list-item"><a class="tco-pagination-page" href="#">1</a></li>
        <li class="tco-pagination-list-item"><span class="tco-pagination-page tco-pagination-page--ellipsis">…</span></li>
        <li class="tco-pagination-list-item"><a class="tco-pagination-page" href="#">12</a></li>
        <li class="tco-pagination-list-item"><a class="tco-pagination-page" href="#">13</a></li>
        <li class="tco-pagination-list-item"><span aria-current="page" class="tco-pagination-page tco-pagination-page--current">14</span></li>
        <li class="tco-pagination-list-item"><a class="tco-pagination-page" href="#">15</a></li>
        <li class="tco-pagination-list-item"><a class="tco-pagination-page" href="#">16</a></li>
        <li class="tco-pagination-list-item"><a class="tco-pagination-page" href="#">17</a></li>
        <li class="tco-pagination-list-item"><span class="tco-pagination-page tco-pagination-page--ellipsis">…</span></li>
        <li class="tco-pagination-list-item"><a class="tco-pagination-page" href="#/">28</a></li>
        <li class="tco-pagination-list-item"><a class="next tco-pagination-page" href="#"><span class="tco-pagination-label">Next</span>›</a></li>
      </ul>
    </nav>
    </div>
  </div>
  `;
};

export default {
  title: 'Components / Pagination'
};
