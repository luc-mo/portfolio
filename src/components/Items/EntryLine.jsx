import React from 'react';
import { contentColor } from 'utils';

function EntryLine({ content = 'Content' }) {
  const backgroundColor = contentColor(content);
  return <div
    className='entry__line'
    style={{ backgroundColor }}>
  </div>
}

export default EntryLine;