import { Routes, Route } from "react-router-dom";
import About from "./components/About";
import Categories from "./components/Categories";
import Category from "./components/Category";
import { Header } from "./components/Header";
import Home from "./components/Home";
import Session from "./components/Session";
import Register from "./components/Register";
import Confirmation from "./components/Confirmation";
function App() {
  return (
    <div className="App">
      <Header />
      <Routes>
        <Route path="/" element={<Home title="SWAMii" />} />
        <Route path="about" element={<About />} />
        <Route path="categories" element={<Categories />}>
          <Route path=":catId" element={<Category />}>
            <Route path=":sessionId" element={<Session />} />
          </Route>
          <Route index element={<h3>Select a category from above list</h3>} />
        </Route>
        <Route path="register" element={<Register />} />
        <Route path="confirmed" element={<Confirmation />} />
        <Route path="*" element={<h1>404: page not found</h1>} />
      </Routes>
    </div>
  );
}

export default App;
