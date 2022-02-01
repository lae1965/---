export const getSound = () => {
    const sound = new Howl({
        src: ['./src/02599.mp3'],

    });
      
      // Play the sound.
    sound.play();
    setTimeout(() => {
      sound.stop();
    }, 1000);
}
  