import { FC } from "react";
import { QueryClient, QueryClientProvider } from "react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { WishModel } from "./models/WishModel";
import WishForm from "./pages/AddWish/WishForm";
import WishArchive from "./pages/Archive/WishArchive";
import Navbar from "./pages/Navbar";
import NoPage from "./pages/NoPage";
import WishList from "./pages/WishList/WishList";

const queryClient = new QueryClient({
  defaultOptions: { queries: { refetchOnWindowFocus: false } },
});

const App: FC = () => {
  return (
    <QueryClientProvider client={queryClient}>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<WishList />}></Route>
          <Route path="/wish-list" element={<WishList />}></Route>
          <Route path="/add-wish" element={<WishForm />}></Route>
          <Route path="/edit-wish/:id" element={<WishForm />}></Route>
          <Route path="/archive" element={<WishArchive />}></Route>
          <Route path="*" element={<NoPage />}></Route>
        </Routes>
      </BrowserRouter>
    </QueryClientProvider>
  );
};

export default App;
