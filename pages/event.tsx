import React from "react";
import Layout from "../components/layout";
import SEO from "../components/seo";

interface eventData {
    // type: string;
    name: string;
    // description: string;
}

const CreateEvent = () => {
    const handleSubmit = async (event: any) => {
        // Stop the form from submitting and refreshing the page.
        event.preventDefault()

        // Get data from the form.
        const data = {
            name: event.target.name.value,
        }

        // Send the data to the server in JSON format.
        const JSONdata = JSON.stringify(data)

        // API endpoint where we send form data.
        const endpoint = '/api/form'

        // Form the request for sending data to the server.
        const options = {
            // The method is POST because we are sending data.
            method: 'POST',
            // Tell the server we're sending JSON.
            headers: {
                'Content-Type': 'application/json',
            },
            // Body of the request is the JSON data we created above.
            body: JSONdata,
        }

        // Send the form data to our forms API on Vercel and get a response.
        const response = await fetch(endpoint, options)

        // Get the response data from server as JSON.
        // If server returns the name submitted, that means the form works.
        const result = await response.json()
        alert(`Your details are submitted: ${result.data}`)
    }

    return (
        <>
            <SEO
                title="Contact"
                description="This is the create event page for NFT website"
                image="https://example.com/image.jpg"
            />
            <Layout title="Create Event">
                <form onSubmit={handleSubmit} className="bg-white p-6 rounded-lg shadow-md">
                    <div className="mb-4">
                        <label htmlFor="name" className="block text-gray-700 font-medium mb-2">
                            Name:
                        </label>
                        <input
                            type="text"
                            id="name"
                            name="name"
                            className="w-full border border-gray-400 p-2 rounded-lg"
                        />
                    </div>
                    <button
                        type="submit"
                        className="bg-indigo-500 text-white py-2 px-4 rounded-lg hover:bg-indigo-600"
                    >
                        Submit
                    </button>
                </form>
            </Layout>
        </>
    );
};

export default CreateEvent;