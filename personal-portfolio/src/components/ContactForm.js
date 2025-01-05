import React, { useState } from "react";

const ContactForm = () => {
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        message: "",
    });

    const [success, setSuccess] = useState(false);
    const [error, setError] = useState(false);
    const [isLoading, setIsLoading] = useState(false);
    const [emailError, setEmailError] = useState("");

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });

        if (name === "email") {
            validateEmail(value);
        }
    };

    const validateEmail = (email) => {
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailRegex.test(email)) {
            setEmailError("Please enter a valid email address.");
        } else {
            setEmailError("");
        }
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        if (emailError) {
            setError(true);
            return;
        }

        setIsLoading(true); // Start loading

        try {
            const response = await fetch("https://getform.io/f/bwnndvga", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify(formData),
            });

            if (response.ok) {
                setSuccess(true);
                setError(false);
                setFormData({ name: "", email: "", message: "" });
            } else {
                throw new Error("Something went wrong");
            }
        } catch (err) {
            setError(true);
            setSuccess(false);
        } finally {
            setIsLoading(false); // Stop loading
        }
    };

    return (
        <section className="bg-gradient-to-r from-purple-900 to-blue-900 py-16 px-6">
            <div className="container mx-auto text-center">
                <h2 className="text-3xl font-bold text-white mb-8">Contact Me</h2>
                <form
                    onSubmit={handleSubmit}
                    className="bg-white p-6 rounded-lg shadow-lg max-w-lg mx-auto space-y-4"
                >
                    <div>
                        <label htmlFor="name" className="block text-left font-medium text-gray-700">
                            Name
                        </label>
                        <input
                            type="text"
                            id="name"
                            name="name"
                            value={formData.name}
                            onChange={handleChange}
                            className="mt-1 block w-full rounded-md border-gray-300 shadow-sm text-black focus:ring-pink-500 focus:border-pink-500"
                            required
                        />
                    </div>

                    <div>
                        <label htmlFor="email" className="block text-left font-medium text-gray-700">
                            Write your email
                        </label>
                        <input
                            type="email"
                            id="email"
                            name="email"
                            value={formData.email}
                            onChange={handleChange}
                            className={`mt-1 block w-full rounded-md shadow-sm text-black focus:ring-pink-500 focus:border-pink-500 ${
                                emailError ? "border-red-500" : "border-gray-300"
                            }`}
                            required
                        />
                        {emailError && (
                            <p className="text-red-500 text-sm mt-1">{emailError}</p>
                        )}
                    </div>

                    <div>
                        <label htmlFor="message" className="block text-left font-medium text-gray-700">
                            Message
                        </label>
                        <textarea
                            id="message"
                            name="message"
                            value={formData.message}
                            onChange={handleChange}
                            rows="4"
                            className="mt-1 block w-full rounded-md border-gray-300 text-black shadow-sm focus:ring-pink-500 focus:border-pink-500"
                            required
                        />
                    </div>

                    <button
                        type="submit"
                        className="w-full bg-pink-500 text-white font-medium py-2 px-4 rounded-md shadow-lg hover:bg-pink-600 transition duration-300"
                        disabled={isLoading}
                    >
                        {isLoading ? "Sending..." : "Send"}
                    </button>

                    {/* Loading Bar */}
                    {isLoading && (
                        <div className="w-full bg-gray-200 h-2 mt-4 rounded">
                            <div className="bg-pink-500 h-2 rounded animate-pulse" style={{ width: "75%" }}></div>
                        </div>
                    )}

                    {success && (
                        <p className="text-green-500 mt-4">Thank you! Your message has been sent.</p>
                    )}
                    {error && (
                        <p className="text-red-500 mt-4">Oops! Something went wrong. Please try again.</p>
                    )}
                </form>
            </div>
        </section>
    );
};

export default ContactForm;

