import React from "react";
import ReactDOM from "react-dom/client";
// import App from './App.jsx'
import "./index.css";

import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./index.css";
import About from "./components/about/About.jsx";
import Contact from "./components/contact/Contact.jsx";
// import Header from './components/header/Header.jsx';
import Home from "./components/home/Home.jsx";
import First from "./components/first/First.jsx";
import Friends from "./components/friends/Friends.jsx";
import FriendDetails from "./components/friendDetails/FriendDetails.jsx";
// import Post from './components/posts/Posts.jsx';
import Posts from "./components/posts/Posts.jsx";
import PostDetails from "./components/postDetails/PostDetails";
import ErrorPage from "./components/errorPage/ErrorPage";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
    children: [
      {
        path: "/",
        element: <First />,
      },
      {
        path: "friends",
        element: <Friends />,
        loader: () => fetch(`https://jsonplaceholder.typicode.com/users`),
      },
      {
        path: "friend/:friendId",
        element: <FriendDetails></FriendDetails>,
        loader: ({ params }) =>
          fetch(
            `https://jsonplaceholder.typicode.com/users/${params.friendId}`
          ),
      },
      {
        path: "/posts",
        element: <Posts></Posts>,
        loader: () => fetch(`https://jsonplaceholder.typicode.com/posts`),
      },
      {
        path: "/post/:postId",
        element: <PostDetails></PostDetails>,
        loader: ({ params }) =>
          fetch(`https://jsonplaceholder.typicode.com/posts/${params.postId}`),
      },
      {
        path: "about",
        element: <About />,
      },
      {
        path: "contact",
        element: <Contact />,
      },
      {
        path: "*",
        element: <ErrorPage />,
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    {/* <App /> */}
    {/* <Header/> */}
    <RouterProvider router={router} />
  </React.StrictMode>
);
