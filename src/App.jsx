import Register from "./pages/Reg";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import NotFoundPage from "./pages/NotFoundPage";

function App() {
  return (
    <BrowserRouter>
    <Routes>
       <Route path="/"element={<Register/>}/>
       <Route path="/register"element={<Register/>}/>
       <Route path="/home"element={<Register/>}/>
       <Route path="/genres"element={<Register/>}/>
       <Route path="/carousel"element={<Register/>}/>
       <Route path="/dashboard"element={<Register/>}/>
       <Route path="movies"element={<Register/>}/>
       <Route path="*"element={<NotFoundPage/>}/>

    </Routes>
    </BrowserRouter>
  );
}

export default App;
