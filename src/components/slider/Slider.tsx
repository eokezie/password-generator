import React from 'react';
import './Slider.css';

interface SliderProps {
    setCharactersValue: React.Dispatch<React.SetStateAction<number>>;
    characters: number;
    charactersValue: number;
};

export const Slider: React.FC<SliderProps> = ({ characters, charactersValue, setCharactersValue}) => {
  return (
    <div className='slider'>
        <div className='slider__top-container'>
            <span className='slider__title'>Character Length</span>
            <span className='slider__subtitle'>{characters}</span>
        </div>
        <div className='slider__bottom-container'>
            <div className='slider__wrapper'>
                <input 
                    onChange={(e: any) => setCharactersValue(e.target.value)}
                    type='range'
                    min='0'
                    max='100'
                    value={charactersValue}
                    id='custom-range'
                />
                <div 
                    className='slider__wrapper--content'
                    style={{ width: `${charactersValue - 1}%` }}
                />
            </div>
        </div>
    </div>
  );
};

export default Slider;