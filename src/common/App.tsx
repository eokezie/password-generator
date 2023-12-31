import React from 'react';
import { Slider } from '../components/slider/Slider';
import { checkboxInfo, generatePassword } from '../utils/data';
import { Checkbox } from '../components/checkbox/Checkbox';
import { Indicator } from '../components/indicator/Indicator';
import { CheckboxI } from '../utils/data';
import arrow from '../assets/images/icon-arrow-right.svg';

const App = () => {
    const [ charactersValue, setCharactersValue ] = React.useState<number>(20);
    const [ checkboxes, setCheckboxes ] = React.useState<CheckboxI[]>(checkboxInfo);
    const [ password, setPassword ] = React.useState<string>('');
    const [ copied, setCopied ] = React.useState<boolean>(false);

    const characters = React.useMemo(
        () => Math.round((charactersValue / 100) * 20),
        [charactersValue]
    );

    const handleChecked = (id: number) => {
        const newState = checkboxes.map((item) => {
            return item.id === id ? {...item, checked: !item.checked } : item
        });
        setCheckboxes(newState);
    };

    const handleCopy = () => {
        navigator.clipboard.writeText(password);
        setCopied(true);
    };

    const handleGeneratePass = () => {
        setCopied(false);
        setPassword(generatePassword(checkboxes, characters))
    }

    return (
        <main>
            <div className='generator'>
                <div className='generator__title-container'>
                    <span className='generator__title'>Password Generator</span>
                </div>
                <section className='generator__top-container'>
                    <span
                        className={
                            `generator__password ${
                                password.length === 0 ? 'empty' : ''
                            }`
                        }
                    >
                        {password.length === 0 ? 'PS4$5W0rD!' : password}
                    </span>
                    <div className='generator__icon-wrapper'>
                        {copied && <span className='generator__icon-title'>copied</span>}
                        <svg
                            className="generator__icon"
                            width="21"
                            height="24"
                            xmlns="http://www.w3.org/2000/svg"
                            onClick={handleCopy}
                        >
                        <path
                            d="M20.341 3.091 17.909.659A2.25 2.25 0 0 0 16.319 0H8.25A2.25 2.25 0 0 0 6 2.25V4.5H2.25A2.25 2.25 0 0 0 0 6.75v15A2.25 2.25 0 0 0 2.25 24h10.5A2.25 2.25 0 0 0 15 21.75V19.5h3.75A2.25 2.25 0 0 0 21 17.25V4.682a2.25 2.25 0 0 0-.659-1.591ZM12.469 21.75H2.53a.281.281 0 0 1-.281-.281V7.03a.281.281 0 0 1 .281-.281H6v10.5a2.25 2.25 0 0 0 2.25 2.25h4.5v1.969a.282.282 0 0 1-.281.281Zm6-4.5H8.53a.281.281 0 0 1-.281-.281V2.53a.281.281 0 0 1 .281-.281H13.5v4.125c0 .621.504 1.125 1.125 1.125h4.125v9.469a.282.282 0 0 1-.281.281Zm.281-12h-3v-3h.451c.075 0 .147.03.2.082L18.667 4.6a.283.283 0 0 1 .082.199v.451Z"
                            fill="#A4FFAF"
                        />
                        </svg>
                    </div>
                </section>
                <section className='generator__bottom-container'>
                    <Slider 
                        setCharactersValue={setCharactersValue}
                        characters={characters}
                        charactersValue={charactersValue}
                    />
                    <div className='generator__checkboxes-wrapper'>
                        {checkboxes.map((checkbox) => (
                            <Checkbox 
                                key={checkbox.id}
                                handleChecked={handleChecked}
                                checkbox={checkbox}
                            />
                        ))}
                    </div>
                    <div className='generator__actions-wrapper'>
                        <Indicator options={checkboxes} />
                        <button onClick={handleGeneratePass}>
                            <span>GENERATE</span>
                            <img src={arrow} alt='arrow' />
                        </button>
                    </div>
                </section>
            </div>
        </main>
    )
}

export default App;