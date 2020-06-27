import React from 'react';
import greeter from 'greeter';

interface ComponentProps extends React.ComponentPropsWithoutRef<'div'> {
  userName: string;
  children?: React.ReactNode;
}
// type ComponentProps = {
//   userName: string;
//   children?: React.ReactNode;
// } & React.ComponentPropsWithoutRef<'div'>;

const App: React.FC<ComponentProps> = ({
  userName,
  children,
  ...rest
}: ComponentProps) => {
  return (
    <div {...rest}>
      {greeter(userName)}
      {children}
    </div>
  );
};

export default App;
