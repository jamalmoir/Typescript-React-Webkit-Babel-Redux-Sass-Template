import React from 'react';

import './Button.scss';

interface ButtonProps {
  href: string;
  text: string;
  onClick: (...args: any[]) => any;
}

export let Button = (props: ButtonProps) => {
  return (
    <a className="Button"
       href={ props.href }
       target="_blank"
       onClick={ props.onClick }>
      { props.text }
    </a>
  )
}