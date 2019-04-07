import React from 'react';

import styles from './externalLinkButton.scss';

interface ExternalLinkButtonProps {
  className?: string
  href: string;
  text: string;
  onClick?: (...args: any[]) => any;
}

export const ExternalLinkButton = (props: ExternalLinkButtonProps) => {
  return (
    <a className={ styles.ExternalLinkButton + ' ' + props.className }
       href={ props.href }
       target="_blank"
       onClick={ props.onClick }>
      { props.text }
    </a>
  )
}