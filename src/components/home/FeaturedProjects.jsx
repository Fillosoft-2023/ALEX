'use client';

import ProjectsSection from './projects/ProjectsSection';

export default function FeaturedProjects({ initialProjects = null }) {
  return <ProjectsSection initialProjects={initialProjects} />;
}
