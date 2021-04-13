import logo from '../../images/icons/logo.png';
import styles from './header.module.scss';

function Header() {
    return (
        <header className={styles.header}>
        <div className="container">
          <div className={styles.header__inner}>
            <a className="logo" href="#">
              <img className="logo__img" src={logo} alt="Img"></img>
            </a>
            <form className="header__form">
                <input className="header__input" placeholder="search"></input>
                <button className="header__btn" type="submit">Search</button>
            </form>
          </div>
        </div>
      </header>
    );
}

export default Header;