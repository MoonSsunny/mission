import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import LoginPage from './components/login_page/login_page';
import RegisterPage from './components/register_page/register_page';
import ServicePage from './components/service_page/service_page';
import Mypage from './components/service_page/mypage';
import MypageDetail from './components/service_page/mypage_detail';

function App() {
  return (
    <>
      <Router>
        <Switch>
          <Route path="/sign-up" component={RegisterPage} />
          <Route path="/login" component={LoginPage} />
          <Route exact path="/" component={ServicePage} />
          <Route path="/mypage/order/:id" exact component={MypageDetail} />
          <Route path="/mypage/order" exact component={Mypage} />
        </Switch>
      </Router>
    </>
  );
}

export default App;
