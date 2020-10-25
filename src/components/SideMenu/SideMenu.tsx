import React from 'react';
import classNames from 'classnames';
import { Link, useLocation } from "react-router-dom";
import styles from './SideMenu.module.scss';
import storybook from '../../docs/storybook.json';

interface Props{
  setMenuOpened: (bool: boolean) => void;
}

const SideMenu = ({ setMenuOpened } : Props) => {

  const location = useLocation();

  return(
    <div className={styles.wrapper}>
      <Link to='/' onClick={() => setMenuOpened(false)}>
        <div className={styles.logo}>
          <img src='/images/logo2.png' />
          <div className={styles.title}>Genshin Docs</div>
        </div>
      </Link>

      {
        storybook.map(group =>
          <ul className={styles.group}>
            <div className={styles.title}>{ group.title }</div>
            {
              group.links.map(link =>
                <li className={classNames(styles.link, location.pathname === link.path && styles.selectedLink)}>
                  <Link to={link.path} onClick={() => setMenuOpened(false)}>{ link.title }</Link>
                </li>
              )
            }
          </ul>
        )
      }
    </div>
  )
};

export default SideMenu;