import React from 'react';
import spacing from 'spacing.json';

const wrapGrid = grid => {
  return grid.map(input => (
    <div key={input.x} className="documentation-grid--large">
      {input}
    </div>
  ));
};
const insetItem = input => (
  <div className="documentation-spacing--internal documentation-block">
    <div className="spacing-block" style={{ padding: input }}>
      <div className="content"></div>
    </div>
    <footer>
      <p>
        <strong>Inset {input}</strong>
      </p>
      <p>
        <code>@include spacing-inset-{input}</code>
      </p>
    </footer>
  </div>
);
const squishItem = input => (
  <div className="documentation-spacing--internal documentation-block">
    <div
      className="spacing-block"
      style={{ padding: `${input.y}px ${input.x}px` }}
    >
      <div className="content"></div>
    </div>
    <footer>
      <p>
        <strong>Inset {input.y}</strong>
      </p>
      <p>
        <code>@include spacing-inset-{input.y}</code>
      </p>
    </footer>
  </div>
);
const stackItem = input => (
  <div className="documentation-spacing--external documentation-block">
    <div className="spacing-block--stack">
      <div className="content" style={{ marginBottom: input }}></div>
      <div className="content"></div>
    </div>
    <footer>
      <p>
        <strong>Stack {input}</strong>
      </p>
      <p>
        <code>$spacing-stack-{input}</code>
      </p>
    </footer>
  </div>
);
const inlineItem = input => (
  <div className="documentation-spacing--external documentation-block">
    <div className="spacing-block--inline">
      <div className="content" style={{ marginRight: input }}></div>
      <div className="content"></div>
    </div>
    <footer>
      <p>
        <strong>Inline {input}</strong>
      </p>
      <p>
        <code>$spacing-inline-{input}</code>
      </p>
    </footer>
  </div>
);

export const inset = () => wrapGrid(spacing.inset.map(insetItem));
export const squish = () => wrapGrid(spacing.squish.map(squishItem));
export const stack = () => wrapGrid(spacing.stack.map(stackItem));
export const inline = () => wrapGrid(spacing.inline.map(inlineItem));
export default {
  title: 'Primitives / Spacing'
};
