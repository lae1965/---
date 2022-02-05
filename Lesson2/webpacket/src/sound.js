import {Howl} from 'howler';

export const getSound = (melody, playingTime) => {
    const sound = new Howl({
        src: [melody],
    });
      
      // Play the sound.
    sound.play();
    setTimeout(() => {
        sound.stop();
    }, playingTime);
}
  