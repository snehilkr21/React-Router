import { createBrowserRouter ,RouterProvider} from 'react-router-dom';
import './App.css';
import Home from './component/Home/Home';
import Layout from './component/layout';
import About from './component/About/About';
import Contact from './component/Contact/Contact';
import User from './component/User/User';
import Github,{githubInfoLoader} from './component/Github/Github';
const appRoute = createBrowserRouter([
    {
      path : "/",
      element : <Layout/>,
      children: [
         {
          path : "",
          element : <Home/>
         },
         {
          path : "about",
          element : <About/>
         },
         {
          path : "contact",
          element : <Contact/>
         },
         {
          path : "user/:userId",
          element : <User/>
         },
         {
          path : "github",
          element : <Github/>,
          loader : githubInfoLoader,
         }
      ]
    }
])

function App() {
  return (
    <>
     <RouterProvider router={appRoute}/>
    </>
  );
}

export default App;
