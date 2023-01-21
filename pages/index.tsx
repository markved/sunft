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
        description="This is the homepage for my portfolio website"
        image="https://example.com/image.jpg"
      />
      <Layout title="Home Page">
        <div>
          <div className="py-20 bg-hero-blue">
            <div className="container mx-auto px-6">
              {/* <div className="grid grid-cols-7">
                <div className="col-span-1">
                  <img src="https://i.imgur.com/mcbNllL.jpg" alt="Ved Mishra" className="rounded-full h-32 w-32 mx-auto" />
                </div>
                <div className="col-span-6">
                  <h2 className="text-xl font-bold mb-2 text-white">
                    Hello, my name is Ved Mishra!
                  </h2>
                  <h3 className="text-xl mb-8 text-gray-200">
                    17 years experienced full stack engineer with a strong background in designing, developing, and maintaining web and mobile applications.<br></br>
                    Proven success in delivering projects on time and within budget, with a focus on usability and user experience.<br></br>
                    Skilled in working independently and as part of a team, and able to communicate effectively with both technical and non-technical stakeholders.<br></br>
                  </h3>
                  <button className="bg-white font-bold rounded-full py-4 px-8 shadow-lg uppercase tracking-wider">
                    Hire Me
                  </button>
                </div>
              </div> */}
              <div className="flex flex-col md:flex-row">
              <img src="https://i.imgur.com/mcbNllL.jpg" alt="Ved Mishra" className="rounded-full h-32 w-32 mx-auto" />
                <div className="text-center md:text-left">
                  <h2 className="text-xl font-bold mb-2 text-white">
                    Hello, my name is Ved Mishra!
                  </h2>
                  <h3 className="text-xl mb-8 text-gray-200">
                    17 years experienced full stack engineer with a strong background in designing, developing, and maintaining web and mobile applications.<br></br>
                    Proven success in delivering projects on time and within budget, with a focus on usability and user experience.<br></br>
                    Skilled in working independently and as part of a team, and able to communicate effectively with both technical and non-technical stakeholders.<br></br>
                  </h3>
                  <button className="bg-white font-bold rounded-full py-4 px-8 shadow-lg uppercase tracking-wider">
                    Hire Me
                  </button>
                </div>
              </div>

            </div>
          </div>
          <div className="text-center">
            <div className="grid grid-cols-2">
              <div className="col-span-1">
                <h1 className="text-3xl font-medium mb-4">Skills</h1>
                <ul className="list-none pl-5">
                  {skills.map((skill) => (
                    <li key={skill} className="mb-2 text-lg">
                      {skill}
                    </li>
                  ))}
                </ul>
              </div>
              <div className="col-span-1">
                <h1 className="text-3xl font-medium mb-4">Certifications</h1>
                <ul className="list-none pl-5">
                  {certifications.map((certification) => (
                    <li key={certification} className="mb-2 text-lg">
                      {certification}
                    </li>
                  ))}
                </ul>
              </div>
            </div>


            <h1 className="text-3xl font-medium mb-4">Experience</h1>
            <ul className="list-none pl-5">
              {experience.map((exp) => (
                <li key={exp} className="mb-2 text-lg">
                  {exp}
                </li>
              ))}
            </ul>
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
