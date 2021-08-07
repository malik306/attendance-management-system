import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Register from "./components/register.component";
import Login from "./components/login.component";
import UserDashboard from "./components/userdashboard.component";
import AttendanceDashboard from "./components/attendance.component";
export default function App() {
  return (
    <>
      <Router>
        <Switch>
          <Route path="/" exact />
          <Route path="/login" component={Login} />
          <Route path="/register" component={Register} />
          <Route path="/dashboard" component={UserDashboard} />
          <Route path="/dashboard/attendance" component={AttendanceDashboard} />
        </Switch>
      </Router>
    </>
  );
}
