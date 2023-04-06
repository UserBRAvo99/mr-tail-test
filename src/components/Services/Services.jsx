import dog from '../../img/dog.png';

import scss from './services.module.scss';

function Services() {
  return (
    <>
      <h2 id="services" className={scss.title}>
        Services
      </h2>
      <ul className={scss.list}>
        <li>
          <section>
            <img className={scss.img} src={dog} alt="" />
            <div>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Animi
                reiciendis iste, facere quos dolorem at soluta ducimus
                recusandae suscipit molestias, nisi laudantium! Corporis
                accusantium consequatur sunt ad voluptatem in asperiores.
              </p>
            </div>
          </section>
        </li>
      </ul>
    </>
  );
}

export default Services;
