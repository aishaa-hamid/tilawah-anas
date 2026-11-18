// js/storage.js

export function saveAudioTime(key, currentTime) {
    localStorage.setItem(key, currentTime);
}

export function getAudioTime(key) {
    const savedTime = localStorage.getItem(key);
    return savedTime ? parseFloat(savedTime) : 0;
}

export function clearAudioTime(key) {
    localStorage.removeItem(key);
}