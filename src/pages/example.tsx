import React from 'react';
import { Heading } from '../components/Heading';
import { Link } from 'react-router-dom';

interface ExampleProps {}

export const Example = (props: ExampleProps) => {
  return (
    <div className="home">
      <Heading text="This is an Example Page" />
      <Link to='/'>Go Back</Link>
    </div>
  )
}