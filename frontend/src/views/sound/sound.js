import sound from './sound.html';
import { renderItem } from '../../scripts/common';

function handleClicks(div) {
    div.addEventListener('click', () => {
        console.log('sound');
    });
}

export function renderSoundPage() {
    renderItem('app', sound);
    const div = document.getElementById('sound');
    handleClicks(div);
}
