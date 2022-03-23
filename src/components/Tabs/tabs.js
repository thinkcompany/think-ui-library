document.addEventListener('DOMContentLoaded', () => {
  const container = document.querySelector('.tco-tab-group');
  const tabControls = document.querySelector('.tco-tab-controls');
  const tabs = document.querySelectorAll('.tco-tab-control');
  const tabPanels = document.querySelectorAll('.tco-tab-panel');

  // handle tab functionality
  const setActiveTab = id => {
    for (tab of tabs) {
      if (tab.getAttribute('aria-controls') == id) {
        tab.setAttribute('aria-selected', 'true');
        tab.classList.add('tco-tab-control--active');
        tab.focus();
      } else {
        tab.setAttribute('aria-selected', 'false');
        tab.classList.remove('tco-tab-control--active');
      }
    }

    for (tabPanel of tabPanels) {
      if (tabPanel.getAttribute('id') == id) {
        tabPanel.setAttribute('aria-expanded', 'true');
        tabPanel.classList.add('tco-tab-panel--active');
      } else {
        tabPanel.setAttribute('aria-expanded', 'false');
        tabPanel.classList.remove('tco-tab-panel--active');
      }
    }
  };

  // set event listeners on tabs
  for (tab of tabs) {
    tab.addEventListener('click', function (e) {
      e.preventDefault();
      setActiveTab(this.getAttribute('aria-controls'));
    });

    tab.addEventListener('keyup', function (e) {
      if (e.keyCode == 13 || e.keyCode == 32) {
        // return or space
        e.preventDefault();
        setActiveTab(this.getAttribute('aria-controls'));
      }
    });
  }

  // set event listener on tab controls
  tabControls.addEventListener('keyup', function (e) {
    const activeTab = document.querySelector('.tco-tab-control--active');

    if (e.keyCode == 37) {
      // left arrow
      e.preventDefault();

      let previous = [...tabs].indexOf(activeTab) - 1;
      previous = previous >= 0 ? previous : tabs.length - 1;

      setActiveTab(tabs[previous].getAttribute('aria-controls'));
    }

    if (e.keyCode == 39) {
      // right arrow
      e.preventDefault();

      let next = [...tabs].indexOf(activeTab) + 1;
      next = next >= 0 ? next : tabs.length + 1;

      setActiveTab(tabs[next].getAttribute('aria-controls'));
    }
  });
});
