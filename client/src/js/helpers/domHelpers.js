export function createElement(
  tagName,
  attributes,
  content,
  eventHandlers,
  parent,
) {
  const element = document.createElement(tagName);
  if (attributes) {
    for (const [key, value] of Object.entries(attributes)) {
      element.setAttribute(key, value);
    }
  }
  if (content) {
    element.innerHTML = content;
  }
  if (eventHandlers) {
    for (const [event, handler] of Object.entries(eventHandlers)) {
      element.addEventListener(event, handler);
    }
  }
  if (parent) {
    parent.appendChild(element);
  }
  return element;
}

