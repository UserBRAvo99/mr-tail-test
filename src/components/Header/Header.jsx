import scss from './header.module.scss';

function Header() {
  return (
    <header className={scss.header}>
      <div>
        <h1>Тут буде хедер</h1>
      </div>
    </header>
  );
}

export default Header;
