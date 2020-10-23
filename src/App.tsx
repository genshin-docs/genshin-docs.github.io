import React from 'react';
import { Row, Col } from 'react-flexbox-grid';
import SideMenu from "./components/SideMenu/SideMenu";
import styles from './App.module.scss';
import storybook from "./docs/storybook.json";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Test from "./pages/Test/Test";
import WelcomePage from "./pages/WelcomePage/WelcomePage";

const App = () => (
  <Router basename={process.env.PUBLIC_URL}>
    <div className={styles.page}>
      <div className={styles.sideMenu}>
        <SideMenu />
      </div>
      <div className={styles.content}>

        <Row className={styles.grid}>
          <Col xsOffset={0} xs={12} smOffset={1} sm={9} mdOffset={2} md={8} lgOffset={2} lg={6}>

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

          </Col>
          <Col xs={0} sm={2} md={4} lg={4}  className={styles.empty}/>
        </Row>
      </div>
    </div>
  </Router>
);

export default App;

