export default class Nav {
  constructor() {
    this.$mobileMenuBtn;
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
    var focusableEls = element.querySelectorAll(
      'a[href]:not([disabled]), button:not([disabled]), textarea:not([disabled]), input[type="text"]:not([disabled]), input[type="radio"]:not([disabled]), input[type="checkbox"]:not([disabled]), select:not([disabled])'
    );
    var firstFocusableEl = focusableEls[0];
    var lastFocusableEl = focusableEls[focusableEls.length - 1];
    var KEYCODE_TAB = 9;

    element.addEventListener('keydown', function (e) {
      var isTabPressed = e.key === 'Tab' || e.keyCode === KEYCODE_TAB;

      if (!isTabPressed) {
        return;
      }

      if (e.shiftKey) {
        /* shift + tab */ if (document.activeElement === firstFocusableEl) {
          lastFocusableEl.focus();
          e.preventDefault();
        }
      } /* tab */ else {
        if (document.activeElement === lastFocusableEl) {
          firstFocusableEl.focus();
          e.preventDefault();
        }
      }
    });
  }

  setupEventHandler() {
    const wrapper = this.$wrapper;
    const container = this.$container;
    const menu = this.$menu;
    const menuClone = menu.cloneNode(true);

    let menuOpen = false;

    menuClone.classList.add('tco-site-nav-menu--primary-clone');
    this.$mobileMenuBtn.before(menuClone);

    this.$mobileMenuBtn.addEventListener(
      'click',
      () => {
        menuOpen = !menuOpen;
        this.$body.classList.toggle('tco-body--freeze');
        this.$mobileMenuBtn.classList.toggle('tco-site-header-toggle--open');
        this.$siteNav.classList.toggle('tco-site-nav--open');
        this.$logo.classList.toggle('tco-site-header-logo--open');

        if (menuOpen === true) {
          container.prepend(menu);
          this.trapFocus(this.$container);
        } else {
          wrapper.before(menu);
        }
      },
      false
    );
  }

  init() {
    document.addEventListener('DOMContentLoaded', () => {
      this.$body = document.body;
      this.$mobileMenuBtn = document.querySelector('#menu-toggle');
      this.$logo = document.querySelector('.tco-site-header-logo');
      this.$siteNav = document.querySelector('.tco-site-nav');
      this.$wrapper = document.querySelector('.tco-site-nav-wrapper');
      this.$container = document.querySelector('.tco-site-nav-container');
      this.$menu = document.querySelector('.tco-site-nav-menu--primary');

      if (this.$mobileMenuBtn) {
        this.setupEventHandler();
        this.menuLocation();
      }
    });
  }
}
