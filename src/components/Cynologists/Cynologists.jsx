import Olenka from '../../img/Olenka.jpg';
import scss from './cynologists.module.scss';

import { FaTelegramPlane } from 'react-icons/fa';
import { FaFacebookF } from 'react-icons/fa';
import { FaInstagram } from 'react-icons/fa';
import { FaPhoneAlt } from 'react-icons/fa';

function Cynologists() {
  return (
    <ul className={scss.listCynologists}>
      <li>
        <div>
          <img className={scss.cynologistsImg} src={Olenka} alt="" />
          <div>
            <h3 className={scss.itemTitleCynologists}>Olena Bondarchuk</h3>
            <div className={scss.wrapperSoc}>
              <ul className={scss.listSocCynologists}>
                <li className={scss.itemSocCynologists}>
                  <a
                    className={scss.link}
                    href="https://www.instagram.com/olena__bondarchuk/"
                    target="blank"
                  >
                    <FaTelegramPlane className={scss.icon} />
                  </a>
                </li>
                <li className={scss.itemSocCynologists}>
                  <a
                    className={scss.link}
                    href="https://www.instagram.com/olena__bondarchuk/"
                    target="blank"
                  >
                    <FaFacebookF className={scss.icon} />
                  </a>
                </li>
                <li className={scss.itemSocCynologists}>
                  <a
                    className={scss.link}
                    href="https://www.instagram.com/olena__bondarchuk/"
                    target="blank"
                  >
                    <FaInstagram className={scss.icon} />
                  </a>
                </li>
                <li className={scss.itemSocCynologists}>
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
  );
}

export default Cynologists;
