export const getSound = (melody, playingTime) => {
    const sound = new Howl({
        src: [`./src/${melody}`],

    });
      
      // Play the sound.
    sound.play();
    setTimeout(() => {
      sound.stop();
    }, playingTime);
}
  