import { StrictMode } from "react";
import ReactDOM from "react-dom/client";
import { RouterProvider } from "react-router-dom";
import { router } from "routes";
import "styles/_global.scss";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

const rootElement = document.querySelector("#root") as Element;

ReactDOM.createRoot(rootElement!).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
);
