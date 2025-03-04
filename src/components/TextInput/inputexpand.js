document.addEventListener('DOMContentLoaded', () => {
  const textField = document.querySelector('.tco-input--expand textarea');
  const textFieldJumbo = document.querySelector('.tco-input--expand-jumbo textarea');

  let initialHeight = 40;

  if (textFieldJumbo) {
    initialHeight = 48;
  }

  const expandInput = () => {
    if (textField.scrollHeight > initialHeight && textField.value.length > 0) {
      textField.style.height = 'auto';
      textField.style.height = textField.scrollHeight + 'px';
    } else {
      textField.style.height = initialHeight + 'px';
    }
  };

  if (textField) {
    textField.addEventListener('input', expandInput);
  }
});
