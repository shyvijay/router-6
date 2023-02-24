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
  const title = "SWAMii Technology and Business Solutions";
  return (
    <div className="App">
      <Header />
      <Routes>
        <Route path="/" element={<Home title={title} />} />
        <Route path="about" element={<About title={title} />} />
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
