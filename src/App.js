import React from "react";
import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Sidebar from "./components/Sidebar";
import Dashboard from "./pages/Dashboard";
import Analytics from "./pages/Analytics.jsx";
import Comment from "./pages/Comment.jsx";
import Product from "./pages/Product.jsx";
import ProductList from "./pages/ProductList.jsx";
import View from "./pages/curd/View.jsx";
import Edit from "./pages/curd/Edit.jsx";
import LoginPage from "./pages/login/LoginPage";
import InternalCmp from "./components/InternalCmp";
import AddNewUser from "./pages/users/AddNewUser";
import Users from "./pages/users/Users";
import UserDetail from "./pages/users/UserDetails";
import Posts from "./pages/posts/Posts";
import PostDetail from "./pages/posts/PostDetails";

const App = () => {
  return (
    <BrowserRouter>
      {/* <Sidebar> */}
      <Routes>
        <Route path="/" element={<LoginPage />} />
        <Route path="/dashboard" element={<InternalCmp Cmp={Dashboard} />} />
        <Route path="/add-user" element={<InternalCmp Cmp={AddNewUser} />} />
        <Route path="/users" element={<InternalCmp Cmp={Users} />} />
        <Route
          path="/user/:username"
          element={<InternalCmp Cmp={UserDetail} />}
        />
        <Route path="/posts" element={<InternalCmp Cmp={Posts} />} />
        <Route path="/post/:id" element={<InternalCmp Cmp={PostDetail} />} />
        <Route path="/post&comment" element={<Comment />} />
        <Route path="/analytics" element={<Analytics />} />
        <Route path="/product" element={<Product />} />
        <Route path="/productList" element={<ProductList />} />
        <Route path="/view/:username" element={<View />} />
        <Route path="/edit" element={<Edit />} />
      </Routes>
      {/* </Sidebar> */}
    </BrowserRouter>
  );
};

export default App;
