import Player from '@vimeo/player';
import throttle from 'lodash.throttle';

const videoPlayer = new Player('vimeo-player');
const LOCAL_STORAGE_KEY = 'videoplayer-current-time';

// Відновити відтворення відео зі збереженої позиції
const savedTime = parseFloat(localStorage.getItem(LOCAL_STORAGE_KEY));
if (!isNaN(savedTime)) {
  videoPlayer.setCurrentTime(savedTime);
}

// Відстежувати оновлення часу відтворення і зберігати його у локальне сховище
videoPlayer.on('timeupdate', throttle(event => {
  localStorage.setItem(LOCAL_STORAGE_KEY, event.seconds);
}, 1000));
