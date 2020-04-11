import { MyComponent } from './MyComponent';

if (process.env.NODE_ENV === 'production') {
  console.log('this should get eliminated');
}

if (process.env.NODE_ENV !== 'production') {
  console.log('this should NOT get eliminated');
}

export { MyComponent };
