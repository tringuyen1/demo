import { Routes, BrowserRouter, Route } from "react-router-dom"
import { useSelector } from "react-redux";
import './App.css';
import LoginForm from './components/LoginForm';
import Profile from './components/Profile';
import TodoList from "./components/TodoList";
import AddUser from "./components/AddUser"


function App() {

  const { isLoggedIn } = useSelector((state) => state.auth);

  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<LoginForm />} />
          {isLoggedIn && (
            <Route path="/profile/:id?" element={<Profile />} />
          )}
          {isLoggedIn && (
            <Route path="/todoList" element={<TodoList />} />
          )}
          {isLoggedIn && (
            <Route path="/add" element={<AddUser />} />
          )}
        </Routes>
      </BrowserRouter>

    </div>
  );
}

export default App;
