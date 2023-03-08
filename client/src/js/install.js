const butInstall = document.getElementById('buttonInstall');

// Logic for installing the PWA
let deferredPrompt;

window.addEventListener('beforeinstallprompt', (event) => {
  event.preventDefault();
  deferredPrompt = event;
  butInstall.style.display = 'block';
});

butInstall.addEventListener('click', async () => {
  if (deferredPrompt) {
    deferredPrompt.prompt();
    const { outcome } = await deferredPrompt.userChoice;
    if (outcome === 'accepted') {
      console.log('User accepted the installation prompt');
    } else {
      console.log('User dismissed the installation prompt');
    }
    deferredPrompt = null;
    butInstall.style.display = 'none';
  }
});

window.addEventListener('appinstalled', (event) => {
  console.log('PWA installed successfully');
});