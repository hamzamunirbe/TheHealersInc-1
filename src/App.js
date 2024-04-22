import { useEffect } from "react";
import {
  Routes,
  Route,
  useNavigationType,
  useLocation,
} from "react-router-dom";
import FirstLandingPage from "./pages/FirstLandingPage";
import ConsumerLandingPage from "./pages/ConsumerLandingPage";
import PractitionerLandingPage from "./pages/PractitionerLandingPage";
import ConsumerPreferences from "./pages/ConsumerPreferences";
import ConsumerPreferences1 from "./pages/ConsumerPreferences1";
import ConsumerPreferences2 from "./pages/ConsumerPreferences2";
import ConsumerPreferences3 from "./pages/ConsumerPreferences3";
import ConsumerPreferences4 from "./pages/ConsumerPreferences4";
import PractitionerDetails from "./pages/PractitionerDetails";
import ServiceDetails from "./pages/ServiceDetails";
import SearchResultsPractitioners from "./pages/SearchResultsPractitioners";
import SearchResultsServices from "./pages/SearchResultsServices";
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
      case "/consumer-landing-page":
        title = "";
        metaDescription = "";
        break;
      case "/practitioner-landing-page":
        title = "";
        metaDescription = "";
        break;
      case "/consumer-preferences-01":
        title = "";
        metaDescription = "";
        break;
      case "/consumer-preferences-02":
        title = "";
        metaDescription = "";
        break;
      case "/consumer-preferences-03":
        title = "";
        metaDescription = "";
        break;
      case "/consumer-preferences-04":
        title = "";
        metaDescription = "";
        break;
      case "/consumer-preferences-05":
        title = "";
        metaDescription = "";
        break;
      case "/practitioner-details":
        title = "";
        metaDescription = "";
        break;
      case "/service-details":
        title = "";
        metaDescription = "";
        break;
      case "/search-results-practitioners":
        title = "";
        metaDescription = "";
        break;
      case "/search-results-services":
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
      <Route path="/consumer-landing-page" element={<ConsumerLandingPage />} />
      <Route
        path="/practitioner-landing-page"
        element={<PractitionerLandingPage />}
      />
      <Route
        path="/consumer-preferences-01"
        element={<ConsumerPreferences />}
      />
      <Route
        path="/consumer-preferences-02"
        element={<ConsumerPreferences1 />}
      />
      <Route
        path="/consumer-preferences-03"
        element={<ConsumerPreferences2 />}
      />
      <Route
        path="/consumer-preferences-04"
        element={<ConsumerPreferences3 />}
      />
      <Route
        path="/consumer-preferences-05"
        element={<ConsumerPreferences4 />}
      />
      <Route path="/practitioner-details" element={<PractitionerDetails />} />
      <Route path="/service-details" element={<ServiceDetails />} />
      <Route
        path="/search-results-practitioners"
        element={<SearchResultsPractitioners />}
      />
      <Route
        path="/search-results-services"
        element={<SearchResultsServices />}
      />
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
