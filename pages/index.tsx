import { GetStaticProps } from "next";
import data from "../_data/data.json";
import ProjectCard from '../components/project-card'
import Layout from '../components/layout'
import SEO from "../components/seo";

interface Portfolio {
  skills: string[];
  certifications: string[];
  experience: string[];
  projects: { title: string; description: string; link: string }[];
  education: string[];
  contact: { email: string; phone: string; location: string };
}

// the Index component is being used to render the data fetched from the data.json file.
const Index = ({ skills, experience, certifications, projects, education, contact }: Portfolio) => {
  return (
    <>
      <SEO
        title="Homepage"
        description="This is the homepage for NFT Marketplace"
        image="https://example.com/image.jpg"
      />
      <Layout title="Home Page">
        <div>
          <div className="py-10 bg-purple-600">
            <div className="container mx-auto px-6">
              <div className="flex flex-col md:flex-row">
                <div className="text-center md:text-left">
                  <h2 className="text-xl font-bold mb-2 text-white">
                    Welcome to NFT Marketplace
                  </h2>
                  <h3 className="text-xl mb-8 text-gray-200">
                  The NFT Rewards Platform is a decentralized application that allows users to earn unique, non-fungible tokens (NFTs) by participating in a variety of events, passing certain tests, and winning competitions. <br></br>
                  By creating a community of engaged users who are interested in earning and collecting unique NFTs, the platform aims to attract a critical customer base and drive user engagement. <br></br>
                  The platform also aims to be profitable for investors by providing a way for them to monetize their NFTs and by creating a marketplace for buying and selling NFTs.<br></br>

                  </h3>
                  <button className="bg-white font-bold rounded-full py-4 px-8 shadow-lg uppercase tracking-wider">
                    Explore
                  </button>
                </div>
              </div>

            </div>
          </div>
          <div className="container mx-auto px-6">
            <div className="text-center">
              <h1 className="text-3xl font-medium mb-4">Featured NFTs</h1>
              <div className="mb-4">Featured NFTs are listed below</div>
            </div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {projects.map((project) => (
              <ProjectCard key={project.title} project={project} />
            ))}
          </div>
        </div>
      </Layout>
    </>
  );
};
// the getStaticProps function is used to fetch the data from the data.json file at BUILD TIME and pass it to the Index component.
export const getStaticProps: GetStaticProps<Portfolio> = async () => {
  return {
    props: {
      skills: data.skills,
      certifications: data.certifications,
      experience: data.experience,
      projects: data.projects,
      education: data.education,
      contact: data.contact,
    },
  };
};

export default Index;
