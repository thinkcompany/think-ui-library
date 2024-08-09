const Template = args => {
  const { labelA, labelB, labelC } = args;

  return `
  <div class="tco-container-wrapper">
    <div class="tco-container tco-container--narrow">
      <div class="tco-venn-diagram">
        <div class="tco-venn-diagram--circle tco-venn-diagram--circle-a">
          <p class="tco-venn-diagram--label">${labelA}</p>
        </div>
        <div class="tco-venn-diagram--circle tco-venn-diagram--circle-b">
          <p class="tco-venn-diagram--label">${labelB}</p>
        </div>
        <div class="tco-venn-diagram--circle tco-venn-diagram--circle-c">
          <p class="tco-venn-diagram--label">${labelC}</p>
        </div>
      </div>
    </div>
  </div>`;
};

export const VennDiagram = Template.bind({});

export default {
  title: 'Components / Venn Diagram',
  args: {
    labelA: 'Strategy',
    labelB: 'Creation',
    labelC: 'Growth'
  },
  argTypes: {
    labelA: {
      name: 'Circle A',
      control: 'text'
    },
    labelB: {
      name: 'Circle B',
      control: 'text'
    },
    labelC: {
      name: 'Circle C',
      control: 'text'
    }
  }
};
