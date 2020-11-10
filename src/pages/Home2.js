import './../App.css';

function Header() {
  return (
    <div className="Container">
      <div className='event'>
        <div className='event-left'>
          <div className='prl-20'>
            <h1 className='title'>VOLUNTEER</h1>
            <p>
              I'm a paragraph. Click here to add your own text and edit me. It’s easy. Just click “Edit Text” or double click me and you can start adding your own content and make changes to the font. Feel free to drag and drop me anywhere you like on your page.
            </p>
            <p>
              This is a great space to write long text about your company and your services. You can use this space to go into a little more detail about your company. Talk about your team and what services you provide. Tell your visitors the story of how you came up with the idea for your business and what makes you different from your competitors.
            </p>
          </div>
        </div>
        <div className='event-right'>
          <div className='prl-20'>
            <div>
              <h1 className='title'>EVENTS</h1>
              <span>
                Special Adoption Day at Golden Gate Park - 1/11/23, 1pm​
                I'm a paragraph. Click here to add your own text and edit me. I’m a great place for you to tell a story and let your users know a little more about you.
              </span>
            </div>
            <div>
              <h1 className='title'>EVENTS</h1>
              <span>
                I'm a paragraph. Click here to add your own text and edit me. 
                I’ m a great place
                for you to tell a story and
                let your users know a little more about you.
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Header;
