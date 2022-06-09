import { FC, useContext, useState } from "react";
import { IntlProvider } from "react-intl";
import { QueryClient, QueryClientProvider } from "react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { LanguageContext } from "./contexts/LanguageContext";
import { LOCALES } from "./localisation/locales";
import { messages } from "./localisation/messages";
import WishForm from "./pages/AddWish/WishForm";
import WishArchive from "./pages/Archive/WishArchive";
import Navbar from "./pages/Navbar";
import NoPage from "./pages/NoPage";
import WishList from "./pages/WishList/WishList";


const queryClient = new QueryClient({
  defaultOptions: { queries: { refetchOnWindowFocus: false } },
});

// const locale = LOCALES.UKRAINIAN;

const App: FC = () => {
  const [currentLocale, setCurrentLocale] = useState('');


  return (
    <QueryClientProvider client={queryClient}>
      <IntlProvider
        messages={messages[currentLocale]}
        locale={currentLocale}
        defaultLocale={LOCALES.ENGLISH}
      >
        <BrowserRouter>
        <LanguageContext.Provider value={{currentLocale, setCurrentLocale}}>
          <Navbar/>
          <Routes>
            <Route path="/" element={<WishList />}></Route>
            <Route path="/wish-list" element={<WishList />}></Route>
            <Route path="/add-wish" element={<WishForm />}></Route>
            <Route path="/edit-wish/:id" element={<WishForm />}></Route>
            <Route path="/archive" element={<WishArchive />}></Route>
            <Route path="*" element={<NoPage />}></Route>
          </Routes>
          </LanguageContext.Provider>
        </BrowserRouter>
      </IntlProvider>
    </QueryClientProvider>
  );
};

export default App;
