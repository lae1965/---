const Howl = require('./howler.js');

export const getSound = () => {
    const sound = new Howl({
        src: ['sound.webm', 'sound.mp3']
    });
      
      // Play the sound.
    sound.play();
}
  