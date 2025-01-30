import "./Header.css";

const Header = () => {
  const links = [
    {
      id: 0,
      name: "Home",
      path: "/",
    },
    {
      id: 1,
      name: "Gallery",
      path: "/gallery",
    },
    {
      id: 2,
      name: "About",
      path: "/about",
    },
  ];

  return (
    <header>
      <h1>My App</h1>
      <nav>
        <ul>
          {links.map((link) => (
            <li key={link.id}>
              <a href={link.path}>{link.name}</a>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  );
};

export default Header;
