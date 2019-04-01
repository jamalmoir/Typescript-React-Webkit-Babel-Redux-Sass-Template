import React from 'react';

import styles from './Heading.scss';

interface HeadingProps {
  className?: string;
  text: string;
}

export let Heading = (props: HeadingProps) => {
  return (
    <h1 className={ styles.Heading + ' ' + props.className }>{ props.text }</h1>
  )
}