import React from 'react';
import greeter from 'greeter';
import styled from '@emotion/styled';
interface AppProps extends React.ComponentProps<'div'> {
  userName: string;
  // children?: React.ReactNode;
}
// type ComponentProps = {
//   userName: string;
//   children?: React.ReactNode;
// } & React.ComponentPropsWithoutRef<'div'>;
const StyledButton = styled.button`
  color: blue;
  background-color: lightcoral;
  height: 5rem;
  width: 10rem;
`;
const App: React.FC<AppProps> = ({ userName, children, ...rest }: AppProps) => {
  return (
    <div {...rest}>
      <StyledButton>hello, I am from emotion</StyledButton>
      {greeter(userName)}
      {children}
    </div>
  );
};

export default App;
