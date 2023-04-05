import Header from './Header';
import Cynologists from './Cynologists/Cynologists';

import scss from './app.module.scss';

export const App = () => {
  return (
    <div className={scss.wrapper}>
      <Header />
      <div className={scss.container}>
        <Cynologists />
      </div>
    </div>
  );
};
