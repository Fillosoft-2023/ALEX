'use client';

import ProjectsSection from './projects/ProjectsSection';

export default function FeaturedProjects({ initialProjects = null, content = null }) {
  return <ProjectsSection initialProjects={initialProjects} content={content} />;
}

