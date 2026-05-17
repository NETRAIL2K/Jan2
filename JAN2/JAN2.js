// Выполнять строго на document-start
HTMLIFrameElement.prototype.addEventListener = o => 0;
[window, document].forEach(o => ['blur', 'visibilitychange'].forEach(e => o.addEventListener(e, x => x.stopImmediatePropagation(), true)));
Object.defineProperties(document, { hidden: { get: () => false }, visibilityState: { get: () => 'visible' }, hasFocus: { value: () => true } });
window.requestAnimationFrame = c => setTimeout(() => c(performance.now()), 16);

