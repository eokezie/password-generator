import React from 'react';
import { CheckboxI } from '../../utils/data';
import { useStrength } from '../../hooks/useStrength';

import './Indicator.css';

interface IndicatorProps {
    options: CheckboxI[]
};

export const Indicator: React.FC<IndicatorProps> = ({ options }) => {
    const strength = useStrength({ options });

  return (
    <div className='indicator'>
        <span className='indicator__title'>STRENGTH</span>
        <div className='indicator__data'>
            <span className='indicator__data-title'>
                {strength === 'too-weak' ? `${strength}!` : strength}
            </span>
            <div className={`indicator__data-grid ${strength}`}>
                {options.map((option) => (
                    <div 
                        key={option.label}
                        className='indicator_data-grid_item'
                    ></div>
                ))}
            </div>
        </div>
    </div>
  )
}

export default Indicator;