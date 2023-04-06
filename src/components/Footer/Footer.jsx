import scss from './footer.module.scss';

import { FaPhoneAlt } from 'react-icons/fa';
import { FaTelegramPlane } from 'react-icons/fa';
import { FaFacebookF } from 'react-icons/fa';
import { FaInstagram } from 'react-icons/fa';

function Footer() {
  return (
    <footer className={scss.footer}>
      <div className={scss.wrapperContacts}>
        <div>
          <div>
            <h3>Адреса</h3>
            <p>вулиця Стеценка 47</p>
          </div>
          <div>
            <h3>Телефон</h3>
            <p>+380#########</p>
          </div>
        </div>
        <ul className={scss.listFooterSoc}>
          <li className={scss.itemFooterSoc}>
            <a
              target="blank"
              className={scss.linkFooterSoc}
              href="https://www.instagram.com/mr.tail_dogtraining/"
            >
              <FaTelegramPlane className={scss.iconFooterSoc} />
            </a>
          </li>
          <li className={scss.itemFooterSoc}>
            <a
              target="blank"
              className={scss.linkFooterSoc}
              href="https://www.instagram.com/mr.tail_dogtraining/"
            >
              <FaFacebookF className={scss.iconFooterSoc} />
            </a>
          </li>
          <li className={scss.itemFooterSoc}>
            <a
              target="blank"
              className={scss.linkFooterSoc}
              href="https://www.instagram.com/mr.tail_dogtraining/"
            >
              <FaInstagram className={scss.iconFooterSoc} />
            </a>
          </li>
          <li className={scss.itemFooterSoc}>
            <a
              target="blank"
              className={scss.linkFooterSoc}
              href="https://www.instagram.com/mr.tail_dogtraining/"
            >
              <FaPhoneAlt className={scss.iconFooterSoc} />
            </a>
          </li>
        </ul>
      </div>
      <div id="map">
        <iframe
          className={scss.map}
          title="Mr Tail"
          src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d158.6337455096219!2d30.375432096954448!3d50.49435342864557!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x40d4cd2566e47785%3A0xc0b1a232e2a94b3e!2z0JHQvtGIINCQ0LLRgtC-INCh0LXRgNCy0ZbRgSDQlNC20LXRgNC80LDQvSDQkNCy0YLQvtGB0LXRgNCy0ZbRgQ!5e0!3m2!1suk!2sua!4v1680806516135!5m2!1suk!2sua"
          loading="lazy"
        ></iframe>
      </div>
      <div>
        <h3 className={scss.titleFooter}>Mr Tail</h3>
      </div>
    </footer>
  );
}

export default Footer;
