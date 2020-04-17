'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

const index = require('./index-ad32ca8b.js');
const ionicGlobal = require('./ionic-global-0dc7ffc4.js');
const theme = require('./theme-299ed5ea.js');

const textCss = ":host(.ion-color){color:var(--ion-color-base)}";

const Text = class {
    constructor(hostRef) {
        index.registerInstance(this, hostRef);
    }
    render() {
        const mode = ionicGlobal.getIonMode(this);
        return (index.h(index.Host, { class: Object.assign(Object.assign({}, theme.createColorClasses(this.color)), { [mode]: true }) }, index.h("slot", null)));
    }
};
Text.style = textCss;

exports.ion_text = Text;
