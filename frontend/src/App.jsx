import "./App.css";
import ScrollToTop from "./components/ScrollToTop.jsx";
import MainRoute from "./routes/mainRoute.jsx";
import { GoogleOAuthProvider } from '@react-oauth/google';


function App() {
  return (
    <div className="App">
      <GoogleOAuthProvider clientId="1039553759473-04hf7inkrh9mb9tu0rn8b6nlnv816mf2.apps.googleusercontent.com">
      <ScrollToTop />
      <MainRoute />
      </GoogleOAuthProvider>
      
    </div>
  );
}

export default App;