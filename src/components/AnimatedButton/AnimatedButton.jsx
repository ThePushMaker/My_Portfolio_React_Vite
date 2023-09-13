// import './AnimatedButtonDesign.css';
import './AnimatedButton.css'

const AnimatedButton = () => {

  return(
<>
<button className="cybr-btn">
  <label className='font-mono'>{'< '}</label>
  {'Contact Me'}<span aria-hidden></span>
  <span className="cybr-btn__tag">New</span>
  <span aria-hidden className="cybr-btn__glitch">
  <label className='font-mono'>{'< '}</label>
  {'Contact Me'}
  <label className='font-mono'>{' />'}</label>
  </span>
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