import scss from './footer.module.scss';

function Footer() {
  return (
    <footer className={scss.footer}>
      <div></div>
      <div id="map">
        <iframe
          className={scss.map}
          title="Mr Tail"
          src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d158.6337455096219!2d30.375432096954448!3d50.49435342864557!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x40d4cd2566e47785%3A0xc0b1a232e2a94b3e!2z0JHQvtGIINCQ0LLRgtC-INCh0LXRgNCy0ZbRgSDQlNC20LXRgNC80LDQvSDQkNCy0YLQvtGB0LXRgNCy0ZbRgQ!5e0!3m2!1suk!2sua!4v1680806516135!5m2!1suk!2sua"
          loading="lazy"
        ></iframe>
      </div>
    </footer>
  );
}

export default Footer;
