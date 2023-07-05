import { Routes, BrowserRouter, Route } from "react-router-dom"
import { useSelector } from "react-redux";
import './App.css';
import LoginForm from './components/LoginForm';
import Profile from './components/Profile';
import TodoList from "./components/TodoList";
import { useState } from "react";


function App() {

  const { isLoggedIn } = useSelector((state) => state.auth);
  const [isEdit, setIsEdit] = useState(false);
  const { user: currentUser } = useSelector((state) => state.auth)

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
        </Routes>
      </BrowserRouter>

    </div>
  );
}

export default App;
