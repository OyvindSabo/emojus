import { PropsWithChildren } from 'react';

type ToastProps = PropsWithChildren;

const Toast = ({ children }: ToastProps) => {
  return <div className="fixed top-4 right-4 bg-gray-200 p-4">{children}</div>;
};

export default Toast;
