import scss from './mobileMenu.module.scss';

import { FaChevronRight } from 'react-icons/fa';
import { FaTelegramPlane } from 'react-icons/fa';
import { FaFacebookF } from 'react-icons/fa';
import { FaInstagram } from 'react-icons/fa';
import { FaPhoneAlt } from 'react-icons/fa';

function MobileMenu({ handleClick }) {
  document.getElementsByTagName('body')[0].style.overflow = 'hidden';

  return (
    <div className={scss.wrapperMobileMenu}>
      <button onClick={handleClick} className={scss.btnMobileMenu}>
        <FaChevronRight className={scss.closeMenu} />
      </button>
      <nav className={scss.navBlock}>
        <ul className={scss.listMobileMenu}>
          <li className={scss.itemMobileMenu} onClick={handleClick}>
            <a className={scss.linkMobileMenu} href="#cynologists">
              Cynologists
            </a>
          </li>
          <li onClick={handleClick}>
            <a className={scss.linkMobileMenu} href="#services">
              Services
            </a>
          </li>
        </ul>
      </nav>
      <div>
        <ul className={scss.list}>
          <li className={scss.item}>
            <a
              target="blank"
              className={scss.link}
              href="https://www.instagram.com/mr.tail_dogtraining/"
            >
              <FaTelegramPlane className={scss.icon} />
            </a>
          </li>
          <li>
            <a
              target="blank"
              className={scss.link}
              href="https://www.instagram.com/mr.tail_dogtraining/"
            >
              <FaFacebookF className={scss.icon} />
            </a>
          </li>
          <li>
            <a
              target="blank"
              className={scss.link}
              href="https://www.instagram.com/mr.tail_dogtraining/"
            >
              <FaInstagram className={scss.icon} />
            </a>
          </li>
          <li>
            <a
              target="blank"
              className={scss.link}
              href="https://www.instagram.com/mr.tail_dogtraining/"
            >
              <FaPhoneAlt className={scss.icon} />
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default MobileMenu;
