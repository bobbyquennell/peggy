import React from 'react';
import greeter from 'greeter';

interface ComponentProps {
  userName: string;
  children: React.ReactNode;
  className?: string;
}

const App: React.FC<ComponentProps> = ({
  userName,
  children,
  className,
}: ComponentProps) => {
  return (
    <div className={className}>
      {greeter(userName)}
      {children}
    </div>
  );
};

export default App;
