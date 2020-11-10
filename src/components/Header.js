import logo from './../media/logo.png';
import Home from './Home';
import Home2 from './Home2';
import Slider from './Slider';
import Login from './Login';
import Register from './Register';
// import Users from './Users';
import { BrowserRouter, Route, Link } from "react-router-dom"
import './../App.css';

function Header() {
  return (
    <BrowserRouter>
    <div className="App">
      <header>
        <Link to='/'><img src={logo} height='80px' alt="logo"></img></Link>
        <ul className='login'>
          <li><Link to='/login' className='login'>Login</Link></li>
          <li><Link to='/register' className='login'>Register</Link></li>
          {/* <li><Link to='/users' className='login'>Users</Link></li> */}
        </ul>
        <ul>
          <li><Link to='/'>홈</Link></li>
          <li>무카 소개</li>
          <li>무카 활동</li>
          <li>참여하기</li>
          <li>새 소식</li>
          <li>정기 후원</li>
        </ul>
        <Route exact path="/" component={Home} />
        <Route exact path="/" component={Slider} />
        <Route exact path="/" component={Home2} />
        <Route exact path="/login" component={Login} />
        <Route exact path="/register" component={Register} />
        {/* <Route exact path="/" component={Users} /> */}
      </header>
    </div>
    </BrowserRouter>
  );
}

export default Header;
