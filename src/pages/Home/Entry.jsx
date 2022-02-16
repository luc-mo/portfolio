import React from 'react';

import { InternalLink, EntryLine, EntryContent } from 'components';

function Entry({ entry }) {
  return <InternalLink to={entry.path}>
    <EntryLine content={entry.content}/>
    <div className='home__blog-entry'>
      <EntryContent content={entry.content}/>
      <h3 className='blog-entry__title'>{entry.title}</h3>
      <p className='blog-entry__description'>{entry.description}</p>
    </div>
  </InternalLink>
}

export default Entry;