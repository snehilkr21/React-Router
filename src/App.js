import { createBrowserRouter ,RouterProvider,Route,createRoutesFromElements} from 'react-router-dom';
import './App.css';
import Home from './component/Home/Home';
import Layout from './component/layout';
import About from './component/About/About';
import Contact from './component/Contact/Contact';
import User from './component/User/User';
import Github,{githubInfoLoader} from './component/Github/Github';
import Me from './component/About/Me/Me';
import AboutLayout from './component/About/AboutLayout';

// const router = createBrowserRouter([
//     {
//       path : "/",
//       element : <Layout/>,
//       children: [
//          {
//           path : "",
//           element : <Home/>
//          },
//          {
//           path : "about",
//           element : <AboutLayout/>,
//           children : [
//              {
//               path : "",
//               element : <About/>
//              },
//              {
//               path : "me",
//               element : <Me/>
//              }
//           ]
//          },
//          {
//           path : "contact",
//           element : <Contact/>
//          },
//          {
//           path : "user/:userId",
//           element : <User/>
//          },
//          {
//           path : "github",
//           element : <Github/>,
//           loader : githubInfoLoader,
//          }
//       ]
//     }
// ])

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path='/' element={<Layout />}>
      <Route path='' element={<Home />} />
      <Route path='about' element={<AboutLayout />} >
        <Route path='' element={<About/>}/>
        <Route path='me' element={<Me/>}/>
      </Route>
      <Route path='contact' element={<Contact />} />
      <Route path='user/:userid' element={<User />} />
      <Route 
          loader={githubInfoLoader}
          path='github' 
          element={<Github />}
       />
    </Route>
  )
)

function App() {
  return (
    <>
     <RouterProvider router={router}/>
    </>
  );
}

export default App;
