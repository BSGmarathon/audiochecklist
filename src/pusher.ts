import Pusher from 'pusher-js';

Pusher.logToConsole = false;

const pusher = new Pusher('2c53693ab820e678c32e', {
    cluster: 'eu'
});

export const UNCHECK_EVENT = 'obs-transition-to-game';

export const channel = pusher.subscribe('bsg-checklist');

/*channel.bind_global((event: string, data?: string) => {
    console.log('global', event, data);
});*/

export function sendAudioReady(ready: boolean) {
    fetch('https://pusher.bsg.duncte123.nl/audioReady.php?ready=' + ready, {
        mode: 'no-cors',
    })
        .catch(console.log)
}

