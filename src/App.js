import { useEffect } from "react";
import {
  Routes,
  Route,
  useNavigationType,
  useLocation,
} from "react-router-dom";
import FirstLandingPage from "./pages/FirstLandingPage";
import PractitionerSignIn from "./pages/PractitionerSignIn";
import PractitionerLandingPage from "./pages/PractitionerLandingPage";
import ConsumerPreferences from "./pages/ConsumerPreferences";
import ConsumerPreferences1 from "./pages/ConsumerPreferences1";
import ConsumerPreferences2 from "./pages/ConsumerPreferences2";
import ConsumerPreferences3 from "./pages/ConsumerPreferences3";
import ConsumerPreferences4 from "./pages/ConsumerPreferences4";
import PractitionerDetails from "./pages/PractitionerDetails";
import AppointmentCardPractitio from "./pages/AppointmentCardPractitio";
import ServiceDetails from "./pages/ServiceDetails";
import SearchResultsPractitioners from "./pages/SearchResultsPractitioners";
import SearchResultsServices from "./pages/SearchResultsServices";
import ConsumerSignIn from "./pages/ConsumerSignIn";
import ConsumerForgotPassword from "./pages/ConsumerForgotPassword";
import ConsumerResetPassword from "./pages/ConsumerResetPassword";
import ConsumerSignUp from "./pages/ConsumerSignUp";
import ConsumerSignUpEmailVer from "./pages/ConsumerSignUpEmailVer";
import ConsumerProfile from "./pages/ConsumerProfile";
import PractitionerForgotPassword from "./pages/PractitionerForgotPassword";
import ConsumerLandingPage from "./pages/ConsumerLandingPage";
import PractitionerForgotPassword1 from "./pages/PractitionerForgotPassword1";
import PractitionerSignUp from "./pages/PractitionerSignUp";
import PractitionerSignUpVerif from "./pages/PractitionerSignUpVerif";
import PractitionerProfileDetailing from "./pages/PractitionerProfileDetailing";
import PractitionerProfileDetailing1 from "./pages/PractitionerProfileDetailing1";
import PractitionerProfileDetailing2 from "./pages/PractitionerProfileDetailing2";
import PractitionerDashboard from "./pages/PractitionerDashboard";
import Appointments from "./pages/Appointments";
import Inbox from "./pages/Inbox";
import Schedule from "./pages/Schedule";
import Services from "./pages/Services";
import Profile from "./pages/Profile";
import UpdateSchedule from "./pages/UpdateSchedule";
import AddSchedule from "./pages/AddSchedule";
import AddEditServices from "./pages/AddEditServices";

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
      case "/practitioner-sign-in":
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
      case "/appointment-card-practitioner-mobile":
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
      case "/consumer-profile":
        title = "";
        metaDescription = "";
        break;
      case "/practitioner-forgot-password":
        title = "";
        metaDescription = "";
        break;
      case "/consumer-landing-page":
        title = "";
        metaDescription = "";
        break;
      case "/practitioner-forgot-password1":
        title = "";
        metaDescription = "";
        break;
      case "/practitioner-sign-up":
        title = "";
        metaDescription = "";
        break;
      case "/practitioner-sign-up-verification":
        title = "";
        metaDescription = "";
        break;
      case "/practitioner-profile-detailing-01":
        title = "";
        metaDescription = "";
        break;
      case "/practitioner-profile-detailing-02":
        title = "";
        metaDescription = "";
        break;
      case "/practitioner-profile-detailing-03":
        title = "";
        metaDescription = "";
        break;
      case "/practitioner-dashboard":
        title = "";
        metaDescription = "";
        break;
      case "/appointments":
        title = "";
        metaDescription = "";
        break;
      case "/inbox":
        title = "";
        metaDescription = "";
        break;
      case "/schedule":
        title = "";
        metaDescription = "";
        break;
      case "/services":
        title = "";
        metaDescription = "";
        break;
      case "/profile":
        title = "";
        metaDescription = "";
        break;
      case "/update-schedule":
        title = "";
        metaDescription = "";
        break;
      case "/add-schedule":
        title = "";
        metaDescription = "";
        break;
      case "/add-edit-services":
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
      <Route path="/practitioner-sign-in" element={<PractitionerSignIn />} />
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
      <Route
        path="/appointment-card-practitioner-mobile"
        element={<AppointmentCardPractitio />}
      />
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
      <Route path="/consumer-profile" element={<ConsumerProfile />} />
      <Route
        path="/practitioner-forgot-password"
        element={<PractitionerForgotPassword />}
      />
      <Route path="/consumer-landing-page" element={<ConsumerLandingPage />} />
      <Route
        path="/practitioner-forgot-password1"
        element={<PractitionerForgotPassword1 />}
      />
      <Route path="/practitioner-sign-up" element={<PractitionerSignUp />} />
      <Route
        path="/practitioner-sign-up-verification"
        element={<PractitionerSignUpVerif />}
      />
      <Route
        path="/practitioner-profile-detailing-01"
        element={<PractitionerProfileDetailing />}
      />
      <Route
        path="/practitioner-profile-detailing-02"
        element={<PractitionerProfileDetailing1 />}
      />
      <Route
        path="/practitioner-profile-detailing-03"
        element={<PractitionerProfileDetailing2 />}
      />
      <Route
        path="/practitioner-dashboard"
        element={<PractitionerDashboard />}
      />
      <Route path="/appointments" element={<Appointments />} />
      <Route path="/inbox" element={<Inbox />} />
      <Route path="/schedule" element={<Schedule />} />
      <Route path="/services" element={<Services />} />
      <Route path="/profile" element={<Profile />} />
      <Route path="/update-schedule" element={<UpdateSchedule />} />
      <Route path="/add-schedule" element={<AddSchedule />} />
      <Route path="/add-edit-services" element={<AddEditServices />} />
    </Routes>
  );
}
export default App;
