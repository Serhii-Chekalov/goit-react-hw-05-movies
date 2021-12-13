import { Route, Switch } from "react-router";
import { lazy, Suspense } from "react";
import AppBar from "./Components/AppBar/AppBar";
import { css } from "@emotion/react";
import CircleLoader from "react-spinners/CircleLoader";

const HomePage = lazy(() => import("./Components/HomePage/HomePage.js"));
const MoviesPage = lazy(() => import("./Components/MoviesPage/MoviesPage.js"));
const MovieDetailsPage = lazy(() =>
  import("./Components/MovieDetailsPage/MovieDetailsPage.js")
);

const override = css`
  display: block;
  margin: 0 auto;
  border-color: green;
`;

export default function App() {
  return (
    <>
      <AppBar />
      <Suspense
        fallback={
          <CircleLoader
            color={"rgba(34, 139, 34, 0.452)"}
            loading={true}
            css={override}
            size={60}
          />
        }
      >
        <Switch>
          <Route path="/" exact>
            <HomePage />
          </Route>
          <Route path="/movies" exact>
            <MoviesPage />
          </Route>
          <Route path="/movies/:movieId">
            <MovieDetailsPage />
          </Route>
        </Switch>
      </Suspense>
    </>
  );
}
