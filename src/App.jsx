import Batsman from './batsman';
import Baller from './boller';
import Counter from './counter';
import './App.css'

function App() {

  function handleClick(){
    alert('I am Clicked.')
  }

  const handleClick3 = () => {
    alert('clicked 3')
  }

  const handleAdd5 = (num)=>{
    const newNum = num + 5;
    alert(newNum);
  }

  return (
    <>
      <section id="center">
        
        <div>
          <h1>Get started</h1>

          <Batsman></Batsman>
          <Baller></Baller>
          <Counter></Counter>
          
          {/* <button onclick="handleClick()">Click me</button> */}
          {/* btn system-1 */}
          <button onClick={handleClick}>Click me</button>

          {/* btn system-2 */}
          <button onClick={function handleClick2(){alert('clicked 2')}}>Click me 2</button>

          {/* btn system-3 */}
          <button onClick={handleClick3}>Click me 3</button>

          {/* btn system-4 */}
          <button onClick={() => alert('clicked-4')}>Click me 4</button>

          <button onClick={() => handleAdd5(10)}>Click Add 5</button>
         
        </div>
        
      </section>


    </>
  )
}

export default App
