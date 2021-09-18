import video from './video.html';
import { renderItem } from '../../scripts/common';

function handleClicks(div) {
    div.addEventListener('click', () => {
        console.log('video');
    });
}

export function renderVideoPage() {
    renderItem('app', video);
    const div = document.getElementById('video');
    handleClicks(div);
}
