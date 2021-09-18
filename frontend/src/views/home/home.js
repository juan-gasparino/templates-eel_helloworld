import home from './home.html';
import { renderItem } from '../../scripts/common';

function handleClicks(div) {
    div.addEventListener('click', () => {
        console.log('HOME');
    });
}

export function renderHome() {
    renderItem('app', home);
    const div = document.getElementById('home');
    handleClicks(div);
}
