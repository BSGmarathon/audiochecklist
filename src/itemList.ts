import type {CheckBox} from '@/applicationTypes';

export function setAllMicItems(list: CheckBox[]): void {
    list.push({
        label: 'If a host was swapped, set them up first. For this pull their fader down and have them unmute. Have them mute again after setup and return the fader to the 0db position.',
        checked: false,
        justText: false,
    });
    list.push({
        label: 'Set up and monitor all using these 3 principles.<br>1. If speech cuts out, increase channel gain<br>2. If you only need more/less volume, change the Gain in the compressor<br>3. Talking volume should be hitting in the orange on the master (LR) fader (-18db).',
        checked: false,
        justText: true,
    });
}

export function setAllGameItems(list: CheckBox[]): void {
    list.push({
        label: 'Set gain so volume is between -30db and -20db on average (aim for -25db). Peeks can be louder.',
        checked: false,
        justText: false,
    });
}

export function setAllMixbusItems(list: CheckBox[]): void {
    list.push({
        label: 'Before setting up mixbusses pull the host mic fader down and let the host know they won\'t be on stream',
        checked: false,
        justText: false,
    });
    list.push({
        label: 'Solo all the sources that you want to hear',
        checked: false,
        justText: false,
    });
    list.push({
        label: 'Enable sends on fader',
        checked: false,
        justText: false,
    });
    list.push({
        label: 'Ensure runners, host and commentators hear the following things at a comfortable volume:',
        checked: false,
        justText: true,
    });
    list.push({
        label: 'Host',
        checked: false,
        justText: false,
    });
    list.push({
        label: 'Commentators',
        checked: false,
        justText: false,
    });
    list.push({
        label: 'Themselves (if preferred)',
        checked: false,
        justText: false,
    });
    list.push({
        label: 'Game Audio',
        checked: false,
        justText: false,
    });
    list.push({
        label: 'Other runners',
        checked: false,
        justText: false,
    });
    list.push({
        label: '<strong>NOTE:</strong> Commentators (including online) and Host will hear game audio after the run is live, keep this in mind.',
        checked: false,
        justText: true,
    });
    list.push({
        label: 'Disable sends on fader',
        checked: false,
        justText: false,
    });
    list.push({
        label: 'Return the host fader to the 0db position.',
        checked: false,
        justText: false,
    });
}
