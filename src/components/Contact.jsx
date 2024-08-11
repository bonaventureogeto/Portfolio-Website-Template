import { useState } from 'react';
import emailjs from 'emailjs-com';
import { db } from '../firebaseConfig';
import { collection, addDoc } from 'firebase/firestore';

const Contact = () => {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [message, setMessage] = useState('');

    const handleSubmit = async (e) => {
        e.preventDefault();

        try {
            // Save the message to Firestore
            await addDoc(collection(db, 'contacts'), {
                name,
                email,
                message,
                timestamp: new Date()
            });

            // Send an email using EmailJS
            const templateParams = {
                name,
                email,
                message
            };

            await emailjs.send(
                import.meta.env.VITE_APP_EMAILJS_SERVICE_ID,
                import.meta.env.VITE_APP_EMAILJS_TEMPLATE_ID,
                templateParams,
                import.meta.env.VITE_APP_EMAILJS_USER_ID
            );

            setName('');
            setEmail('');
            setMessage('');
            alert('Message sent successfully!');
        } catch (error) {
            console.error('Error sending message: ', error);
            alert('Error sending message, please try again.');
        }
    };

    return (
        <div className="container mx-auto p-6 min-h-screen flex items-center justify-center">
            <div className="bg-gray-100 p-6 rounded-lg shadow-md w-full md:w-1/2">
                <h1 className="text-4xl font-bold mb-8 text-center text-gray-800">Contact Me</h1>
                <form onSubmit={handleSubmit} className="space-y-4">
                    <div>
                        <label className="block text-lg font-medium">Name</label>
                        <input 
                            type="text"
                            value={name}
                            onChange={(e) => setName(e.target.value)}
                            className="w-full p-2 border border-gray-300 rounded-md"
                            required
                        />
                    </div>
                    <div>
                        <label className="block text-lg font-medium">Email</label>
                        <input 
                            type="email"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            className="w-full p-2 border border-gray-300 rounded-md"
                            required
                        />
                    </div>
                    <div>
                        <label className="block text-lg font-medium">Message</label>
                        <textarea 
                            value={message}
                            onChange={(e) => setMessage(e.target.value)}
                            className="w-full p-2 border border-gray-300 rounded-md"
                            required
                        />
                    </div>
                    <button type="submit" className="bg-blue-500 text-white p-2 rounded-md">Send Message</button>
                </form>
            </div>
        </div>
    );
}

export default Contact;
