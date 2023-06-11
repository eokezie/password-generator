import React from 'react';
import { CheckboxI } from '../utils/data';

interface Props {
    options: CheckboxI[];
};

export const useStrength = ({ options }: Props) => {
    const strength = React.useMemo(() => {
        const strengthCount = options.filter((option) => option.checked).length;

        switch (strengthCount) {
            case 1: 
                return 'too-weak';
                break;
            case 2: 
                return 'weak';
                break;
            case 3: 
                return 'medium';
                break;
            case 4: 
                return 'strong';
                break;
            default:
                return 'too-weak!';
                break
        }
    }, [options]);

    return strength
}