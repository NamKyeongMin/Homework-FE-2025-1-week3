import { createRoot } from 'react-dom/client';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

import Home from './Home.tsx';
import Join from './Join.tsx';
import Login from './Login.tsx';
import MyPage from './MyPage.tsx';

createRoot(document.getElementById('root')!).render(
  <Router>
    <Routes>
      <Route
        path="/"
        element={<Home />}
      />
      <Route
        path="/join"
        element={<Join />}
      />
      <Route
        path="/login"
        element={<Login />}
      />
      <Route
        path="/mypage"
        element={<MyPage />}
      />
    </Routes>
  </Router>
);
