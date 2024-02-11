import { FirstComponent } from "./FirstComponent";
import { CounterApp } from "./CounterApp";

function App(){
  return (
    <>
      {/* <FirstComponent title='Hola, soy Goku!' number={ 123 } />
      <FirstComponent number={ 123 } /> */}

      <CounterApp value={20} />
    </>
  );
}

export default App;