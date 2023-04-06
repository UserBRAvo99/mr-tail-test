import { useState } from 'react';

import headerImg from '../../img/chinese-dog-breeds-4797219-hero-2a1e9c5ed2c54d00aef75b05c5db399c.webp';

import scss from './header.module.scss';

import { FaChevronLeft } from 'react-icons/fa';
import { IoPaw } from 'react-icons/io5';
import MobileMenu from 'components/MobileMenu';

function Header() {
  const [openMenu, setOpenMenu] = useState(false);
  const handlerBtnOpenMenu = event => {
    setOpenMenu(!openMenu);

    document.getElementsByTagName('body')[0].style.overflow = 'scroll';
  };
  return (
    <>
      {openMenu && <MobileMenu handleClick={handlerBtnOpenMenu} />}
      <header className={scss.header}>
        <img src={headerImg} alt="" className={scss.headerImg} />
        <div className={scss.wrapper}>
          <IoPaw className={scss.logoPaw} />
          <button className={scss.btnOpenMenu} onClick={handlerBtnOpenMenu}>
            <FaChevronLeft className={scss.openMenu} />
          </button>
        </div>
      </header>
    </>
  );
}

export default Header;
