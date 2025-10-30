
import React, { useEffect } from 'react';
import { Routes, Route, useLocation, Navigate } from 'react-router-dom';
import { Toaster } from '@/components/ui/toaster';
import Home from '@/pages/Home';
import Guides from '@/pages/Guides';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

// Blog Pages
import CostOfLiving from '@/pages/blogs/CostOfLiving';
import MovingToAruba from '@/pages/blogs/MovingToAruba';
import RentingVsBuying from '@/pages/blogs/RentingVsBuying';
import BestNeighborhoods from '@/pages/blogs/BestNeighborhoods';
import MortgageMistakes from '@/pages/blogs/MortgageMistakes';

function App() {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return (
    <div className="min-h-screen bg-background flex flex-col relative-z">
      <Navbar />
      <main className="flex-grow relative-z">
        <Routes>
          <Route path="/" element={<Home />} />
          {/* New Aruba routes with /aw/ prefix */}
          <Route path="/aw/guides" element={<Guides />} />
          <Route path="/aw/guides/cost-of-living-in-aruba" element={<CostOfLiving />} />
          <Route path="/aw/guides/moving-to-aruba" element={<MovingToAruba />} />
          <Route path="/aw/guides/renting-vs-buying-in-aruba" element={<RentingVsBuying />} />
          <Route path="/aw/guides/best-neighborhoods-to-buy-a-home-in-aruba" element={<BestNeighborhoods />} />
          <Route path="/aw/guides/5-common-mortgage-mistakes-in-aruba" element={<MortgageMistakes />} />
          {/* Redirects from old URLs to new /aw/ URLs for SEO */}
          <Route path="/guides" element={<Navigate to="/aw/guides" replace />} />
          <Route path="/guides/cost-of-living-in-aruba" element={<Navigate to="/aw/guides/cost-of-living-in-aruba" replace />} />
          <Route path="/guides/moving-to-aruba" element={<Navigate to="/aw/guides/moving-to-aruba" replace />} />
          <Route path="/guides/renting-vs-buying-in-aruba" element={<Navigate to="/aw/guides/renting-vs-buying-in-aruba" replace />} />
          <Route path="/guides/best-neighborhoods-to-buy-a-home-in-aruba" element={<Navigate to="/aw/guides/best-neighborhoods-to-buy-a-home-in-aruba" replace />} />
          <Route path="/guides/5-common-mortgage-mistakes-in-aruba" element={<Navigate to="/aw/guides/5-common-mortgage-mistakes-in-aruba" replace />} />
        </Routes>
      </main>
      <Footer />
      <Toaster />
    </div>
  );
}

export default App;
