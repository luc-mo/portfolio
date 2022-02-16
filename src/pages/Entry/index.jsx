import React from 'react';
import 'styles/Entry.scss';

function Entry({ html: __html }) {
  return <main className='entry'>
    <div
      className='entry--container'
      dangerouslySetInnerHTML={{ __html }}>
    </div>
  </main>
}

export default Entry;