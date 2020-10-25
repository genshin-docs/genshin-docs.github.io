import React, {useState} from 'react';
import SideMenu from "./components/SideMenu/SideMenu";
import styles from './App.module.scss';
import storybook from "./docs/storybook.json";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Test from "./pages/Test/Test";
import WelcomePage from "./pages/WelcomePage/WelcomePage";
import { ReactComponent as MenuIcon } from './assets/icons/menu.svg';

import { useMediaQuery } from 'react-responsive';

const App = () => {

  const [menuOpened, setMenuOpened] = useState(false);
  const isMobile = useMediaQuery({ query: '(max-width: 768px)' })

  return(
    <Router basename={process.env.PUBLIC_URL}>
      <div className={styles.page}>

        <div style={{ marginLeft: menuOpened ? 250 : 0 }} className={styles.sideMenu}>
          <SideMenu setMenuOpened={setMenuOpened} />
        </div>

        <div style={{ marginLeft: menuOpened ? 250 : 0 }} className={styles.contentWrapper}>

          {
            isMobile &&
            <div className={styles.header}>
              <MenuIcon className={styles.menuIcon} onClick={() => setMenuOpened(!menuOpened)} />
              <div className={styles.title}>Genshin Docs</div>
              <div></div>
            </div>
          }

          <div className={styles.content}>
            {
              storybook.map(group =>
                group.links.map(page =>
                  <Route path={page.path}>
                    <Test page={page} />
                  </Route>
                )
              )
            }
            <Route exact path='/'>
              <WelcomePage />
            </Route>
          </div>

        </div>
      </div>
    </Router>
  )
}

export default App;

