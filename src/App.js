import { useEffect } from "react";
import {
  Routes,
  Route,
  useNavigationType,
  useLocation,
} from "react-router-dom";
import FirstLandingPage from "./pages/FirstLandingPage";
import PractitionerLandingPage from "./pages/PractitionerLandingPage";
import ConsumerLandingPage from "./pages/ConsumerLandingPage";
import ConsumerSignIn from "./pages/ConsumerSignIn";
import ConsumerForgotPassword from "./pages/ConsumerForgotPassword";
import ConsumerResetPassword from "./pages/ConsumerResetPassword";
import ConsumerSignUp from "./pages/ConsumerSignUp";
import ConsumerSignUpEmailVer from "./pages/ConsumerSignUpEmailVer";

function App() {
  const action = useNavigationType();
  const location = useLocation();
  const pathname = location.pathname;

  useEffect(() => {
    if (action !== "POP") {
      window.scrollTo(0, 0);
    }
  }, [action, pathname]);

  useEffect(() => {
    let title = "";
    let metaDescription = "";

    switch (pathname) {
      case "/":
        title = "";
        metaDescription = "";
        break;
      case "/practitioner-landing-page":
        title = "";
        metaDescription = "";
        break;
      case "/consumer-landing-page":
        title = "";
        metaDescription = "";
        break;
      case "/consumer-sign-in":
        title = "";
        metaDescription = "";
        break;
      case "/consumer-forgot-password":
        title = "";
        metaDescription = "";
        break;
      case "/consumer-reset-password":
        title = "";
        metaDescription = "";
        break;
      case "/consumer-sign-up":
        title = "";
        metaDescription = "";
        break;
      case "/consumer-sign-up-email-verification":
        title = "";
        metaDescription = "";
        break;
    }

    if (title) {
      document.title = title;
    }

    if (metaDescription) {
      const metaDescriptionTag = document.querySelector(
        'head > meta[name="description"]'
      );
      if (metaDescriptionTag) {
        metaDescriptionTag.content = metaDescription;
      }
    }
  }, [pathname]);

  return (
    <Routes>
      <Route path="/" element={<FirstLandingPage />} />
      <Route
        path="/practitioner-landing-page"
        element={<PractitionerLandingPage />}
      />
      <Route path="/consumer-landing-page" element={<ConsumerLandingPage />} />
      <Route path="/consumer-sign-in" element={<ConsumerSignIn />} />
      <Route
        path="/consumer-forgot-password"
        element={<ConsumerForgotPassword />}
      />
      <Route
        path="/consumer-reset-password"
        element={<ConsumerResetPassword />}
      />
      <Route path="/consumer-sign-up" element={<ConsumerSignUp />} />
      <Route
        path="/consumer-sign-up-email-verification"
        element={<ConsumerSignUpEmailVer />}
      />
    </Routes>
  );
}
export default App;
