import React from 'react';

import { useReducers } from 'hooks';
import Entry from './Entry';
import { SpanHeader } from 'components';

import 'styles/Blog.scss';

function Blog() {
  const { entries } = useReducers('blog');

  return <main className='blog'>
    <SpanHeader className='blog__title'>Blog</SpanHeader>
    <div className='blog__entries--container'>
      {entries.map((entry, index) => <React.Fragment key={`blog__entry--${index}`}>
        <Entry entry={entry}/>
      </React.Fragment>)}
    </div>
  </main>
}

export default Blog;