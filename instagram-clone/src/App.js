import withAuthenticate from './auth/withAuthenticate';
import Login from "./components/Login/Login";
import PostsPage from './components/PostsPage/PostsPage';
import "./App.scss";

export default withAuthenticate(PostsPage)(Login);