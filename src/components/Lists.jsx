import React, { useContext } from 'react';
import { ListContext } from '../contexts/ListContext';
import JobItems from './JobItems';

function Lists() {
  const { lists } = useContext(ListContext);

  return (
    <div className='row justify-content-center'>
      {lists.map(x => (
        <JobItems key={x.id} item={x} />
      ))}
    </div>
  );
}

export default Lists;
