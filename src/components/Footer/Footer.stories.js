import { SocialIconsSmall as icons } from '../SocialIcons/social-icons.stories';

export const Footer = () => {
  return `
    <footer id="footer" class="tco-footer">
      <div class="tco-container-wrapper tco-container-wrapper--footer" style="margin-top: 10em;">
        <div class="tco-container">
          <div class="tco-site-footer">
            <div class="tco-site-footer-content">
              <p class="tco-site-footer-heading">Expertise across complex industries</p>
              <ul>
                <li class="tco-site-footer-cta tco-site-footer-cta--big-links">
                  <a href="#" class="tco-link-cta tco-link--dark-theme">
                  Financial Services
                  <svg class="tco-text-link-icon tco-text-link-icon--alt" width="20" height="20" viewBox="0 0 20 20" role="presentation">
                    <use xlink:href="/img/icons.svg#icon-arrow-right"></use>
                  </svg>
                  </a>
                </li>
                <li class="tco-site-footer-cta tco-site-footer-cta--big-links">
                  <a href="#" class="tco-link-cta tco-link--dark-theme">
                  Pharmaceuticals
                  <svg class="tco-text-link-icon tco-text-link-icon--alt" width="20" height="20" viewBox="0 0 20 20" role="presentation">
                    <use xlink:href="/img/icons.svg#icon-arrow-right"></use>
                  </svg>
                  </a>
                </li>
                <li class="tco-site-footer-cta tco-site-footer-cta--big-links">
                  <a href="#" class="tco-link-cta tco-link--dark-theme">
                  Telecommunications
                  <svg class="tco-text-link-icon tco-text-link-icon--alt" width="20" height="20" viewBox="0 0 20 20" role="presentation">
                    <use xlink:href="/img/icons.svg#icon-arrow-right"></use>
                  </svg>
                  </a>
                </li>
                <li class="tco-site-footer-cta tco-site-footer-cta--big-links">
                  <a href="#" class="tco-link-cta tco-link--dark-theme">
                  Healthcare
                  <svg class="tco-text-link-icon tco-text-link-icon--alt" width="20" height="20" viewBox="0 0 20 20" role="presentation">
                    <use xlink:href="/img/icons.svg#icon-arrow-right"></use>
                  </svg>
                  </a>
                </li>
              </ul>
            </div>
            <div class="tco-site-footer-content">
              <p class="tco-site-footer-heading">Explore More</p>
              <ul class="tco-site-footer-menu tco-menu">
                <li class="tco-menu-item"><a href="#" class="tco-menu-item-link tco-link--dark-theme">Our Work</a></li>
                <li class="tco-menu-item"><a href="#" class="tco-menu-item-link tco-link--dark-theme">About</a></li>
                <li class="tco-menu-item"><a href="#" class="tco-menu-item-link tco-link--dark-theme">Services</a></li>
                <li class="tco-menu-item"><a href="#" class="tco-menu-item-link tco-link--dark-theme">Team</a></li>
                <li class="tco-menu-item"><a href="#" class="tco-menu-item-link tco-link--dark-theme">Process</a></li>
                <li class="tco-menu-item"><a href="#" class="tco-menu-item-link tco-link--dark-theme">Events</a></li>
                <li class="tco-menu-item"><a href="#" class="tco-menu-item-link tco-link--dark-theme">Guides</a></li>
                <li class="tco-menu-item"><a href="#" class="tco-menu-item-link tco-link--dark-theme">News</a></li>
                <li class="tco-menu-item"><a href="#" class="tco-menu-item-link tco-link--dark-theme">Blog</a></li>
                <li class="tco-menu-item"><a href="#" class="tco-menu-item-link tco-link--dark-theme">Careers</a></li>
                <li class="tco-menu-item"><a href="#" class="tco-menu-item-link tco-link--dark-theme">Alumni</a></li>
                <li class="tco-menu-item"><a href="#" class="tco-menu-item-link tco-link--dark-theme">Contact</a></li>

            </div>
            <div class="tco-site-footer-content">
              <p class="tco-site-footer-heading">Featured blog post</p>
              <h5 class="tco-site-footer-post tco-site-footer-cta">
                <a href="#" class="tco-link--dark-theme">
                  4 key priorities for  smart AI implementation in regulated industries
                  <svg class="tco-text-link-icon tco-text-link-icon--alt" width="20" height="20" viewBox="0 0 20 20" role="presentation">
                    <use xlink:href="/img/icons.svg#icon-arrow-right"></use>
                  </svg>
                </a>
              </h5>
              <p class="tco-site-footer-post-meta">March 7, 2024</p>
            </div>
            <div class="tco-site-footer-content tco-site-footer-content--full">
              <div class="tco-site-footer-content-group tco-site-footer-content-group--icons">
                <a href="/" class="tco-footer-link--think tco-site-footer-logo">
                  <svg class="" width="151" height="50" role="img" aria-label="Think Company logo">
                    <use xlink:href="/img/icons.svg#icon-think-logo"></use>
                  </svg>
                </a>
                <div class="tco-footer-badges">
                  <div class="tco-clutch-widget">
                    <div class="tco-clutch-widget-container">
                      <script type="text/javascript" src="https://widget.clutch.co/static/js/widget.js" async></script>
                      <div class="clutch-widget" data-url="https://widget.clutch.co" data-widget-type="1" data-height="40" data-theme="white" data-clutchcompany-id="35649"></div>
                    </div>
                  </div>
                  <a href="https://www.thinkcompany.com/news/usa-today-names-think-company-a-top-workplace/" class="tco-top-workplace-footer-logo">
                    <img src="/img/top-workplaces-2024.png" alt="Top Workplaces 2024 USA Today" width="38" height="50" />
                  </a>
                </div>
                ${icons()}

                <div class="tco-theme-toggle-container">
                  <input class="tco-form-toggle tco-theme-toggle" id="theme-toggle" type="checkbox" name="toggle-theme" value="" />
                  <label class="" for="theme-toggle">Dark Theme</label>
                </div>

              </div>
              <div class="tco-site-footer-content-group tco-site-footer-content-group--fine-print">
                <p>&copy; 2024 Think Company, Inc. All rights reserved. <span><a class="tco-btn-link tco-link--dark-theme" href="#"> Privacy policy</a>. <a class="tco-btn-link tco-link--dark-theme" href="#">Accessibility statement</a>.</span></p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  `;
};

Footer.parameters = {
  controls: { hideNoControlsWarning: true }
};

export default {
  title: 'Global / Footer'
};
