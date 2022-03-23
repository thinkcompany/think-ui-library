const Template = args => {
  const { tabA, tabB, tabC, tabAContent, tabBContent, tabCContent } = args;

  return `
    <div class="tco-container-wrapper">
      <div class="tco-container">
        <div class="tco-tab-group">
          <ul class="tco-tab-controls" role="tablist">
            <li class="tco-tab-control tco-tab-control--active" role="tab" aria-controls="tab-1" tabindex="0" aria-selected="true">${tabA}</li>
            <li class="tco-tab-control" role="tab" aria-controls="tab-2" tabindex="0" aria-selected="false">${tabB}</li>
            <li class="tco-tab-control" role="tab" aria-controls="tab-3" tabindex="0" aria-selected="false">${tabC}</li>
          </ul>
          <main class="tco-tab-group-content">
            <div id="tab-1" class="tco-tab-panel tco-tab-panel--active" role="tabpanel" aria-expanded="true">
              <h3 class="tco-type-display--small">${tabA}</h3>
              <p>${tabAContent}</p>
            </div>
            <div id="tab-2" class="tco-tab-panel" role="tabpanel" aria-expanded="false">
              <h3 class="tco-type-display--small">${tabB}</h3>
              <p>${tabBContent}</p>
            </div>
            <div id="tab-3" class="tco-tab-panel" role="tabpanel" aria-expanded="false">
              <h3 class="tco-type-display--small">${tabC}</h3>
              <p>${tabCContent}</p>
            </div>
          </main>
        </div>
      </div>
    </div>
    `;
};

export const Tabs = Template.bind({});

export default {
  title: 'Components / Tabs',
  component: Tabs,
  args: {
    tabA: 'Tab A',
    tabB: 'Tab B',
    tabC: 'Tab C',
    tabAContent: 'Tab A content',
    tabBContent: 'Tab B content',
    tabCContent: 'Tab C content'
  }
};
