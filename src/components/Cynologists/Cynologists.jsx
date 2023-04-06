import Olenka from '../../img/Olenka.jpg';
import scss from './cynologists.module.scss';

import { FaTelegramPlane } from 'react-icons/fa';
import { FaFacebookF } from 'react-icons/fa';
import { FaInstagram } from 'react-icons/fa';
import { FaPhoneAlt } from 'react-icons/fa';

function Cynologists() {
  return (
    <>
      <h2 id="cynologists" className={scss.title}>
        Cynologists
      </h2>
      <ul className={scss.list}>
        <li>
          <div>
            <img className={scss.img} src={Olenka} alt="" />
            <div>
              <h3 className={scss.itemTitle}>Olena Bondarchuk</h3>
              <div className={scss.wrapperSoc}>
                <ul className={scss.listSoc}>
                  <li className={scss.item}>
                    <a
                      className={scss.link}
                      href="https://www.instagram.com/olena__bondarchuk/"
                      target="blank"
                    >
                      <FaTelegramPlane className={scss.icon} />
                    </a>
                  </li>
                  <li className={scss.itemSoc}>
                    <a
                      className={scss.link}
                      href="https://www.instagram.com/olena__bondarchuk/"
                      target="blank"
                    >
                      <FaFacebookF className={scss.icon} />
                    </a>
                  </li>
                  <li className={scss.itemSoc}>
                    <a
                      className={scss.link}
                      href="https://www.instagram.com/olena__bondarchuk/"
                      target="blank"
                    >
                      <FaInstagram className={scss.icon} />
                    </a>
                  </li>
                  <li className={scss.itemSoc}>
                    <a
                      className={scss.link}
                      href="https://www.instagram.com/olena__bondarchuk/"
                      target="blank"
                    >
                      <FaPhoneAlt className={scss.icon} />
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </li>
      </ul>
    </>
  );
}

export default Cynologists;
