import React from 'react';

const config = [
  {
    name: 'Grid Layout 1',
    class: 'grid-layout-1',
    columns: 12
  },
  {
    name: 'Grid Layout 2',
    class: 'grid-layout-2',
    columns: 2
  },
  {
    name: 'Grid Layout 3',
    class: 'grid-layout-3',
    columns: 3
  }
];

const wrapGrid = input => (
  <div className="documentation-grid--list">{input}</div>
);
const nameBlock = input =>
  input.name ? (
    <p>
      <strong>{input.name}</strong>
    </p>
  ) : null;
const classBlock = input =>
  input.class ? (
    <p>
      <code>.{input.class}</code>
    </p>
  ) : null;
const columnBlock = input => {
  return Array(input.columns)
    .fill(null)
    .map((_, i) => (
      <div key={i} className="grid-content">
        content
      </div>
    ));
};
const gridItem = input => (
  <div key={input.class} className="documentation-block documentation-grid">
    <div className="grid-block">
      <div className={input.class}>{columnBlock(input)}</div>
    </div>
    <footer>
      {nameBlock(input)}
      {classBlock(input)}
    </footer>
  </div>
);
export const all = () => wrapGrid(config.map(gridItem));
export default {
  title: 'Primitives / Grids'
};
