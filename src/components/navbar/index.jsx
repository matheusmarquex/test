import { useState, useEffect } from "react";
import style from "./navbar.module.scss";
import { listMenu } from "./itemMenu.js"
//icons
import { GiHamburgerMenu } from "react-icons/gi";
const Navbar = () => {
  const [isDrop, setIsDrop] = useState(false);
  const [width, setWidth] = useState(0);

  useEffect(() => {
    const width = innerWidth;
    setWidth(width);
  }, []);

  return (
    <div className={style.container}>
      <div className={style.logoAndIcon}>
        <div className={style.logo}>
          <h1>logo</h1>
        </div>
        {width < 700 ? (
          <div className={style.icon} onClick={() => setIsDrop(!isDrop)}>
            <GiHamburgerMenu />
          </div>
        ) : null}
      </div>
      {width > 700 ? (
        <div className={style.menuDesk}>
          {listMenu.map((item, index) => {
            return (
              <div className={style.itemMenu} key={index}>
                <a href={item.link}>{item.item}</a>
              </div>
            );
          })}
        </div>
      ) : null}
      {isDrop ? (
        <div className={style.menu}>
          {listMenu.map((item, index) => {
            return (
              <div className={style.itemMenu} key={index}>
                <a href={item.link}>{item.item}</a>
              </div>
            );
          })}
        </div>
      ) : null}
    </div>
  );
};

export default Navbar;
