import Header from './Header';
import Cynologists from './Cynologists/Cynologists';

import scss from './app.module.scss';
import Services from './Services';
import Footer from './Footer';

export const App = () => {
  return (
    <div className={scss.wrapper}>
      <Header />
      <div className={scss.container}>
        <Cynologists />
        <Services />
      </div>
      <Footer />
    </div>
  );
};
