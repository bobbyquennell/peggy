import React from 'react';
import greeter from 'greeter';

interface ComponentProps {
  userName: string;
  children: React.ReactNode;
}

const App: React.FC<ComponentProps> = (props: ComponentProps) => {
  const { userName, children } = props;
  return (
    <div>
      {greeter(userName)}
      {children}
    </div>
  );
};

export default App;
