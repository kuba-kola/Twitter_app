import React, { useState } from 'react';

import userpic from '../../assets/userpic.jpg'
import image from '../../assets/icons/image_.svg'
import emoji from '../../assets/icons/emoji smile_.svg'

import styles from './styles.module.css'

const AddForm = ({ onAdd }) => {
    const [text, setText] = useState('');

    const onValueChange = (e) => {
        setText(e.target.value)
    };

    const onSubmit = (e) => {
        onAdd(text);
        setText('')
    };

    return (
        <div className={styles.container}>
            <div className={styles.block}>
                <div className={styles.userpicContainer}>
                    <img
                        className={styles.userpic}
                        src={userpic}
                        alt="img"
                    /> 
                </div>
                <div className={styles.input}>
                    <textarea
                        type="text"
                        placeholder="Пра што вы думаеце зараз?"
                        className={styles.textArea}
                        onChange={onValueChange}
                        value={text}
                    />
                    <div className={styles.footer}>
                        <div className='navlinks'>
                            <img
                                className={styles.icon}
                                src={image}
                                alt="img"
                            /> 
                            <img
                                className={styles.icon}
                                src={emoji}
                                alt="img"
                            /> 
                        </div>
                        <div className={styles.buttonContainer}>
                            <button
                                type="button"
                                className="btn btn-primary"
                                onClick={() => onSubmit()}
                                disabled={!text}
                            >
                                Дадаць
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AddForm;