document.addEventListener('DOMContentLoaded', () => {
  const tabs = document.querySelectorAll('.tco-tab-control');
  const tabControls = document.querySelector('.tco-tab-controls');
  const tabPanels = document.querySelectorAll('.tco-tab-panel');
  const selectedTab = document.querySelector('.tco-tab-control--selected');
  const selectedText = document.querySelector('.tco-tab-selected-text');

  // handle tab functionality
  const setActiveTab = id => {
    for (let tab of tabs) {
      if (tab.getAttribute('aria-controls') == id) {
        tab.setAttribute('aria-selected', 'true');
        tab.classList.add('tco-tab-control--active');
        tab.focus();
      } else {
        tab.setAttribute('aria-selected', 'false');
        tab.classList.remove('tco-tab-control--active');
      }
    }

    for (let tabPanel of tabPanels) {
      if (tabPanel.getAttribute('id') == id) {
        tabPanel.setAttribute('aria-expanded', 'true');
        tabPanel.classList.add('tco-tab-panel--active');
      } else {
        tabPanel.setAttribute('aria-expanded', 'false');
        tabPanel.classList.remove('tco-tab-panel--active');
      }
    }
  };

  // set selected tab (mobile)
  const setSelected = text => {
    selectedText.innerHTML = text;
  };

  // set event listeners on tabs
  for (let tab of tabs) {
    tab.addEventListener('click', function (e) {
      e.preventDefault();
      let tabText = this.innerHTML;
      setActiveTab(this.getAttribute('aria-controls'));
      setSelected(tabText);
    });

    tab.addEventListener('keyup', function (e) {
      if (e.keyCode == 13 || e.keyCode == 32) {
        // return or space
        e.preventDefault();
        let tabText = this.innerHTML;
        setActiveTab(this.getAttribute('aria-controls'));
        setSelected(tabText);
      }
    });
  }

  // toggle selected tab
  if (selectedTab) {
    selectedTab.addEventListener('click', function () {
      if (selectedTab.classList.contains('tco-tab-control--selected-open')) {
        selectedTab.classList.remove('tco-tab-control--selected-open');
        tabControls.classList.remove('tco-tab-controls--expanded');
      } else {
        selectedTab.classList.add('tco-tab-control--selected-open');
        tabControls.classList.add('tco-tab-controls--expanded');
      }
    });
  }
});
