const f = n => { 
    const wrapper = () => 'function ' + n + '() { [native code] }'; 
    wrapper.toString = () => 'function toString() { [native code] }'; 
    return wrapper; 
};


HTMLIFrameElement.prototype.addEventListener = () => {};
HTMLIFrameElement.prototype.addEventListener.toString = f('addEventListener');


const kill = x => x.stopImmediatePropagation();
kill.toString = f('');
[window, document].forEach(o => ['blur', 'visibilitychange'].forEach(e => o.addEventListener(e, kill, true)));


const getHidden = () => false; getHidden.toString = f('get hidden');
const getStat = () => 'visible'; getStat.toString = f('get visibilityState');
const getFocus = () => true; getFocus.toString = f('hasFocus');
Object.defineProperties(document, { hidden: { get: getHidden }, visibilityState: { get: getStat }, hasFocus: { value: getFocus } });


const fakeRAF = c => setTimeout(() => c(performance.now()), 16);
window.requestAnimationFrame = fakeRAF;
window.requestAnimationFrame.toString = f('requestAnimationFrame');
