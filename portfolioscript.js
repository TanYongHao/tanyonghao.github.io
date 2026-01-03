function openPopup(page) {
    const overlay = document.createElement('div');
    overlay.style.position = 'fixed';
    overlay.style.top = '0';
    overlay.style.left = '0';
    overlay.style.width = '100%';
    overlay.style.height = '100%';
    overlay.style.backgroundColor = 'rgba(0, 0, 0, 0.5)';
    overlay.style.display = 'flex';
    overlay.style.justifyContent = 'center';
    overlay.style.alignItems = 'center';
    overlay.style.zIndex = '1000';

    const modal = document.createElement('div');
    modal.style.position = 'relative';

    const iframe = document.createElement('iframe');
    iframe.src = page;
    iframe.style.width = '1100px';
    iframe.style.height = '740px';

    modal.appendChild(iframe);
    overlay.appendChild(modal);

    overlay.addEventListener('click', (e) => {
        if (e.target === overlay) document.body.removeChild(overlay);
    });

    document.body.appendChild(overlay);
}

document.getElementById('app4').addEventListener('click', () => openPopup('todo.html'));
