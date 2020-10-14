import React, { useEffect } from 'react';
import Home from './pages/Home';
import Progressbar from './components/layout/Progressbar';
import DefaultLayout from './components/layout/DefaultLayout';
import ImagesLoaded from 'react-images-loaded';
import './assets/styles/style.scss';

function App() {
  //const [loading, setLoading] = useState(false);
  // useEffect( ()=> {
  //   const setLoading = () => {
  //     console.log("힛");
  //   };
  //   setLoading();
  // }, []);

  const handleOnProgress = () => {
    console.log('진행');
  };
  const handleOnFail = () => {
    console.log('실패');
  };
  const handleDone = () => {
    console.log('완료');
  };
  return (
    <ImagesLoaded
      onProgress={handleOnProgress}
      onFail={handleOnFail}
      done={handleDone}
      background=".image" // true or child selector
    >
      {/* <Progressbar count={0} /> */}
      <div className="wrapper">
        <DefaultLayout />
        <Home />
      </div>
    </ImagesLoaded>
  );
}

export default App;
