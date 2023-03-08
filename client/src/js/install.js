const butInstall = document.getElementById('buttonInstall');

window.addEventListener('beforeinstallprompt', (event) => {
    window.deferredPrompt = event; 
    document.getElementById('buttonInstall').style.visibility='block';
});

butInstall.addEventListener('click', async () => {

    const promptEvent = window.deferredPrompt;

    if (!promptEvent){
        return;
    }

    promptEvent.prompt();
    window.deferredPrompt = null;
    document.getElementById('buttonInstall').style.visibility='hidden';

});

window.addEventListener('appinstalled', (event) => {
  console.log('PWA installed successfully');  
  window.deferredPrompt = null;
});
