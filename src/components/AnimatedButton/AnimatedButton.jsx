// import './AnimatedButtonDesign.css';
import './AnimatedButton.css'

const AnimatedButton = () => {

  return(
<>
<button className="cybr-btn">
  {'< Contact Me />'} Me<span aria-hidden>_</span>
  <span aria-hidden className="cybr-btn__glitch">ContactMe</span>
  <span aria-hidden className="cybr-btn__tag">R25</span>
</button>
<button className="cybr-btn">
  Script<span aria-hidden>_</span>
  <span aria-hidden className="cybr-btn__glitch">Script_</span>
  <span aria-hidden className="cybr-btn__tag">R25</span>
</button>


</>
  );
}

export default AnimatedButton;