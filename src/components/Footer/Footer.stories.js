import { SocialIconsSmall as icons } from '../SocialIcons/social-icons.stories';

export const Footer = () => {
  return `
  <div class="tco-container-wrapper tco-container-wrapper--curve tco-container-wrapper--footer tco-container-wrapper--navy" style="margin-top: 10em;">
    <div class="tco-container">
      <div class="tco-site-footer">
        <div class="tco-site-footer-content">
          <p class="tco-site-footer-heading">Our Offices</p>
          <ul>
            <li class="tco-site-footer-cta">
              <a href="#" class="tco-link-cta">
              Philadelphia
              <svg class="tco-text-link-icon" width="20" height="20" viewBox="0 0 20 20" role="presentation">
                <use xlink:href="/img/icons.svg#icon-arrow-right"></use>
              </svg>
              </a>
            </li>
            <li class="tco-site-footer-cta">
              <a href="#" class="tco-link-cta">
              Conshohocken
              <svg class="tco-text-link-icon" width="20" height="20" viewBox="0 0 20 20" role="presentation">
                <use xlink:href="/img/icons.svg#icon-arrow-right"></use>
              </svg>
              </a>
            </li>
          </ul>
        </div>
        <div class="tco-site-footer-content">
          <p class="tco-site-footer-heading">Explore More</p>
          <ul class="tco-site-footer-menu tco-menu">
            <li class="tco-menu-item"><a href="#" class="tco-menu-item-link">Work</a></li>
            <li class="tco-menu-item"><a href="#" class="tco-menu-item-link">Blog</a></li>
            <li class="tco-menu-item"><a href="#" class="tco-menu-item-link">Services</a></li>
            <li class="tco-menu-item"><a href="#" class="tco-menu-item-link">Events</a></li>
            <li class="tco-menu-item"><a href="#" class="tco-menu-item-link">Process</a></li>
            <li class="tco-menu-item"><a href="#" class="tco-menu-item-link">Careers</a></li>
            <li class="tco-menu-item"><a href="#" class="tco-menu-item-link">About</a></li>
            <li class="tco-menu-item"><a href="#" class="tco-menu-item-link">Latest News</a></li>
            <li class="tco-menu-item"><a href="#" class="tco-menu-item-link">Team</a></li>
            <li class="tco-menu-item"><a href="#" class="tco-menu-item-link">Contact</a></li>
        </div>
        <div class="tco-site-footer-content">
          <p class="tco-site-footer-heading">Upcoming Event</p>
          <h5 class="tco-site-footer-post tco-site-footer-cta">
            <a href="#">
              Putting Humanity at the Center of Design
              <svg class="tco-text-link-icon" width="20" height="20" viewBox="0 0 20 20" role="presentation">
                <use xlink:href="/img/icons.svg#icon-arrow-right"></use>
              </svg>
            </a>
          </h5>
          <p class="tco-site-footer-post-meta">February 14, 2021</p>
        </div>
        <div class="tco-site-footer-content tco-site-footer-content--full">
          <div class="tco-site-footer-content-group tco-site-footer-content-group--icons">
            <svg class="tco-site-footer-logo" width="151" height="50" role="img" aria-label="Think Company logo">
              <use xlink:href="/img/icons.svg#icon-think-logo"></use>
            </svg>
            ${icons()}
            <div class="tco-clutch-widget">
              <div class="tco-clutch-widget-container">
                <script type="text/javascript" src="https://widget.clutch.co/static/js/widget.js" async></script>
                <div class="clutch-widget" data-url="https://widget.clutch.co" data-widget-type="1" data-height="40" data-theme="white" data-clutchcompany-id="35649"></div>
              </div>
            </div>
          </div>
          <div class="tco-site-footer-content-group tco-site-footer-content-group--fine-print">
            <p>&copy; 2021 Think Company, Inc. All rights reserved. <a class="tco-btn-link" href="#"> Privacy Policy</a></p>
          </div>
        </div>
      </div>
    </div>
  </div>
  `;
};

Footer.parameters = {
  controls: { hideNoControlsWarning: true }
};

export default {
  title: 'Global / Footer'
};
