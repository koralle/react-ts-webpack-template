import * as React from "react";

type Props = {
  name: string;
}

const App: React.FC<Props> = (props)=> <h1>{props.name}</h1> ;


export default App;