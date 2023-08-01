
interface DrumPadProps {
  keyPad?: string;
  keyColor?: string;
  color?: string;
  className?: string;


}
import { useEffect, useRef, useState } from 'react';
import Cev_H2 from '../../assets/audios/Cev_H2.mp3';
import Cev_H3 from '../../assets/audios/Cev_H3.mp3';
import Dsc_Oh from '../../assets/audios/Dsc_Oh.mp3';
import Heater_1 from '../../assets/audios/Heater-1.mp3';
import Heater_2 from '../../assets/audios/Heater-2.mp3';
import Heater_4 from '../../assets/audios/Heater-4_1.mp3';
import Heater_6 from '../../assets/audios/Heater-6.mp3';
import Kick_n_Hat from '../../assets/audios/Kick_n_Hat.mp3';
import RP4_KICK_1 from '../../assets/audios/RP4_KICK_1.mp3';


export default function DrumPad(props: DrumPadProps) {
  const [isAudioPlaying, setIsAudioPlaying] = useState<boolean>(false);
  const audioRef = useRef<HTMLAudioElement | null>(null);
  const audios = [
    { keyPad: 'Q', src: Cev_H2 },
    { keyPad: 'W', src: Dsc_Oh },
    { keyPad: 'E', src: Heater_1 },
    { keyPad: 'A', src: Heater_2 },
    { keyPad: 'S', src: Heater_6 },
    { keyPad: 'D', src: Heater_4 },
    { keyPad: 'Z', src: Kick_n_Hat },
    { keyPad: 'X', src: RP4_KICK_1 },
    { keyPad: 'C', src: Cev_H3 }
  ];
  const { keyPad, color, keyColor, className } = props;
  async function onClickPad() {
    setIsAudioPlaying(true);
    await audioRef.current!.play();
    setTimeout(() => {
      setIsAudioPlaying(false);
    }, 500);


  }
  const handleKeyDown = async (event: { key: string; }) => {
    // Play the audio whenever a key is pressed
    if (event.key.toUpperCase() === keyPad)
      await onClickPad();
  };

  useEffect(() => {
    // Add event listener to the document to capture keyboard events
    document.addEventListener('keydown', handleKeyDown);

    // Clean up the event listener on component unmount
    return () => {
      document.removeEventListener('keydown', handleKeyDown);
    };

  }, []);

  useEffect(() => {
    console.log('isAudioPlaying', isAudioPlaying);
  }, [isAudioPlaying]);

  function getSoundName(src: string) {
    return src.split('/')[src.split('/').length - 1].split('.')[0];
  }

  return <div onClick={ () => (async () => await onClickPad())() } id={ getSoundName(audios.filter(aud => aud.keyPad === keyPad)[0]?.src) } className={ `drum-pad ${color ? color : ''} ${keyColor ? keyColor : ''} ${className ? className : ''}` }>
    <p id='display'>
      { !isAudioPlaying ? keyPad : getSoundName(audios.filter(aud => aud.keyPad === keyPad)[0]?.src) }
    </p>

    {/* control play state */ }

    <audio ref={ audioRef } src={ audios.filter(aud => aud.keyPad === keyPad)[0]?.src } className='clip' id={ keyPad }></audio>
  </div>;
}