const codeToElement = {
    'NumLock': document.getElementById('key-numlock'),
    'Numpad0': document.getElementById('key-0'),
    'Numpad1': document.getElementById('key-1'),
    'Numpad2': document.getElementById('key-2'),
    'Numpad3': document.getElementById('key-3'),
    'Numpad4': document.getElementById('key-4'),
    'Numpad5': document.getElementById('key-5'),
    'Numpad6': document.getElementById('key-6'),
    'Numpad7': document.getElementById('key-7'),
    'Numpad8': document.getElementById('key-8'),
    'Numpad9': document.getElementById('key-9'),
    'NumpadDivide': document.getElementById('key-divide'),
    'NumpadMultiply': document.getElementById('key-multiply'),
    'NumpadSubtract': document.getElementById('key-subtract'),
    'NumpadAdd': document.getElementById('key-add'),
    'NumpadDecimal': document.getElementById('key-dot'),
    'NumpadEnter': document.getElementById('key-enter'),
};

// Object to map each key code to its corresponding audio file
const codeToSound = {
    'Numpad0': 'sounds17/Agogo07 Drums1DOTcom.wav',
    'Numpad1': 'sounds17/CHH49 Drums1DOTcom.wav',
    'Numpad2': 'sounds17/Clap02 Drums1DOTcom .wav',
    'Numpad3': 'sounds17/Crash01 Drums1DOTcom.wav',
    'Numpad4': 'sounds17/Crash10 Drums1DOTcom.wav',
    'Numpad5': 'sounds17/snare.wav',
    'Numpad6': 'sounds17/Flex03 Drums1DOTcom.wav',
    'Numpad7': 'sounds17/Flex09 Drums1DOTcom.wav',
    'Numpad8': 'sounds17/Glass BrokenG3 Drums1DOTcom.wav',
    'Numpad9': 'sounds17/house-bass-drum-sound-g-key-750-mRC.mp3',
    'NumpadDivide': 'sounds17/Kick drum sound effect.mp3',
    'NumpadMultiply': 'sounds17/OHH02 Drums1DOTcom.wav',
    'NumpadSubtract': 'sounds17/OHH10 Drums1DOTcom.wav',
    'NumpadAdd': 'sounds17/Ride19 Drums1DOTcom.wav',
    'NumpadDecimal': 'sounds17/Snare12 Drums1DOTcom.wav',
    'NumpadEnter': 'sounds17/Triangle03 Drums1DOTcom.wav',
};

// Function to add the "pressed" class to a key element
const addPressedClass = (el) => {
    if (el) {
        el.classList.add('pressed');
    }
};

// Function to remove the "pressed" class from a key element
const removePressedClass = (el) => {
    if (el) {
        el.classList.remove('pressed');
    }
};

// Function to handle key press actions
const handleKeyPress = (eCode) => {
    const el = codeToElement[eCode];
    addPressedClass(el);
    // Play sound associated with the key, if available
    const soundFile = codeToSound[eCode];
    if (soundFile) {
        const audio = new Audio(soundFile);
        audio.play();
    }
};

// Event listener for the keydown event
window.addEventListener('keydown', (e) => {
    const eCode = e.code;
    if (eCode.startsWith('Numpad') || eCode === 'NumLock') {
        handleKeyPress(eCode);
    }
});

// Event listener for the keyup event
window.addEventListener('keyup', (e) => {
    const eCode = e.code;
    if (eCode.startsWith('Numpad') || eCode === 'NumLock') {
        const el = codeToElement[eCode];
        removePressedClass(el);
    }
});
