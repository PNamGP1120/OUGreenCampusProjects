import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import MainLayout from '../layouts/MainLayout';
import HomePage from '../pages/HomePage/HomePage';
import ActionPage from '../pages/ActionPage/ActionPage';
import ProjectsPage from '../pages/ProjectsPage/ProjectsPage';
import ProjectDetailPage from '../pages/ProjectDetailPage/ProjectDetailPage';
import NewsPage from '../pages/NewsPage/NewsPage';
import NewsDetailPage from '../pages/NewsDetailPage/NewsDetailPage'; // **THÊM MỚI**
import GreenCornerPage from '../pages/GreenCornerPage/GreenCornerPage';
import ContactPage from '../pages/ContactPage/ContactPage';
import NotFoundPage from '../pages/NotFoundPage/NotFoundPage';

const AppRoutes = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<MainLayout />}>
          <Route path="/" element={<HomePage />} />
          <Route path="/hanh-dong" element={<ActionPage />} />
          <Route path="/du-an" element={<ProjectsPage />} />
          <Route path="/du-an/:projectId" element={<ProjectDetailPage />} />
          <Route path="/tin-tuc" element={<NewsPage />} />
          <Route path="/tin-tuc/:newsId" element={<NewsDetailPage />} /> {/* **THÊM MỚI** */}
          <Route path="/goc-xanh" element={<GreenCornerPage />} />
          <Route path="/lien-he" element={<ContactPage />} />
        </Route>
        <Route path="*" element={<NotFoundPage />} />
      </Routes>
    </BrowserRouter>
  );
};
export default AppRoutes;