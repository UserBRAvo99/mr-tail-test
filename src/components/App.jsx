import Header from './Header';

import scss from './app.module.scss';

export const App = () => {
  return (
    <div
      className={scss.wrapper}
      // style={{
      //   height: '100vh',
      //   display: 'flex',
      //   justifyContent: 'center',
      //   alignItems: 'center',
      //   fontSize: 40,
      //   color: '#010101',
      // }}
    >
      <Header />
    </div>
  );
};
