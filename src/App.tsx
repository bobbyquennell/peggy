import React, { ReactElement } from 'react';
import greeter from 'greeter';

interface ComponentProps {
  userName: string;
}

const App = (props: ComponentProps): ReactElement => {
  const { userName } = props;
  return <div>{greeter(userName)}</div>;
};

export default App;
