import image from './image.html';
import { renderItem } from '../../scripts/common';

function handleClicks(div) {
    div.addEventListener('click', () => {
        console.log('image');
    });
}

export function renderImagePage() {
    renderItem('app', image);
    const div = document.getElementById('image');
    handleClicks(div);
}
