import React from 'react';

import { InternalLink, EntryLine, EntryContent } from 'components';

function Entry({ entry }) {
  return <article className='blog__entry--container'>
    <InternalLink to={entry.path}>
      <EntryLine content={entry.content}/>
      <div className='blog__entry'>
        <EntryContent content={entry.content}/>
        <h3 className='entry__title'>{entry.title}</h3>
        <p className='entry__description'>{entry.description}</p>
      </div>
    </InternalLink>
  </article>
}

export default Entry;