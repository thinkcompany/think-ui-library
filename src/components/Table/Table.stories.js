const alignmentOptions = ['left', 'center'];

const randomNumber = (min, max) => {
  min = Math.ceil(min);
  max = Math.floor(max);

  return Math.floor(Math.random() * (max - min) + min);
};

const Template = args => {
  const { cols, rows, caption, alignment, headers } = args;

  const tableCols = () => {
    let col = `<th scope="col">Col header</th>`;

    let output = '';

    if (!headers) {
      col = `<td scope="col">${randomNumber(0, 10)}</td>`;
    }

    for (let i = 0; i < cols; i++) {
      output += col;
    }

    return output;
  };

  const tableRows = () => {
    let cellOutput = '';

    let output = '';

    for (let i = 0; i < cols; i++) {
      cellOutput += `<td>${randomNumber(0, 10)}</td>`;
    }

    for (let i = 0; i < rows; i++) {
      output += `<tr scope="row">${cellOutput}</tr>`;
    }

    return output;
  };

  return `
    <div class="tco-post-body">
      <div class="tco-container-wrapper">
        <div class="tco-container tco-container--narrow">
          <div class="tco-table-container tco-table-container--${alignment}">
            <table class="tco-table">
              <caption class="tco-type-body--sans-small">${caption}</caption>
              <tbody>
                <tr>
                  ${tableCols()}
                </tr>
                ${tableRows()}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  `;
};

export const Table = Template.bind({});

export default {
  title: 'Components / Table',
  component: Table,
  parameters: {
    componentSubtitle:
      "The Table component can be used within the site's flexible content container, and can also be inserted into a post with the [insert_table] shortcode."
  },
  args: {
    caption: 'A succinct statement about this table',
    alignment: alignmentOptions[1],
    headers: true,
    cols: 7,
    rows: 4
  },
  argTypes: {
    caption: {
      name: 'caption',
      control: 'text',
      description:
        'A brief, succinct statement summarizing the table is considered best practice for accessibility',
      table: {
        type: { summary: 'text' }
      }
    },
    alignment: {
      name: 'alignment',
      control: 'inline-radio',
      options: alignmentOptions
    },
    headers: {
      name: 'column headers?',
      control: 'boolean'
    },
    cols: {
      name: 'number of columns',
      control: 'number'
    },
    rows: {
      name: 'number of rows',
      control: 'number'
    }
  }
};
