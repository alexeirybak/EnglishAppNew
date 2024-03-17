import { useState, useEffect, useRef } from 'react';
import icon0 from './audioIcon0.png';
import icon1 from './audioIcon1.png';
import icon2 from './audioIcon2.png';
import icon3 from './audioIcon3.png';
import icon4 from './audioIcon4.png';
import * as S from './styles';

export const VolumeControle = ({ volume, setVolume }) => {
  const [muted, setMuted] = useState(false);
  const audioRef = useRef(new Audio());
  const handleVolumeChange = (event) => {
    const newVolume = parseFloat(event.target.value);
    setVolume(newVolume);
    audioRef.current.volume = newVolume;
  };

  useEffect(() => {
    audioRef.current.volume = volume;
  }, [volume, audioRef]);

  const toggleMute = () => {
    setMuted(!muted);
    setVolume(muted ? volume : 0);
  };

  let icon;
  if (volume === 0) {
    icon = icon0;
  } else if (volume > 0 && volume <= 0.25) {
    icon = icon1;
  } else if (volume > 0.25 && volume <= 0.5) {
    icon = icon2;
  } else if (volume > 0.5 && volume <= 0.75) {
    icon = icon3;
  } else {
    icon = icon4;
  }

  return (
    <S.VolumeControl>
      <S.VolumeBlock>
        <S.MuteButton onClick={toggleMute}>
          <S.Icon src={icon} />
        </S.MuteButton>
        <S.Mute>
          <label htmlFor='volume' />
          <S.Controller
            type='range'
            min='0'
            max='1'
            step='0.1'
            value={volume}
            onChange={handleVolumeChange}
            orient='vertical'
          />
        </S.Mute>
      </S.VolumeBlock>
    </S.VolumeControl>
  );
};
