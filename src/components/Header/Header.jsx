import { useState } from 'react';

import headerImg from '../../img/ef97e3b9bd12f4032c31f438f5449b7b.jpeg';

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
