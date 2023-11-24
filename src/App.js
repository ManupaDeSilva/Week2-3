import { useEffect } from "react";
import {
  Routes,
  Route,
  useNavigationType,
  useLocation,
} from "react-router-dom";
import Booking from "./pages/Booking";
import Rugby from "./pages/Rugby";
import Volleyball from "./pages/Volleyball";
import Tennis from "./pages/Tennis";
import Tabletennis from "./pages/Tabletennis";
import Netball from "./pages/Netball";
import Hockey from "./pages/Hockey";
import Carrom from "./pages/Carrom";
import Badminton from "./pages/Badminton";
import Baseball from "./pages/Baseball";

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
      case "/rugby":
        title = "";
        metaDescription = "";
        break;
      case "/volleyball":
        title = "";
        metaDescription = "";
        break;
      case "/tennis":
        title = "";
        metaDescription = "";
        break;
      case "/tabletennis":
        title = "";
        metaDescription = "";
        break;
      case "/netball":
        title = "";
        metaDescription = "";
        break;
      case "/hockey":
        title = "";
        metaDescription = "";
        break;
      case "/carrom":
        title = "";
        metaDescription = "";
        break;
      case "/badminton":
        title = "";
        metaDescription = "";
        break;
      case "/baseball":
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
      <Route path="/" element={<Booking />} />
      <Route path="/rugby" element={<Rugby />} />
      <Route path="/volleyball" element={<Volleyball />} />
      <Route path="/tennis" element={<Tennis />} />
      <Route path="/tabletennis" element={<Tabletennis />} />
      <Route path="/netball" element={<Netball />} />
      <Route path="/hockey" element={<Hockey />} />
      <Route path="/carrom" element={<Carrom />} />
      <Route path="/badminton" element={<Badminton />} />
      <Route path="/baseball" element={<Baseball />} />
    </Routes>
  );
}
export default App;
