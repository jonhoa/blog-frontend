import { useEffect } from 'react';
import reactLogo from './assets/react.svg';
import Header from './Header';
import Footer from './Footer';
import { PostsIndex } from './PostsIndex';
import { Content } from './Content';


function App() {
  return (
    <div>
      <Header/>
      <PostsIndex/>
      <Footer/>
      <Content/>
    </div>
  );
}

export default App;
