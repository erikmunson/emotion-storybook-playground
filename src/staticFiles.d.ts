declare module '*.svg' {
  import { ComponentType, SVGProps } from 'react';
  const ReactComponent: ComponentType<SVGProps<HTMLOrSVGElement>>;
  export default ReactComponent;
}

declare module '*.png' {
  const URL: string;
  export default URL;
}
