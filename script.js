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

document.getElementById('app1').addEventListener('click', () => openPopup('aboutme.html'));
document.getElementById('app2').addEventListener('click', () => openPopup('contacts.html'));
document.getElementById('app3').addEventListener('click', () => openPopup('portfolio.html'));


// Date

const now = new Date();

document.getElementById('time').innerHTML =
  now.toLocaleTimeString([], {
    hour: 'numeric',
    minute: '2-digit',
    hour12: true
  });

document.getElementById('date').innerHTML =
  now.toLocaleDateString('en-GB');
