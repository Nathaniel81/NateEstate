import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import './App.css';
import { HomePage, CreateListing, ListingDetail, TripList } from './_root/pages';
import { SignInPage, RegisterPage } from './_auth';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const queryClient = new QueryClient();

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <Router>
      <ToastContainer hideProgressBar position='bottom-right'/>
        <Routes>
          <Route index element={<HomePage />} />
          <Route path="/register" element={<RegisterPage />} />
          <Route path="/sign-in" element={<SignInPage  />} />
          <Route path="/create-listing" element={<CreateListing />} />
          <Route path="/properties/:listingId" element={<ListingDetail />} />
          <Route path="/:userId/trips" element={<TripList />} />
        </Routes>
      </Router>
    </QueryClientProvider>
  )
}

export default App
