import Layout from "../components/layout";
import data from '../_data/data.json';
import SEO from "../components/seo";

interface Props {
    education: string[];
    experience: string[];
    contact: {
        email: string;
        phone: string;
        location: string;
    };
}

const Resume = ({ education, experience, contact }: Props) => {
    return (
        <>
            <SEO
                title="About"
                description="This is the about page for my portfolio website"
                image="https://example.com/image.jpg"
            />
            <Layout title="About">
                <div className="bg-white p-4">
                    <h2 className="text-lg font-medium text-gray-800">Education</h2>
                    {education ? (
                        <ul>
                            {education.map((edu, index) => (
                                <li key={index} className="text-gray-600">
                                    {edu}
                                </li>
                            ))}
                        </ul>
                    ) : (
                        <p>No education information provided.</p>
                    )}
                    <h2 className="text-lg font-medium text-gray-800 mt-4">Experience</h2>
                    <ul>
                        {experience.map((exp, index) => (
                            <li key={index} className="text-gray-600">
                                {exp}
                            </li>
                        ))}
                    </ul>
                    <h2 className="text-lg font-medium text-gray-800 mt-4">Contact</h2>
                    <ul>
                        <li className="text-gray-600">Email: {contact.email}</li>
                        <li className="text-gray-600">Phone: {contact.phone}</li>
                        <li className="text-gray-600">Location: {contact.location}</li>
                    </ul>
                </div>
            </Layout>
        </>
    );
};

export const getStaticProps = async () => {
    return {
        props: {
            education: data.education,
            experience: data.experience,
            contact: data.contact
        },
    }
}

export default Resume;
