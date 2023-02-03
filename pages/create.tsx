import Layout from "../components/layout";
import SEO from "../components/seo";
import { PrismaClient } from "@prisma/client";
let prisma = new PrismaClient();
interface Props {
    event: {
        type: string;
        name: string;
        description: string;
    };
}

const Create = ({ event }: Props) => {
    return (
        <>
            <SEO
                title="Contact"
                description="This is the event page for NFT website"
                image="https://example.com/image.jpg"
            />
            <Layout title="Create">            
                <div className="bg-white p-4">
                    <h2 className="text-lg font-medium text-gray-800">Create</h2>
                    <ul>
                        <li className="text-gray-600">Type: {event.type}</li>
                        <li className="text-gray-600">Name: {event.name}</li>
                        <li className="text-gray-600">Description: {event.description}</li>
                    </ul>
                </div>
            </Layout>
        </>
    );
};

export const getStaticProps = async () => {
    const event = await prisma.event.findFirst({
        select: {
            type: true,
            name: true,
            description: true,
        },
    });
    return {
        props: {
            event,
        },
    }
}

export default Create;
