import React, { useEffect, useRef, useState } from 'react';
import './CSS/App.css';
import Header from "./components/Header";
import Hero from "./components/Hero";
import Footer from "./components/Footer";
import HeroSecond from "./components/HeroSecond";
import Slider from "./components/Slider";
import useIntersection from "./components/hooks/useIntersection";
import { disableBodyScroll } from "body-scroll-lock";




function App() {
  const[scrollable, setScrollable] = useState(false)
  const refList = useRef()
  const refContainer = useRef()
  const inViewport = useIntersection(refList)

  useEffect(() => {
    if (inViewport) {
      disableBodyScroll(refList);
      setScrollable(true)
    }
  }, [inViewport]);

  const onWheel = (element) => {
    const el = refList.current;
    if (el && scrollable) {
      if (element.deltaY === 0) {return};
      el.scrollTo({
        left: el.scrollLeft + element.deltaY,
      });
    }
  }

  return (
    <div className="App" ref={refContainer} onWheel={onWheel}>
      <Header />
      <Hero />
      <Slider refList={refList} setScrollable={setScrollable}/>
      <HeroSecond />
      <Footer />
    </div>
  );
}

export default App;
