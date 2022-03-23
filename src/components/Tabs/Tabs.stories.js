const Template = args => {
  const { tabA, tabB, tabC, tabAContent, tabBContent, tabCContent } = args;

  return `
    <div class="tco-container-wrapper">
      <div class="tco-container">
        <div class="tco-tab-group">
          <ul class="tco-tab-controls" aria-controls="tab-example" role="tablist">
            <li class="tco-tab-control" role="tab" aria-controls="tab-1" tabindex="0" aria-selected="true">${tabA}</li>
            <li class="tco-tab-control" role="tab" aria-controls="tab-2" tabindex="0" aria-selected="false">${tabB}</li>
            <li class="tco-tab-control" role="tab" aria-controls="tab-3" tabindex="0" aria-selected="false">${tabC}</li>
          </ul>
          <main class="tco-tab-group-content">
            <div id="tab-1" role="tabpanel" aria-expanded="true">
              <p>${tabAContent}</p>
            </div>
            <div id="tab-2" role="tabpanel" aria-expanded="false">
              <p>${tabBContent}</p>
            </div>
            <div id="tab-3" role="tabpanel" aria-expanded="false">
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
    tabA: 'Tab A Heading',
    tabB: 'Tab B Heading',
    tabC: 'Tab C Heading',
    tabAContent: 'Tab A content',
    tabBContent: 'Tab B content',
    tabCContent: 'Tab C content'
  }
  // argTypes: {
  //   textAlignment: {
  //     name: 'text alignment',
  //     control: 'inline-radio',
  //     options: alignments
  //   },
  //   headingSize: {
  //     name: 'heading size',
  //     control: 'inline-radio',
  //     options: sizes
  //   },
  //   ledeContainer: {
  //     name: 'lede container',
  //     control: 'inline-radio',
  //     options: containerSizes
  //   },
  //   ledeSize: {
  //     name: 'lede size',
  //     control: 'inline-radio',
  //     options: ledeSizes
  //   },
  //   bubble: {
  //     name: 'bubble background'
  //   },
  //   showCta: {
  //     name: 'show cta'
  //   }
  // }
};
