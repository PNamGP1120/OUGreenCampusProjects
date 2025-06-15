import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import Spinner from '../../components/Spinner/Spinner';
import { getProjectById } from '../../services/apiService';
import NotFoundPage from '../NotFoundPage/NotFoundPage';

const ProjectDetailPage = () => {
  const { projectId } = useParams();
  const [project, setProject] = useState(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const loadProject = async () => {
      const data = await getProjectById(projectId);
      setProject(data);
      setIsLoading(false);
    };
    loadProject();
  }, [projectId]);

  if (isLoading) return <div className='center-content'><Spinner /></div>;
  if (!project) return <NotFoundPage />;

  return (
    <div className='page-container'>
      <h1>{project.title}</h1>
      <p>{project.content}</p>
    </div>
  );
};
export default ProjectDetailPage;