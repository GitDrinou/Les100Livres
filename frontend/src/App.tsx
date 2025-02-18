import * as React from 'react';
import {BrowserRouter, Route, Routes} from "react-router-dom";
import ListOtherBooks from "./pages/ListOtherBooks/ListOtherBooks";
import AddBook from "./pages/AddBook/AddBook";
import Home from "./pages/Home/Home";
import List100Books from "./pages/List100Books/List100Books";
import UpdateBook from "./pages/UpdateBook/UpdateBook";
import Admin from "./pages/Admin/Admin";

const App = () => {

   return (
           <BrowserRouter>
               <Routes>
                   <Route index element={<Home/>} />
                   <Route path={"/100-books"} element={<List100Books/>} />
                   <Route path={"/other-books"} element={<ListOtherBooks/>} />
                   <Route path={"/add-book"} element={<AddBook/>} />
                   <Route path={"/update-book/:bookId"} element={<UpdateBook/>} />
                   <Route path={"/admin"} element={<Admin/>} />
               </Routes>
           </BrowserRouter>
       )
}

export default App;
