import React from 'react';
import classNames from 'classnames';
import { contentColor } from 'utils';

function EntryContent({ className, content = 'Content' }) {
  const color = contentColor(content);

  return <p className={classNames(
    'entry__content',
    className,
  )}
  style={{ color }}>
    {content}
  </p>
}

export default EntryContent;