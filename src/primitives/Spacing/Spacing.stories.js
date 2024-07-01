import spacing from '../../../tokens/spacing.json';

const wrapGrid = input => {
  return `<div class="documentation-grid--large">${input}</div>`;
};
const insetItem = input => `
<div class="documentation-grid--item documentation-spacing--internal documentation-block">
    <div class="spacing-block" style="padding: ${input}px;">
    <div class="content"></div>
    </div>
    <div class="doc-footer">
    <p><strong>Inset ${input}</strong></p>
    <p><code>@include spacing-inset-${input}</code></p>
    </div>
</div>`;
const squishItem = input => `
<div class="documentation-grid--item documentation-spacing--internal documentation-block">
    <div class="spacing-block" style="padding: ${input.y}px ${input.x}px;">
    <div class="content"></div>
    </div>
    <div class="doc-footer">
    <p><strong>Squish ${input.y}</strong></p>
    <p><code>@include spacing-squish-${input.y}</code></p>
    </div>
</div>`;
const stackItem = input => `
<div class="documentation-grid--item documentation-spacing--external documentation-block">
    <div class="spacing-block--stack">
        <div class="content" style="margin-bottom: ${input}px;"></div>
        <div class="content"></div>
    </div>
    <div class="doc-footer">
        <p><strong>Stack ${input}</strong></p>
        <p><code>$spacing-stack-${input}</code></p>
    </div>
</div>`;
const inlineItem = input => `
<div class="documentation-grid--item documentation-spacing--external documentation-block">
    <div class="spacing-block--inline">
        <div class="content" style="margin-right: ${input}px;"></div>
        <div class="content"></div>
    </div>
    <div class="doc-footer">
        <p><strong>Inline ${input}</strong></p>
        <p><code>$spacing-inline-${input}</code></p>
    </div>
</div>`;

export const Inset = () => wrapGrid(spacing.inset.map(item => insetItem(item)).join(''));
export const Squish = () => wrapGrid(spacing.squish.map(item => squishItem(item)).join(''));
export const Stack = () => wrapGrid(spacing.stack.map(item => stackItem(item)).join(''));
export const Inline = () => wrapGrid(spacing.inline.map(item => inlineItem(item)).join(''));

Inset.parameters = {
  controls: { hideNoControlsWarning: true }
};
Squish.parameters = {
  controls: { hideNoControlsWarning: true }
};
Stack.parameters = {
  controls: { hideNoControlsWarning: true }
};
Inline.parameters = {
  controls: { hideNoControlsWarning: true }
};

export default {
  title: 'Primitives / Spacing'
};
