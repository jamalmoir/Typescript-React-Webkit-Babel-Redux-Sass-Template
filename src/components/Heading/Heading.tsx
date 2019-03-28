import React from 'react';

import './Heading.scss';

interface HeadingProps {
  text: string;
}

export let Heading = (props: HeadingProps) => {
  return (
    <h1 className="Heading">{ props.text }</h1>
  )
}