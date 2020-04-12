import React from 'react';

import { Global } from '@emotion/core';

const globalStyles = {
  backgroundColor: '#f4f4f4',
  fontFamily: 'Source Sans Pro',
};

export const GlobalStoryStyles: React.FC<any> = ({ children }) => (
  <>
    <Global styles={globalStyles} />
    <div css={globalStyles}>{children}</div>
  </>
);
