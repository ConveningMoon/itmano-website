import React from 'react';
import styles from './styles/SimpleTextArea.module.css';

interface SimpleTextAreaProps {
    nameId: string;
    placeholder?: string;
    value: string;
    onChange: (e: React.ChangeEvent<HTMLTextAreaElement>) => void;
}

const SimpleTextArea: React.FC<SimpleTextAreaProps> = ({nameId, placeholder = 'Placeholder', value, onChange}) => {
    return(
        <div className={styles.SimpleTextAreaContainer}>
            <textarea 
                required
                className={styles.SimpleTextArea}
                autoCapitalize="words"
                name={nameId}
                id={nameId}
                value={value}
                onChange={onChange} 
            />
            <label className={styles.user_label}>{placeholder}</label>
        </div>
    );
};

export default SimpleTextArea;
