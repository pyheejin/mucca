import main_1 from './../media/main-1.png';
import './../App.css';

function Home() {
  return (
    <div className="App">
      <div className="Container">
        <div className='section-left'>
          <img src={main_1} alt="logo"></img>
        </div>
        <div className='section-right'>
          <span className='first'>SAVE A PET​</span>
  ​​​​        <p>DONATE NOW!​</p>
          <div>
            <svg width="88" height="88" viewBox="0 0 88 88" fill="none" xmlns="http://www.w3.org/2000/svg">
              <g filter="url(#filter0_d)">
              <circle cx="44" cy="40" r="40" fill="#E1533C"/>
              </g>
              <path d="M59.1213 42.1213C60.2929 40.9497 60.2929 39.0503 59.1213 37.8787L40.0294 18.7868C38.8579 17.6152 36.9584 17.6152 35.7868 18.7868C34.6152 19.9584 34.6152 21.8579 35.7868 23.0294L52.7574 40L35.7868 56.9706C34.6152 58.1421 34.6152 60.0416 35.7868 61.2132C36.9584 62.3848 38.8579 62.3848 40.0294 61.2132L59.1213 42.1213ZM56 43H57V37H56V43Z" fill="white"/>
              <defs>
              <filter id="filter0_d" x="0" y="0" width="88" height="88" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
              <feFlood flood-opacity="0" result="BackgroundImageFix"/>
              <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"/>
              <feOffset dy="4"/>
              <feGaussianBlur stdDeviation="2"/>
              <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0"/>
              <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow"/>
              <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow" result="shape"/>
              </filter>
              </defs>
            </svg>
          </div>
        </div>
      </div>        
      <div className="Container">
        <div className='volunteer-left'>
          <h1>VOLUNTEER</h1>
          <p>
            I'm a paragraph. Click here to add your own text and edit me. It’s easy. Just click “Edit Text” or double click me and you can start adding your own content and make changes to the font. Feel free to drag and drop me anywhere you like on your page. I’m a great place for you to tell a story and let your users know a little more about you.
          </p>
          <p>
            This is a great space to write long text about your company and your services. You can use this space to go into a little more detail about your company. Talk about your team and what services you provide. Tell your visitors the story of how you came up with the idea for your business and what makes you different from your competitors. Make your company stand out and show your visitors who you are.
          </p>
        </div>
        <div className='volunteer-right'>
          <img src={main_1} width='100px' height='100px' alt="logo"></img>
          <div className='dog'>
            <h1>Dog of the week</h1>
            <span>
              I'm a paragraph. Click here to add your own text and edit me. 
              I’m a great place for you to tell a story and let your users know a little more about you.
            </span>
          </div>
          <img src={main_1} width='100px' height='100px' alt="logo"></img>
          <div className='cat'>
            <h1>Cat of the week</h1>
            <span>
              I'm a paragraph. Click here to add your own text and edit me. 
              I’m a great place for you to tell a story and let your users know a little more about you.
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;