import React from 'react';

import styles from './heading.scss';

interface HeadingProps {
  className?: string;
  text: string;
}

export const Heading = (props: HeadingProps) => {
  return (
    <h1 className={ styles.Heading + ' ' + props.className }>{ props.text }</h1>
  )
}