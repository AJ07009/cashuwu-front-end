import React from "react";
import Home from "./pages/home/home"; 
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

// const AppLink = () => {
//   return (
//     <section className="App">
//       <Router>
//         <Link to="/">Home</Link>
//         <Route path="/" component={Home} />
//       </Router>
//     </section>
//   );
// };

// function AppLinker(){
//   return(
//     <AppLink />
//   )
// }
function App() {
  return (
   <Home />
    
  );
}

export default App;
