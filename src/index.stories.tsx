import React from 'react';
import { MyComponent } from './MyComponent';

export default { title: 'Button' };

export const withRed = () => <MyComponent color="red" />;

export const withBlack = () => <MyComponent color="black" />;
