import "./intro.scss";
import { init } from 'ityped';
import { useEffect, useRef } from "react";

export default function Intro() {
  const textRef = useRef();

  useEffect(() => {
    init(textRef.current, {
      showCursor: true,
      backDelay:1500,
      backSpeed:60,
      strings: ["들어와주셔 감사합니다.","오늘도 좋은 하루 보내세요"],
    });
  }, []);

  return (
    <div className="intro" id="intro">
      <div className="left">
        <div className="imgContainer">
          <img src="assets/man.png" alt=""/>
        </div>
      </div>
      <div className="right">
          <div className="wrapper">
            <h2>안녕하세요 개발자</h2>
            <h1>임용철 입니다.</h1>
            <h3>
              <span ref={textRef}></span>
            </h3>
          </div>
          <a href="#portfolio">
            <img src="assets/down.png" alt=""/>
          </a>
      </div>
    </div>
  );
}
