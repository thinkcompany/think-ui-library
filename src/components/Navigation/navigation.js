export default class Nav {
  constructor() {
    this.$mobileMenuBtn;
    this.$mobileMenuBtnClose;
    this.$siteNav;
    this.$logo;
    this.$body;
    this.$wrapper;
    this.$container;
    this.$menu;
  }

  menuLocation() {
    const vw = this.$body.clientWidth;
    const container = this.$container;

    const menu = this.$menu;

    if (vw < 1280) {
      container.prepend(menu);
    }
  }

  trapFocus(element) {
    const focusableEls = element.querySelectorAll(
      'a[href]:not([disabled]), button:not([disabled]), textarea:not([disabled]), input[type="text"]:not([disabled]), input[type="radio"]:not([disabled]), input[type="checkbox"]:not([disabled]), select:not([disabled])'
    );
    const firstFocusableEl = focusableEls[0];
    const lastFocusableEl = focusableEls[focusableEls.length - 1];
    const KEYCODE_TAB = 9;

    element.addEventListener('keydown', function (e) {
      const isTabPressed = e.key === 'Tab' || e.keyCode === KEYCODE_TAB;

      if (!isTabPressed) {
        return;
      }

      if (e.shiftKey) {
        /* shift + tab */ if (document.activeElement === firstFocusableEl) {
          lastFocusableEl.focus();
          e.preventDefault();
        }
      } /* tab */ else if (document.activeElement === lastFocusableEl) {
        firstFocusableEl.focus();
        e.preventDefault();
      }
    });
  }

  setupEventHandler() {
    const container = this.$container;
    const siteNav = this.$siteNav;
    const menu = this.$menu;

    this.$mobileMenuBtn.addEventListener('click', () => {
      this.$body.classList.add('tco-body--freeze');
      this.$mobileMenuBtnClose.classList.remove('tco-site-header-toggle--hide');
      this.$mobileMenuBtn.classList.add('tco-site-header-toggle--hide');
      this.$siteNav.classList.add('tco-site-nav--open');
      this.$logo.classList.add('tco-site-header-logo--open');

      //container.prepend(menu);
      this.trapFocus(this.$container);
    });

    this.$mobileMenuBtnClose.addEventListener('click', () => {
      this.$body.classList.remove('tco-body--freeze');
      this.$mobileMenuBtnClose.classList.add('tco-site-header-toggle--hide');
      this.$mobileMenuBtn.classList.remove('tco-site-header-toggle--hide');
      this.$siteNav.classList.remove('tco-site-nav--open');
      this.$logo.classList.remove('tco-site-header-logo--open');

      //siteNav.prepend(menu);
    });
  }

  init() {
    document.addEventListener('DOMContentLoaded', () => {
      this.$body = document.body;
      this.$mobileMenuBtn = document.querySelector('#menu-toggle');
      this.$mobileMenuBtnClose = document.querySelector('#menu-toggle-close');
      this.$logo = document.querySelector('.tco-site-header-logo');
      this.$siteNav = document.querySelector('.tco-site-nav');
      this.$wrapper = document.querySelector('.tco-site-nav-wrapper');
      this.$container = document.querySelector('.tco-site-nav-container');
      this.$menu = document.querySelector('.tco-site-nav-menu--primary');

      if (this.$mobileMenuBtn) {
        this.setupEventHandler();
        //this.menuLocation();
      }
    });
  }
}
