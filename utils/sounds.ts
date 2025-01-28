import { Howl } from 'howler'

export const welcomeSounds = {
  sound1: new Howl({
    src: ["/success_1.wav"],
    volume: 0.5,
  }),
  
  sound2: new Howl({
    src: ["/success_2.wav"],
    volume: 0.5,
  }),
  
  sound3: new Howl({
    src: ["/success_3.wav"],
    volume: 0.5,
  }),

  sound4: new Howl({
    src: ["/coin.wav"],
    volume: 0.5,
  })
}

export type SoundName = 'sound1' | 'sound2' | 'sound3' | 'sound4';

export const playWelcomeSound = (soundName: SoundName) => {
  welcomeSounds[soundName].play()
}; 