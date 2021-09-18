import './UX/styles/main.scss';

import { pages } from './views/index';

function renderPage(page) {
    switch (page) {
        case '':
            pages.renderHome();
            break;
        case '#sound':
            pages.renderSoundPage();
            break;
        case '#image':
            pages.renderImagePage();
            break;
        case '#video':
            pages.renderVideoPage();
            break;
        default:
            break;
    }
}
renderPage(window.location.hash);

window.addEventListener('hashchange', (e) => {
    renderPage(window.location.hash);
});
