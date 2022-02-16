import React from 'react';

import { useReducers } from 'hooks';
import Entry from './Entry';
import { InternalLink } from 'components';

function BlogView() {
  const { entries } = useReducers('blog');

  return <React.Fragment>
    <section className='home__blog'>
      {entries.map((entry, index) => {
        if(index < 6) return <Entry
          key={`home__blog-entry--${index}`}
          entry={entry}
        />
        else return null;
      })}
    </section>
    {entries.length > 6 && <div className='home__blog-link'>
      <InternalLink to='/blog'>Leer mas articulos</InternalLink>
    </div>}
  </React.Fragment>
}

export default BlogView;