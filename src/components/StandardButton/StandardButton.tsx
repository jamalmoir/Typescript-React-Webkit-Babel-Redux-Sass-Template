import React from 'react';

import styles from './standardButton.scss';


interface StandardButtonProps extends React.DetailedHTMLProps<React.ButtonHTMLAttributes<HTMLButtonElement>,
                                                              HTMLButtonElement> {
  text: string;
}

export const StandardButton = ({text, ...buttonProps}: StandardButtonProps) => {
  return (
    <button className={ styles.standardButton } { ...buttonProps }>
      { text }
    </button>
  )
}