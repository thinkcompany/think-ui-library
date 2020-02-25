import React from 'react';

const config = [
  {
    name: 'Card Style 1',
    class: 'card-style-1',
    sass: '@include card-style-1'
  },
  {
    name: 'Card Style 2',
    class: 'card-style-2',
    sass: '@include card-style-2'
  }
];

const wrapGrid = input => (
  <div className="documentation-grid--large">{input}</div>
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
const sassBlock = input =>
  input.sass ? (
    <p>
      <code>{input.sass}</code>
    </p>
  ) : null;
const cardItem = input => (
  <div className="documentation-block documentation-card">
    <div className="card-block">
      <div className={input.class}>
        <div className="content"></div>
      </div>
    </div>
    <footer>
      {nameBlock(input)}
      {classBlock(input)}
      {sassBlock(input)}
    </footer>
  </div>
);
export const all = () => wrapGrid(config.map(item => cardItem(item)));
export default {
  title: 'Primitives / Cards'
};
