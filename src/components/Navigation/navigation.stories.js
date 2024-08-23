export const Header = () => {
  return `
  <style>
    .sb-page-background {
      height: 1000px;
      background-color: #fff;
    }
    .tco-lights-out .sb-page-background {
      background-color: #010D15;
    }
  </style>
  <div class="sb-page-background">
    <header class="tco-site-header" role="banner">
  <div class="tco-container tco-site-header-container">
    <a class="tco-site-header-logo" href="/">
      <svg width="151" height="50" viewBox="0 0 151 50" xmlns="http://www.w3.org/2000/svg"><g stroke="none" stroke-width="1" fill="none" fill-rule="evenodd"><g id="Page-Components/Desktop/Nav-(Dark)" transform="translate(-56 -15)"><g id="Think-Logo" transform="translate(56 15)"><path d="M148.39 28.916h.4l.32 1.014c.035.117.068.255.079.286h.005c.01-.03.046-.169.081-.286l.332-1.014h.401l.232 1.7h-.42l-.095-.8c-.016-.126-.028-.226-.028-.251h-.006c-.007.028-.033.13-.069.245l-.25.806h-.405l-.25-.806c-.031-.105-.06-.22-.067-.245h-.005c0 .028-.008.14-.02.252l-.1.8h-.37l.235-1.7z" id="Fill-25" class="letter"/><path id="Fill-9" class="letter" d="M58.256 10.01H54.56V6.75H66.3v3.26h-3.914v10.87h-4.13z"/><path d="M135.893 44.647c-.585 0-1.052-.03-1.403-.097a6.45 6.45 0 01-.717-.158l.558-3c.072.028.196.058.374.096.178.034.454.054.824.054.371 0 .682-.036.934-.108.25-.072.45-.17.608-.301.159-.126.288-.277.387-.45.101-.17.186-.357.259-.558l.321-.928-3.943-10.274h4.048l1.885 5.871h.087l1.563-5.87h3.921l-4.262 11.515c-.272.729-.564 1.378-.879 1.902-.316.518-.678.966-1.093 1.31a3.93 3.93 0 01-1.467.754c-.564.157-1.232.242-2.005.242" id="Fill-22" class="letter"/><path d="M126.36 30.175c.157-.17.335-.318.534-.49.2-.17.436-.314.707-.457.273-.142.575-.25.91-.336a4.532 4.532 0 011.126-.126c.601 0 1.104.092 1.51.27.41.177.736.427.988.74.25.313.415.687.528 1.114.116.43.158.894.158 1.394v7.293h-3.913V33.1c0-.43-.04-.733-.203-.912-.165-.179-.41-.268-.78-.268-.373 0-.642.111-.897.332-.257.221-.511.398-.511.526v6.799h-3.913V28.923h2.271c1.406 0 1.484 1.252 1.484 1.252" id="Fill-21" class="letter"/><path d="M115.39 37.212c.33 0 .622-.053.823-.159.199-.108.304-.219.521-.333v-1.49h-.359c-.613 0-1.107.073-1.479.274-.372.198-.556.493-.556.91 0 .54.35.798 1.05.798m-1.33 2.636c-.458 0-.883-.064-1.284-.192a2.99 2.99 0 01-1.048-.578 2.657 2.657 0 01-.708-.965c-.172-.386-.259-.835-.259-1.35 0-.671.155-1.25.463-1.737a3.655 3.655 0 011.231-1.186c.515-.309 1.11-.48 1.79-.623.677-.143 1.389-.162 2.13-.162h.36v-.427a.87.87 0 00-.31-.688c-.184-.156-.579-.235-1.149-.235-.314 0-.62.035-.896.107a5.967 5.967 0 00-.765.247 3.507 3.507 0 00-.591.3 9.283 9.283 0 01-.396.249l-1.545-2.275c.173-.157.4-.323.687-.504a6.222 6.222 0 011.018-.502c.393-.158.834-.289 1.327-.397a7.677 7.677 0 011.638-.16c1.672 0 2.843.319 3.591.953.75.636 1.086 1.724 1.086 3.27v2.934c0 .857.075 1.575.147 2.17.072.593.19 1.045.276 1.48h-3.77c-.057-.218-.105-.287-.139-.485a5.602 5.602 0 01-.075-.533 3.27 3.27 0 01-.43.44c-.17.152-.375.29-.61.419a3.608 3.608 0 01-1.769.43" id="Fill-20" class="letter"/><path d="M103.97 36.955c.541 0 .957-.213 1.243-.64.285-.432.426-1.11.426-2.037 0-.874-.13-1.514-.395-1.93-.264-.413-.639-.622-1.125-.622-.2 0-.374.028-.524.086a1.87 1.87 0 00-.407.215c-.12.086-.266.17-.353.257-.084.085-.014.157-.231.215v3.942c.217.128.355.247.555.353.198.109.495.16.81.16zm-5.062-8.032h3.696v1.175c.217-.371.669-.686 1.112-.943.443-.257 1.01-.386 1.712-.386 1.37 0 2.427.476 3.17 1.425.742.95 1.115 2.32 1.115 4.106 0 .84-.118 1.605-.354 2.291-.237.687-.564 1.269-.986 1.746-.423.48-.926.851-1.51 1.114a4.63 4.63 0 01-1.93.397c-.571 0-1.083-.068-1.453-.204a4.103 4.103 0 01-.876-.418v5.133h-3.696V28.923z" id="Fill-19" class="letter"/><path d="M84.472 30.153c.143-.17.31-.313.502-.476.195-.165.416-.307.665-.449.249-.142.533-.25.847-.336a4.152 4.152 0 011.093-.126c.728 0 1.31.14 1.747.42.434.278.751.668.952 1.168.473-.542.961-.943 1.467-1.2.508-.257 1.14-.385 1.897-.385.571 0 1.054.09 1.446.27.394.176.708.425.942.738.236.313.428.686.527 1.113.102.43.177.894.177 1.394v7.293h-3.913V33.1c0-.43-.06-.734-.189-.912-.128-.179-.357-.268-.683-.268a1.09 1.09 0 00-.748.268c-.208.178-.337.376-.554.59v6.799h-3.913V33.1c0-.43-.059-.734-.211-.912-.15-.179-.359-.268-.645-.268-.372 0-.653.103-.851.312-.2.207-.25.376-.467.502v6.843h-3.913V28.923h2.423c1.34 0 1.402 1.23 1.402 1.23" id="Fill-18" class="letter"/><path d="M73.588 37.063c.614 0 1.008-.233 1.177-.696.173-.466.258-1.132.258-2.005 0-.883-.103-1.58-.31-2.09-.206-.506-.618-.761-1.23-.761-.615 0-1.016.237-1.201.709-.187.472-.279 1.143-.279 2.013 0 .873.11 1.564.331 2.07.223.507.64.76 1.254.76m-.064 2.786c-.943 0-1.764-.149-2.464-.45-.7-.301-1.282-.702-1.746-1.21a5.023 5.023 0 01-1.04-1.758 6.33 6.33 0 01-.342-2.07c0-.728.115-1.426.342-2.099a5.088 5.088 0 011.04-1.779 5.175 5.175 0 011.746-1.242c.7-.313 1.521-.471 2.464-.471.943 0 1.763.148 2.463.451.699.3 1.28.7 1.746 1.198.463.5.811 1.078 1.04 1.736.228.658.341 1.352.341 2.078 0 .717-.113 1.41-.341 2.082a5.311 5.311 0 01-1.028 1.788c-.459.521-1.041.943-1.748 1.264-.706.321-1.53.482-2.473.482" id="Fill-17" class="letter"/><path d="M62.618 39.848c-1.3 0-2.425-.204-3.374-.612-.95-.407-1.736-.949-2.356-1.625a6.698 6.698 0 01-1.395-2.358 8.602 8.602 0 01-.46-2.796c0-.974.158-1.906.472-2.799a6.636 6.636 0 011.425-2.355c.635-.68 1.437-1.222 2.4-1.63.963-.407 2.089-.61 3.373-.61.944 0 1.783.1 2.519.3.735.199 1.397.494 1.983.879l-1.758 2.957a6.34 6.34 0 00-1.21-.558c-.423-.142-.954-.215-1.598-.215-.528 0-.995.097-1.403.291-.407.19-.75.46-1.028.803a3.515 3.515 0 00-.631 1.23 5.47 5.47 0 00-.216 1.576c0 .603.07 1.157.205 1.66.135.508.342.946.62 1.31.28.362.625.65 1.04.856.414.207.9.31 1.456.31.772 0 1.386-.11 1.844-.332.457-.22.849-.446 1.178-.672l1.627 2.825c-.184.159-.434.33-.748.516a7.387 7.387 0 01-1.082.514 8.717 8.717 0 01-1.35.387 7.805 7.805 0 01-1.533.148" id="Fill-16" class="letter"/><path id="Fill-15" class="letter" d="M98.908 5.445h3.913V14.1l2.626-3.655h4.114l-3.557 4.694 3.557 5.74h-4.392l-2.348-4.186v4.187h-3.913z"/><path d="M90.245 11.612c.158-.17.335-.359.536-.53.2-.172.436-.335.707-.479.272-.142.574-.26.91-.347.334-.085.711-.13 1.127-.13.598 0 1.102.089 1.508.268.408.176.737.424.987.738.25.313.431.686.544 1.113.116.428.17.893.17 1.393v7.242h-3.913V14.45c0-.428-.053-.731-.216-.91-.165-.178-.418-.268-.788-.268-.372 0-.63.112-.886.333-.257.22-.501.397-.501.525v6.749h-3.914V10.445h2.246c1.406 0 1.483 1.167 1.483 1.167" id="Fill-23" class="letter"/><path d="M80.212 20.88h3.913V10.445h-3.913V20.88zm1.901-11.514c-.622 0-1.126-.2-1.517-.6a1.97 1.97 0 01-.577-1.415c0-.542.192-1.01.577-1.404.39-.394.895-.59 1.517-.59.625 0 1.132.196 1.518.59.388.393.581.862.581 1.404 0 .543-.193 1.014-.58 1.414-.387.4-.894.6-1.519.6z" id="Fill-13" class="letter" /><path d="M67.604 5.445h3.695v6.02c.218-.143.367-.294.567-.45.2-.157.454-.305.711-.44.257-.136.563-.247.892-.333a4.487 4.487 0 011.12-.127c.6 0 1.105.089 1.512.268.408.178.74.423.988.738.25.315.438.684.552 1.115.115.428.18.894.18 1.392v7.252h-3.913v-6.438c0-.427-.06-.731-.223-.91-.165-.177-.422-.268-.792-.268-.373 0-.734.11-.99.332-.258.222-.386.396-.604.525v6.759h-3.695V5.445z" id="Fill-11" class="letter" /><path id="Fill-24" class="letter" d="M147.202 29.254h-.462v-.338h1.34v.338h-.464v1.362h-.414z"/><path d="M21.52 40.062c-.498-2.274-3.223-3.582-6.087-2.922-2.863.662-4.78 3.048-4.28 5.323.5 2.278 3.227 3.584 6.088 2.921 2.863-.661 4.78-3.042 4.28-5.322" id="Fill-1" class="bubble"/><path d="M22.447 45.104c-1.63.377-2.721 1.734-2.435 3.029.283 1.294 1.837 2.041 3.467 1.666 1.631-.376 2.72-1.736 2.435-3.033-.284-1.292-1.837-2.042-3.467-1.662" id="Fill-3" class="bubble"/><path d="M40.246 22.619h-3.04l-1.776-2.952v2.952H32.82V11.967h2.609v5.905l1.97-2.645h2.846l-2.461 3.333 2.461 4.059zm-8.73 0h-2.608v-4.51c0-.296-.039-.506-.152-.629-.114-.124-.29-.185-.547-.185a.965.965 0 00-.653.23c-.179.153-.387.273-.387.363v4.73H24.56v-7.39h1.59c.85 0 .971.863.971.863.11-.119.233-.221.372-.34.137-.119.3-.22.488-.318.188-.099.398-.173.631-.234.231-.058.49-.086.778-.086.415 0 .763.063 1.045.186.282.124.509.295.682.511.173.22.25.476.33.773.079.296.07.618.07.964v5.072zm-8.54-8.438c-.268.277-.618.416-1.05.416-.432 0-.782-.139-1.05-.416a1.357 1.357 0 01-.401-.978c0-.377.133-.7.402-.973.267-.272.617-.408 1.05-.408.431 0 .781.136 1.049.408.267.273.4.596.4.973 0 .375-.133.702-.4.978zm-2.329 8.438h2.609v-7.392h-2.609v7.392zm-1.304 0h-2.609v-4.51c0-.296-.08-.506-.195-.629-.113-.124-.311-.185-.567-.185a.886.886 0 00-.622.23c-.179.153-.355.273-.355.363v4.73h-2.826V11.968h2.826v4.082c0-.098.18-.202.319-.312a3 3 0 01.457-.303 2.791 2.791 0 011.365-.319c.415 0 .76.062 1.043.185.28.124.507.295.681.511a2.1 2.1 0 01.371.772c.079.297.112.618.112.964v5.072zm-8.623.028c-.341.09-.764.133-1.268.133-.525 0-.959-.062-1.305-.186-.346-.122-.62-.295-.823-.518a1.929 1.929 0 01-.447-.8 4 4 0 01-.143-1.045v-3.047H5.647v-1.957h1.087v-1.956h2.609v1.956h1.739v1.957h-1.74v2.454c0 .355.087.61.18.763.095.153.28.23.517.23.218 0 .419-.028.581-.081a3.23 3.23 0 00.37-.142l.52 1.972a4.61 4.61 0 01-.79.267zM36.625 6.716C35.205 2.839 30.615 0 25.166 0c-3.995 0-7.525 1.525-9.687 3.869-.102-.003-.2-.008-.3-.008C6.793 3.86 0 9.63 0 16.755c0 4.235 2.406 7.995 6.124 10.344.52 4.453 4.906 7.933 10.24 7.933 1.285 0 2.515-.206 3.649-.573 2.057 1.27 4.557 2.02 7.258 2.02 6.14 0 11.263-3.866 12.412-8.993 3.795-1.807 6.406-5.56 6.406-9.902 0-5.429-4.084-9.94-9.464-10.868z" id="Fill-6" class="bubble"/></g></g></g></svg>
      <span class="tco-accessibly-hidden">ThinkCompany</span>
    </a>

    <nav class="tco-site-nav">
      <button id="menu-toggle" class="tco-site-header-toggle tco-site-header-toggle--open">
        <svg class="tco-site-header-toggle-icon" width="22" height="14" viewBox="0 0 22 14">
          <title data-mobile-menu-title="">Open Mobile Navigation</title>
          <use xlink:href="/img/icons.svg#icon-hamburger"></use>
        </svg>
      </button>

      <div class="tco-site-nav-wrapper">
        <div class="tco-site-nav-container">

          <div class="tco-global-search">
            <form role="search" method="get" id="searchform" class="tco-search-form tco-search-form--global" action="">
              <div class="tco-form-row tco-form-row--search-row">
                <label class="tco-accessibly-hidden" for="s">Search for:</label>
                <input class="tco-form-input" type="search" value="" placeholder="Search" name="s" id="s" placeholder="Search"/>
                <input type="submit" id="searchsubmit" value="Search" hidden/>
                <input type="hidden" name="search-type" value="global"/>
              </div>
            </form>
            <button id="search-close" class="tco-site-header-toggle tco-search-close tco-search-close--closed">
              <svg class="tco-global-search--close" width="22" height="22">
                <title data-mobile-menu-title="">Close Search</title>
                <use xlink:href="/img/icons.svg#icon-close"></use>
              </svg>
            </button>
          </div>

          <ul class="tco-site-nav-menu tco-site-nav-menu--primary">
            <li class="tco-site-nav-menu-item">
              <a class="tco-site-nav-link tco-link--dark-theme" href="/our-work/">Our Work</a>
            </li>
            <li class="tco-site-nav-menu-item current-menu-item">
              <a class="tco-site-nav-link tco-link--dark-theme" href="/services/">Services</a>
            </li>
            <li class="tco-site-nav-menu-item">
              <a class="tco-site-nav-link tco-link--dark-theme" href="/about/">About</a>
            </li>
            <li class="tco-site-nav-menu-item">
              <a class="tco-site-nav-link tco-link--dark-theme" href="/blog/">Blog</a>
            </li>
            <li class="tco-site-nav-menu-item">
              <a class="tco-site-nav-link tco-link--dark-theme" href="/careers/">Careers</a>
            </li>
            <li id="menu-item-5719" class="tco-site-nav-menu-item">
              <a class="tco-site-nav-link tco-link--dark-theme" href="/contact/">Contact</a>
            </li>
          </ul>

          <div class="tco-site-nav-menu-group">
            <p class="tco-type-eyebrow">More</p>
            <ul class="tco-site-nav-menu tco-site-nav-menu--secondary">
              <li class="tco-site-nav-menu-item">
                <a class="tco-site-nav-link tco-link--dark-theme" href="/events/">Events</a>
              </li>
              <li class="tco-site-nav-menu-item">
                <a class="tco-site-nav-link tco-link--dark-theme" href="/news/">News</a>
              </li>
            </ul>
            <p class="tco-type-eyebrow">Social</p>
            <ul class="tco-site-nav-menu tco-site-nav-menu--secondary">
              <li class="tco-site-nav-menu-item"><a class="tco-site-nav-link tco-link--dark-theme tco-link--dark-theme" href="#">Linkedin</a>
              <li class="tco-site-nav-menu-item"><a class="tco-site-nav-link tco-link--dark-theme" href="#">X</a>
              <li class="tco-site-nav-menu-item"><a class="tco-site-nav-link tco-link--dark-theme" href="#">Instagram</a>
              <li class="tco-site-nav-menu-item"><a class="tco-site-nav-link tco-link--dark-theme" href="#">YouTube</a>
              <li class="tco-site-nav-menu-item"><a class="tco-site-nav-link tco-link--dark-theme" href="#">Facebook</a>
              </li>
            </ul>
          </div>

          <button id="search-open" class="tco-site-header-toggle tco-site-header-toggle--search">
            <svg class="tco-site-header-toggle-icon--search" width="22" height="22" viewbox="0 0 22 22">
              <title data-mobile-menu-title="">Open Search Field</title>
              <use xlink:href="/img/icons.svg#icon-search-magnifying"></use>
            </svg>
          </button>

          <button id="menu-toggle-close" class="tco-site-header-toggle tco-site-header-toggle--close tco-site-header-toggle--hide">
            <svg class="tco-site-header-toggle-icon tco-site-header-toggle-icon--close" width="22" height="22">
              <title data-mobile-menu-title="">Close Mobile Navigation</title>
              <use xlink:href="/img/icons.svg#icon-close"></use>
            </svg>
          </button>

        </div>
      </div>
    </nav>
  </div>
</header>
<div class="tco-container-wrapper">
  <div class="tco-container" style="margin-top:5em;">
    <div class="tco-component">
      <a href="#" class="tco-text-only-cta">Learn more</a>
    </div>
  </div>
</div>
  </div>
  `;
};

export default {
  title: 'Global / Header'
};
