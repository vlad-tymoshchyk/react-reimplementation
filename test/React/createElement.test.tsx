import ReactReal from 'react';
import React from './index';

import { fixtureTag } from './createElement.fixture';

describe('React', () => {
  it.only('`createElement` works correctly', () => {
    expect(<span key={42} />).toEqual(fixtureTag);
  });
});
