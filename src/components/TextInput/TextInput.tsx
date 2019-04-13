import React, { ChangeEvent } from 'react';

import styles from './textInput.scss';

interface TextInputProps {
  type: 'text' | 'email' | 'password';
  placeholder: string;
  value: string;
  errors?: boolean;
  onChange?: (event: ChangeEvent<HTMLInputElement>) => void;
}

export const TextInput = (props: TextInputProps) => {
  let errorClass = props.errors ? styles.errors : '';

  return (
    <input className={ styles.textInput + ' ' + errorClass }
           type={ props.type }
           placeholder={ props.placeholder }
           onChange={ props.onChange }>
    </input>
  )
}