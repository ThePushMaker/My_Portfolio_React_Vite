import { useEffect, useState } from "react";
import headerImg from "../../assets/img/pfp/difuminado2.png";
import './Banner.css';

const description = 
<span>
  I{"'"}m Martín Calderón a 23-years-old 
  <a target="_blank" rel="noreferrer" href="https://www.google.com/search?q=Full+Stack+Developer&oq=Full+Stack+Developer&aqs=chrome..69i57j0i512l9.387j0j7&sourceid=chrome&ie=UTF-8&bshm=rimc/1">
    <span className="text-link_color hover:text-link_color_hover">
      <strong> Full Stack Web Developer </strong>
    </span>
  </a>
  who{"'"}s passionate about all forms of virtual art creation. There{"'"}s nothing that fascinates me more than well-structured systems that not only function but also have something fascinating to communicate to the world.
</span>

const Banner = () => {
  const [loopNum, setLoopNum] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  const [text, setText] = useState('');
  const [delta, setDelta] = useState(300 - Math.random() * 100);
  const period = 1700;
  const [fontSize, setFontSize] = useState(16); // Tamaño de fuente inicial en píxeles

  const toRotate = [
                      'Full Stack Web Developer',
                      'Web Designer', 
                      'YouTube Educator',
                      'Code Blog Author',
                    ]
  useEffect(() => {
    // Calcula el nuevo tamaño de fuente basado en la longitud del texto
    const newFontSize = Math.min(35, 700 / text.length); // h,w; Ajusta los valores mínimo y máximo según tus necesidades
    setFontSize(newFontSize);
  }, [text]);
  
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
      setDelta(250);
    }

  }

  return(
    <>
      <section className="banner  px-6 md:px-14 lg:px-20" id="home">
        <div className="container mx-auto flex">
          <div className="items-center flex flex-wrap">
            <div className="w-full md:w-1/2 lg:w-7/12">
              <div>
                <span className="tagline">Welcome to my portfolio</span>
                <h1 className="text-4xl md:text-5xl lg:text-5xl">{"Hi, I'm Martín Calderón! "}
                  <div className="h-16 md:h-[90px] lg:h-12 mt-2">
                    <span className="wrap text-highlighted_text_color" style={{ fontSize: `${fontSize}px` }}>{text}</span>
                  </div>
                </h1>
                <p className="mb-2">{description}</p>
                <p>Follow me on <a className="text-link_color hover:text-link_color_hover" target="_blank" rel="noreferrer" href="https://linktr.ee/martin_calderon"> my social media</a>.</p>
              </div>
              <div>
                <button className="mt-4" onClick={() => console.log('connect')}>
                  <label className="text-link_color hover:text-link_color_hover">
                    <a href="#contact">{"Let's Connect!"}</a>
                  </label>
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" width="25" height="25" fill="currentColor"><path fillRule="evenodd" d="M1 8a7 7 0 1 0 14 0A7 7 0 0 0 1 8zm15 0A8 8 0 1 1 0 8a8 8 0 0 1 16 0zM4.5 7.5a.5.5 0 0 0 0 1h5.793l-2.147 2.146a.5.5 0 0 0 .708.708l3-3a.5.5 0 0 0 0-.708l-3-3a.5.5 0 1 0-.708.708L10.293 7.5H4.5z"></path></svg>
                </button>
              </div>
            </div>
            <div className="w-full md:w-1/2 lg:w-5/12 mt-16 md:pl-6">
              <div>
                <img className="w-64 m-auto md:w-80 lg:m-0 lg:w-[400px] rounded-full opacity-[92%] shadow-2xl" src={headerImg} alt="Header Img" />
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default Banner;