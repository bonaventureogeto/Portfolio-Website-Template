# Portfolio Website Template

This is a customizable portfolio website template built with React and Tailwind CSS. The template includes sections for work experience, projects, an about page, and a contact form integrated with Firebase and EmailJS for sending email notifications. This project is ideal for developers looking to create a personal portfolio for university applications, job applications, or showcasing their work.

## Features

- **Responsive Design**: Optimized for both desktop and mobile devices with a clean, professional look.
- **Work Experience**: Showcase your work history with detailed descriptions and images.
- **Projects Section**: Display your top projects with detailed pages for each project.
- **About Page**: A dedicated page to introduce yourself and your background.
- **Contact Form**: Integrated with Firebase and EmailJS to send email notifications when someone submits a message.
- **Customizable**: Easily modify the content, styles, and structure to fit your personal brand.

## Table of Contents

- [Installation](#installation)
- [Configuration](#configuration)
- [Usage](#usage)
- [Customization](#customization)
- [Deployment](#deployment)
- [Contributing](#contributing)
- [License](#license)

## Installation

1. **Clone the Repository:**

   ```bash
   git clone https://github.com/bonaventureogeto/Portfolio-Website-Template.git
   cd Portfolio-Website-Template
   ```

2. **Install Dependencies:**

   Install the necessary dependencies using npm:

   ```bash
   npm install
   ```

3. **Set Up Firebase:**

   - Go to [Firebase Console](https://console.firebase.google.com/).
   - Create a new project.
   - Add a web app to your project.
   - Obtain your Firebase configuration and add it to a new file `src/firebaseConfig.js`:

   ```javascript
   import { initializeApp } from "firebase/app";
   import { getFirestore } from "firebase/firestore";

   const firebaseConfig = {
       apiKey: "YOUR_API_KEY",
       authDomain: "YOUR_AUTH_DOMAIN",
       projectId: "YOUR_PROJECT_ID",
       storageBucket: "YOUR_STORAGE_BUCKET",
       messagingSenderId: "YOUR_MESSAGING_SENDER_ID",
       appId: "YOUR_APP_ID"
   };

   const app = initializeApp(firebaseConfig);
   const db = getFirestore(app);

   export { db };
   ```

4. **Set Up EmailJS:**

   - Go to [EmailJS](https://www.emailjs.com/) and create an account.
   - Set up a new email service and create an email template.
   - Obtain your User ID, Service ID, and Template ID.
   - Create a `.env` file in the root directory of your project and add your EmailJS credentials:

   ```plaintext
   VITE_APP_EMAILJS_USER_ID=your_emailjs_user_id
   VITE_APP_EMAILJS_SERVICE_ID=your_emailjs_service_id
   VITE_APP_EMAILJS_TEMPLATE_ID=your_emailjs_template_id
   ```

## Configuration

After setting up Firebase and EmailJS, make sure you have configured your environment variables correctly:

- **Firebase**: Ensure your `firebaseConfig.js` is correctly set up.
- **EmailJS**: Ensure your `.env` file contains the correct credentials.

## Usage

1. **Running the Development Server:**

   Start the development server:

   ```bash
   npm run dev
   ```

   The app will be running at `http://localhost:3000`.

2. **Navigating the Website:**

   - **Home**: The landing page with navigation to other sections.
   - **Work Experience**: Showcases your work experience.
   - **Projects**: Displays your projects, with a detailed page for each project.
   - **About**: A page with information about yourself.
   - **Contact**: A contact form integrated with Firebase and EmailJS.

## Customization

You can customize the template to fit your personal brand:

1. **Content**:
   - Update the text content in the various components (`Home.js`, `WorkExperience.js`, `Projects.js`, `About.js`, `Contact.js`).
   - Add or remove sections as needed.

2. **Styling**:
   - Modify the Tailwind CSS classes in each component to change the appearance.
   - Update the `index.css` file if you want to add global styles.

3. **Images**:
   - Replace placeholder images in the `WorkExperience.js` and `Projects.js` components with your own images.

4. **Routing**:
   - Modify the routing in `App.js` if you want to add additional pages or routes.

## Deployment

Once you’ve customized your portfolio, you can deploy it using various methods:

### Deploying to GitHub Pages

1. **Install gh-pages:**

   ```bash
   npm install --save gh-pages
   ```

2. **Add the following scripts to `package.json`:**

   ```json
   "scripts": {
     "predeploy": "npm run build",
     "deploy": "gh-pages -d build"
   }
   ```

3. **Deploy the App:**

   ```bash
   npm run deploy
   ```

### Deploying to Vercel

1. **Install Vercel CLI:**

   ```bash
   npm install -g vercel
   ```

2. **Deploy:**

   ```bash
   vercel
   ```

   Follow the prompts to deploy your site.

### Deploying to Netlify

1. **Install Netlify CLI:**

   ```bash
   npm install -g netlify-cli
   ```

2. **Deploy:**

   ```bash
   netlify deploy
   ```

   Follow the prompts to deploy your site.

## Contributing

If you'd like to contribute to this project, please fork the repository and use a feature branch. Pull requests are warmly welcome.

1. **Fork the repository**
2. **Create your feature branch (`git checkout -b feature/YourFeature`)**
3. **Commit your changes (`git commit -m 'Add some feature'`)**
4. **Push to the branch (`git push origin feature/YourFeature`)**
5. **Create a new Pull Request**

## License

This project is open-source and available under the [MIT License](LICENSE).