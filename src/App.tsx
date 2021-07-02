import React from "react";
import {
  BrowserRouter as Router,
  Route,
  Switch,
} from "react-router-dom";

import Home from "./pages/home";
import PostDetail from "./pages/post-detail";
import UserProfile from "./pages/user-profile";
import Photos from "./pages/photos";
import { QueryClient, QueryClientProvider } from "react-query";
import AppContextWrapper from "context";

const queryClient = new QueryClient();

function App() {
  return (
    <AppContextWrapper>
      <div className="App">
        <Router>
          <Switch>
            <Route path="/" exact>
              <Home />
            </Route>
            <Route path="/user/:id" exact>
              <UserProfile />
            </Route>
            <Route path="/posts/:id" exact>
              <PostDetail />
            </Route>
            <Route path="/photos/:id" exact>
              <Photos />
            </Route>
          </Switch>
        </Router>
      </div>
    </AppContextWrapper>
  );
}

export default App;
