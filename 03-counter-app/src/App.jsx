import { FirstComponent } from "./FirstComponent";
import { CounterApp } from "./CounterApp";

function App(){
  return (
    <>
      <h1>Hola Mundo</h1>
      <FirstComponent title='Hola, soy Goku!' number={ 123 } />
      <FirstComponent number={ 123 } />
      <CounterApp value={ 24 }/>
    </>
  );
}

export default App;