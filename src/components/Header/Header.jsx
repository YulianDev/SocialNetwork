import logo from '../../assets/images/icons/logo.png';
import styles from './header.module.scss';
import {NavLink} from "react-router-dom";

function Header(props) {
    return (
        <header className={styles.header}>
        <div className="container">
          <div className={styles.header__inner}>
            <a className="logo" href="#">
              <img className="logo__img" src={logo} alt="Img"></img>
            </a>
              <div className="innerWreapper">
                  <form className="header__form">
                      <input className="header__input" placeholder="search"></input>
                      <button className="header__btn" type="submit">Search</button>
                  </form>
                  <div className="loginBox">
                      {props.isAuth ? <div>{props.login}</div> : <NavLink to='/login'>Login</NavLink>}
                  </div>
              </div>

          </div>
        </div>
      </header>
    );
}

export default Header;