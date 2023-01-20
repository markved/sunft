import Layout from "../components/layout";
import SEO from "../components/seo";

interface Props {
    contact: {
        email: string;
        phone: string;
        location: string;
    };
}

const Contact = ({ contact }: Props) => {
    return (
        <>
            <SEO
                title="Contact"
                description="This is the contact page for my portfolio website"
                image="https://example.com/image.jpg"
            />
            <Layout title="Contact">            
                <div className="bg-white p-4">
                    <h2 className="text-lg font-medium text-gray-800">Contact</h2>
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
            contact: {
                email: process.env.CONTACT_EMAIL,
                phone: process.env.CONTACT_PHONE,
                location: process.env.CONTACT_LOCATION,
            }
        },
    }
}

export default Contact;
