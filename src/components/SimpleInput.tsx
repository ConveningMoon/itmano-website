import React from 'react';
import styles from './styles/SimpleInput.module.css';

interface SimpleInputProps {
    nameId: string;
    type?: string;
    placeholder?: string;
    value: string;
    onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

const SimpleInput: React.FC<SimpleInputProps> = ({nameId, type = 'text', placeholder = 'Placeholder', value, onChange}) => {
    return(
        <div className={styles.SimpleInputContainer}>
            <input 
                required
                className={styles.SimpleInput} 
                type={type}
                autoCapitalize="on"
                name={nameId}
                id={nameId}
                value={value}
                onChange={onChange} 
            />
            <label className={styles.user_label}>{placeholder}</label>
        </div>
    );
};

export default SimpleInput;
