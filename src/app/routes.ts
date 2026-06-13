import { createBrowserRouter } from "react-router";
import { Layout } from "./components/layout";
import { LandingPage } from "./pages/landing-page";
import { CVPage } from "./pages/cv-page";
import { ProjectsPage } from "./pages/projects-page";
import { FormationsPage } from "./pages/formations-page";
import { CompetencesPage } from "./pages/competences-page";
import { ContactPage } from "./pages/contact-page";

export const router = createBrowserRouter([
  {
    path: "/",
    Component: Layout,
    children: [
      { index: true, Component: LandingPage },
      { path: "cv", Component: CVPage },
      { path: "projets", Component: ProjectsPage },
      { path: "formations", Component: FormationsPage },
      { path: "competences", Component: CompetencesPage },
      { path: "contact", Component: ContactPage },
    ],
  },
]);