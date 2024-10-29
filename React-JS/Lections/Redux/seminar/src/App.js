
import { createContext, useState } from 'react';
import Header from './components/Header';
import Profile from './components/Profile';
import Footer from './components/Footer';
import Loading from './components/Loading';
import Counter from './components/Counter';

export const UserContext = createContext("Guest")
export const ThemeContext = createContext("light")


// const HOC = (Component, isLoading) => {
//   return (props) => {
//     const newProps = {
//       ... props,
//       isLoading,
//     };
//     return <Component {...newProps} />
//   }
// }

export default function App() {
  // const [theme, setThemes] = useState("light");
  // const [user, setUser] = useState('Guest')

  // function changeUser(e) {
  //   let newUser = e.target.closest('div').querySelector('input').value;
  //   setUser(newUser);
  //   newUser = "";
  // }

  // function toggleTheme() {
  //   setThemes((pr) => (pr === 'light' ? 'dark' : 'light'))
  // }

  // const [isLoading, setIsLoading] = useState(true);
  // const NewLoading = HOC(Loading, isLoading);

  // setTimeout(() => {
  //   setIsLoading((pr) => !pr)
  // }, 3000)




  return (
    // <>
    //   <ThemeContext.Provider value={theme}>
    //     <UserContext.Provider value={user}>
    //       <Header />
    //       <div>
    //         <input />
    //         <button onClick={changeUser}>Изменить имя пользователя</button>
    //       </div>
    //       <Profile />
    //       <Footer />
    //       <div>
    //         <button onClick={toggleTheme}> ИЗменить тему</button>
    //       </div>
    //     </UserContext.Provider>
    //   </ThemeContext.Provider>
    // </>
    // <>
    //   <NewLoading />
    // </>
    <>
      <Counter />
    </>
  );
}