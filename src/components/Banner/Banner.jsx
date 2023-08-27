import { useEffect, useState } from "react";
import headerImg from "../../assets/img/3.jpg";
import './Banner.css';

const Banner = () => {
  const [loopNum, setLoopNum] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  const [text, setText] = useState('');
  const [delta, setDelta] = useState(300 - Math.random() * 100);
  const period = 1700;
  const toRotate = [
                      'Full Stack Web Developer',
                      'Web Designer', 
                      'Database Developer',
                      'Fronted Developer', 
                      'Backend Developer' 
                    ]

  useEffect(() => {
    let ticker = setInterval(() => {
      tick();
    }, delta);
    return () => clearInterval(ticker);
  }, [text]);

  const tick = () => {
    let i = loopNum % toRotate.length;
    let fullText = toRotate[i];
    let updatedText = isDeleting ? 
                    ( fullText.substring(0, text.length - 1 )) 
                    : 
                    ( fullText.substring(0, text.length + 1 ));
    setText(updatedText);
    if (isDeleting) {
      setDelta(prevDelta => prevDelta / 2);
    }
    if (!isDeleting && updatedText === fullText) {
      setIsDeleting(true);
      setDelta(period);
    } else if (isDeleting && updatedText === '') {
      setIsDeleting(false);
      setLoopNum(loopNum + 1);
      setDelta(500);
    }

  }

  return(
    <>
      <section className="banner" id="home">
        <div className="container">
          <div className="items-center flex flex-wrap">
            <div className="w-full md:w-1/2 xl:w-7/12">
              <div>
                <span className="tagline">Welcome to my portfolio</span>
                <h1>{"Hi, I'm Martín Calderón! "}
                  <div className="lg:h-14">
                    <span className="wrap">{text}</span>
                  </div>
                </h1>
                <p className="mb-2">I'm Martín Calderón a 23-years-old Full Stack Web Developer who's passionate about all forms of virtual art creation. There's nothing that fascinates me more than well-structured systems that not only function but also have something profound to communicate to the world.</p>
                <p>Follow me on <a className="text-enlace hover:text-enlace_hover" target="_blank" href="https://linktr.ee/martin_calderon"> my social media</a>.</p>
              </div>
              <div>
                <button className="mt-4" onClick={() => console.log('connect')}>
                  <label className="text-enlace hover:text-enlace_hover">
                    Let's Connect!
                  </label>
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" width="25" height="25" fill="currentColor"><path fill-rule="evenodd" d="M1 8a7 7 0 1 0 14 0A7 7 0 0 0 1 8zm15 0A8 8 0 1 1 0 8a8 8 0 0 1 16 0zM4.5 7.5a.5.5 0 0 0 0 1h5.793l-2.147 2.146a.5.5 0 0 0 .708.708l3-3a.5.5 0 0 0 0-.708l-3-3a.5.5 0 1 0-.708.708L10.293 7.5H4.5z"></path></svg>
                </button>
              </div>
            </div>
            <div className="w-full md:w-1/2 xl:w-5/12">
              <div>
                <img className="lg:mx-auto lg:w-80 rounded-full" src={headerImg} alt="Header Img" />
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default Banner;