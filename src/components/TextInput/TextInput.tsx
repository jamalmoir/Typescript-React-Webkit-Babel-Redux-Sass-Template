import React, { ChangeEvent } from 'react';

import styles from './textInput.scss';

interface TextInputProps {
  type: 'text' | 'email' | 'password';
  placeholder: string;
  value: string;
  onChange?: (event: ChangeEvent<HTMLInputElement>) => void;
}

export const TextInput = (props: TextInputProps) => {
  return (
    <input className={ styles.textInput }
           type={ props.type }
           placeholder={ props.placeholder }
           onChange={ props.onChange }>
    </input>
  )
}