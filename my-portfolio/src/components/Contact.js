import React from "react";

const Contact = () => {
    return (
        <section id="contact" className="mb-10 h-full">
            <div
                className="max-w-md mx-auto p-4 md:p-6 lg:p-8 bg-slate-100 rounded shadow-lg mt-24"
                id="contact"
            >
                <h1 className="text-3xl font-bold text-gray-900 ">
                    Get in Touch
                </h1>
                <p className="text-gray-600">
                    Fill out the form below to send me a message.
                </p>
                <form>
                    <div className="mb-4">
                        <label
                            className="block text-gray-700 text-sm font-bold mb-2 mt-1"
                            htmlFor="name"
                        >
                            Name
                        </label>
                        <input
                            className="appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                            id="name"
                            type="text"
                            name="name"
                        />
                    </div>
                    <div className="mb-4">
                        <label
                            className="block text-gray-700 text-sm font-bold mb-2 mt-1"
                            htmlFor="email"
                        >
                            Email
                        </label>
                        <input
                            className="appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                            id="email"
                            type="email"
                            name="email"
                        />
                    </div>
                    <div className="mb-4">
                        <label
                            className="block text-gray-700 text-sm font-bold mb-2 mt-1"
                            htmlFor="message"
                        >
                            Message
                        </label>
                        <textarea
                            className="appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                            id="message"
                            name="message"
                        />
                    </div>
                    <div className="flex justify-center">
                        <button
                            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                            type="submit"
                        >
                            Send Message
                        </button>
                    </div>
                </form>
            </div>
        </section>
    );
};

// const styles = {
//     section: {
//         padding: "100px 20px",
//         textAlign: "center",
//         backgroundColor: "#a2a2a2",
//     },
// };

export default Contact;
