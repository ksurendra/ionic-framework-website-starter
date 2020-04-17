import { r as registerInstance, h, H as Host } from './index-2cd7e630.js';
import { b as getIonMode } from './ionic-global-a175fa73.js';
import { c as createColorClasses } from './theme-c2dc54d9.js';

const textCss = ":host(.ion-color){color:var(--ion-color-base)}";

const Text = class {
    constructor(hostRef) {
        registerInstance(this, hostRef);
    }
    render() {
        const mode = getIonMode(this);
        return (h(Host, { class: Object.assign(Object.assign({}, createColorClasses(this.color)), { [mode]: true }) }, h("slot", null)));
    }
};
Text.style = textCss;

export { Text as ion_text };
