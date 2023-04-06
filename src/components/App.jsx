import Header from './Header';
import Cynologists from './Cynologists/Cynologists';

import scss from './app.module.scss';
import Services from './Services';

export const App = () => {
  return (
    <div className={scss.wrapper}>
      <Header />
      <div className={scss.container}>
        <Cynologists />
        <Services />
      </div>
    </div>
  );
};
