import { IToolbarHeadingProps } from './types';

const ToolbarHeading = ({ children }: IToolbarHeadingProps) => {
  return <div className="flex flex-col justify-center gap-2.5">{children}</div>;
};

export { ToolbarHeading };