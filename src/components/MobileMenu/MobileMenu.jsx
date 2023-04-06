import scss from './mobileMenu.module.scss';

import { FaChevronRight } from 'react-icons/fa';

function MobileMenu({ handleClick }) {
  document.getElementsByTagName('body')[0].style.overflow = 'hidden';

  return (
    <div className={scss.wrapperMobileMenu}>
      <button onClick={handleClick} className={scss.btnMobileMenu}>
        <FaChevronRight className={scss.closeMenu} />
      </button>
      <ul className={scss.listMobileMenu}>
        <li className={scss.itemMobileMenu} onClick={handleClick}>
          <a className={scss.linkMobileMenu} href="#cynologists">
            Cynologists
          </a>
        </li>
        <li onClick={handleClick}>
          <a href="#services">Services</a>
        </li>
      </ul>
    </div>
  );
}

export default MobileMenu;
