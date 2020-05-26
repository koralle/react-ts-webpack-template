import * as React from "react";

type Props = {
  name: string;
}

const App: React.FC<Props> = ({name})=> <h1 data-testid="app">{name}</h1> ;

export default App;