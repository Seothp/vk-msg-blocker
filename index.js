'use strict'
const delay = 1000 * 0.5;
const blockId = 599480560;
setInterval(
  () => {
    const messages = document.querySelectorAll(`div[data-peer="${blockId}"]`);
    messages.forEach((e) => {
      e.textContent = '';
    })
  }, 
  delay,
);