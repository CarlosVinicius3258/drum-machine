
interface DrumPadProps {
  keyPad?: string;
  keyColor?: string;
  color?: string;
  className?: string;


}
import { useEffect, useRef, useState } from 'react';
import Cev_H2 from '../../assets/audios/Cev_H2.mp3';
import Dsc_Oh from '../../assets/audios/Dsc_Oh.mp3';
import Heater_1 from '../../assets/audios/Heater-1.mp3';
import Heater_2 from '../../assets/audios/Heater-2.mp3';
import Heater_4 from '../../assets/audios/Heater-4_1.mp3';
import Heater_6 from '../../assets/audios/Heater-6.mp3';
import Kick_n_Hat from '../../assets/audios/Kick_n_Hat.mp3';
import RP4_KICK_1 from '../../assets/audios/RP4_KICK_1.mp3';


export default function DrumPad(props: DrumPadProps) {
  const [lastPressedKey, setLastPressedKey] = useState<string>('');
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
    { keyPad: 'C', src: Cev_H2 }
  ];
  const { keyPad, color, keyColor, className } = props;
  async function onClickPad() {
    await audioRef.current!.play();
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

  return <div onClick={ () => (async () => await onClickPad())() } className={ `drum-pad ${color ? color : ''} ${keyColor ? keyColor : ''} ${className ? className : ''}` }>
    { keyPad }
    {/* control play state */ }

    <audio ref={ audioRef } src={ audios.filter(aud => aud.keyPad === keyPad)[0]?.src } className='clip' id={ keyPad }></audio>
  </div>;
}