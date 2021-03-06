const startHardwareBackButton = () => {
    const doc = document;
    let busy = false;
    doc.addEventListener('backbutton', () => {
        if (busy) {
            return;
        }
        const handlers = [];
        const ev = new CustomEvent('ionBackButton', {
            bubbles: false,
            detail: {
                register(priority, handler) {
                    handlers.push({ priority, handler });
                }
            }
        });
        doc.dispatchEvent(ev);
        if (handlers.length > 0) {
            let selectedPriority = Number.MIN_SAFE_INTEGER;
            let selectedHandler;
            handlers.forEach(({ priority, handler }) => {
                if (priority >= selectedPriority) {
                    selectedPriority = priority;
                    selectedHandler = handler;
                }
            });
            busy = true;
            executeAction(selectedHandler).then(() => busy = false);
        }
    });
};
const executeAction = async (handler) => {
    try {
        if (handler) {
            const result = handler();
            if (result != null) {
                await result;
            }
        }
    }
    catch (e) {
        console.error(e);
    }
};
const OVERLAY_BACK_BUTTON_PRIORITY = 100;
const MENU_BACK_BUTTON_PRIORITY = 99; // 1 less than overlay priority since menu is displayed behind overlays

export { MENU_BACK_BUTTON_PRIORITY, OVERLAY_BACK_BUTTON_PRIORITY, startHardwareBackButton };
