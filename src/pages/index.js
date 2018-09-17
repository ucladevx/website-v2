import Home from "./home";
import Recruitment from "./recruitment";

const pageRoutes = {
  home: {
    component: Home,
    path: "/",
    exact: true
  },
  recruitment: {
    component: Recruitment,
    path: "/recruitment",
    exact: true
  }
};

export default pageRoutes;
