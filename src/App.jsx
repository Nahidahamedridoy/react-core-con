import Batsman from './batsman';
import Baller from './boller';
import Counter from './counter';
import Users from './users';
import Friends from './friends';
import Posts from './posts';
import Players from './players';
import './App.css'
import { Suspense } from 'react';

// const fetchUsers = fetch('https://jsonplaceholder.typicode.com/users')
//   .then(res => res.json())

// const fetchFriends = async () => {
//   const res = await fetch('https://jsonplaceholder.typicode.com/users');
//   return res.json();
// }

// const fetchPosts = async() =>{
//   const res = await fetch('https://jsonplaceholder.typicode.com/posts');
//   return res.json();
// }

function App() {

  // const friendsPromise = fetchFriends();
  // const postsPromise = fetchPosts();

  function handleClick() {
    alert('I am Clicked.')
  }

  const handleClick3 = () => {
    alert('clicked 3')
  }

  const handleAdd5 = (num) => {
    const newNum = num + 5;
    alert(newNum);
  }

  return (
    <>
      <section id="center">

        <div>
          <h1>Get started</h1>

          <Players></Players>

          {/* <Suspense fallback={<h4>Posts Are Coming....</h4>}>
           <Posts postsPromise={postsPromise}></Posts>
          </Suspense> */}

          {/* <Suspense fallback={<h3>Loading...</h3>}>
            <Users fetchUsers={fetchUsers}></Users>
          </Suspense> */}

          {/* <Suspense fallback={<h3>Friends are coming for treat...</h3>}>
            <Friends friendsPromise={friendsPromise}></Friends>
          </Suspense> */}

          <Batsman></Batsman>
          <Baller></Baller>
          <Counter></Counter>

          {/* <button onclick="handleClick()">Click me</button> */}
          {/* btn system-1 */}
          <button onClick={handleClick}>Click me</button>

          {/* btn system-2 */}
          <button onClick={function handleClick2() { alert('clicked 2') }}>Click me 2</button>

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
