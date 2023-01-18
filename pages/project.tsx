import Layout from "../components/layout";
import data from '../_data/data.json';
import SEO from "../components/seo";
import ProjectCard from "../components/project-card";

interface Props {
  projects: [
    { title: string; description: string; link: string }
  ];
}
const Projects = ({ projects }: Props) => {
  return (
    <>
      <SEO
        title="Project"
        description="This is the project page for my portfolio website"
        image="https://example.com/image.jpg"
      />
      <Layout title="Projects">
        <div className="bg-white p-4">
          <h2 className="text-lg font-medium text-gray-800">Projects</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
            {projects && projects.map((project, index) => (
              <ProjectCard key={index} project={project} />
            ))}
          </div>
        </div>
      </Layout>
    </>
  );
};

export const getStaticProps = async () => {
  return {
    props: {
      projects: data.projects
    },
  }
}

export default Projects;
