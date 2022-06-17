import React, {FC, useEffect, useState} from 'react';
import {QueryClient, QueryClientProvider} from 'react-query';
import {BrowserRouter, Routes, Route} from 'react-router-dom';
import {SnackbarProvider} from 'notistack';
import LanguageProvider from './localization/LanguageProvider';
import WishForm from './pages/AddWish/WishForm';
import WishArchive from './pages/Archive/WishArchive';
import Navbar from './components/navbar/Navbar';
import NoPage from './pages/NoPage';
import WishList from './pages/WishList/WishList';
import ErrorService from './services/ErrorService';
import ErrorNotice from './components/notice/ErrorNotice';

const queryClient = new QueryClient({
  defaultOptions: {queries: {refetchOnWindowFocus: false}},
});

const ErrorsStack: FC = () => {
  const [data, setData] = useState<Array<string>>([]);
  // Как следить за изменениями errors
  useEffect(() => {
    setData(ErrorService.getErrors());
  }, [ErrorService.count()]);

  return (
    <div>{data && data.map((error) => <ErrorNotice error={error} />)}</div>
  );
};

const App: FC = () => {
  return (
    <QueryClientProvider client={queryClient}>
      <SnackbarProvider>
        <LanguageProvider>
          <BrowserRouter>
            <Navbar />
            <ErrorsStack />
            <Routes>
              <Route path="/" element={<WishList />} />
              <Route path="/wish-list" element={<WishList />} />
              <Route path="/add-wish" element={<WishForm />} />
              <Route path="/edit-wish/:id" element={<WishForm />} />
              <Route path="/archive" element={<WishArchive />} />
              <Route path="*" element={<NoPage />} />
            </Routes>
          </BrowserRouter>
        </LanguageProvider>
      </SnackbarProvider>
    </QueryClientProvider>
  );
};
export default App;
