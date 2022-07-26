import "./assets/css/App.scss";
import "./assets/css/tailwind.generated.css";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import SignupWithEmail from "./pages/SignupWithEmail";
import ForgotPassword from "./pages/ForgotPassword";
import Otp from "./pages/Otp";
import Home from "./pages/home";
import MyCourses from "./pages/my-courses";
import WishList from "./pages/wishlist";
import MyCart from "./pages/my-cart";
import Results from "./pages/results";
import Attendance from "./pages/attendance";
import Certificates from "./pages/certificates";
import Notifications from "./pages/notifications";
import MyProfile from "./pages/profile";
import PaymentMethod from "./pages/paymentMethod";
import Settings from "./pages/settings";
import ErrorPage from "./pages/ErrorPage";
import ProtectedRoute from './ProtectedRoute';
import SaveNewPassword from './pages/saveNewPassword';

function App() {
  return (
    <Router>
       <Switch>
        <Route exact path="/" component={Login} />
        <Route exact path="/signup" component={Signup} />
        <Route exact path="/signup-with-email" component={SignupWithEmail} />
        <Route exact path="/forgot-password" component={ForgotPassword} />
        <Route exact path="/save-new-password" component={SaveNewPassword} />
        <Route exact path="/account-verification" component={Otp} />
        <ProtectedRoute exact path="/dashboard" component={Home} />
        <ProtectedRoute exact path="/my-courses" component={MyCourses} />
        <ProtectedRoute exact path="/wishlist" component={WishList} />
        <ProtectedRoute exact path="/my-cart" component={MyCart} />
        <ProtectedRoute exact path="/results" component={Results} />
        <ProtectedRoute exact path="/attendance" component={Attendance} />
        <ProtectedRoute exact path="/certificates" component={Certificates} />
        <ProtectedRoute exact path="/notifications" component={Notifications} />
        <ProtectedRoute exact path="/profile" component={MyProfile} />
        <ProtectedRoute exact path="/payment-method" component={PaymentMethod} />
        <ProtectedRoute exact path="/settings" component={Settings} />
        <Route path="*" component={ErrorPage} />
      </Switch>
    </Router>
  );
}

export default App;
