# VacationVibe: Vacation Rental Booking App

VacationVibe is a Full Stack Booking App that enables users to book vacation rentals, providing a seamless experience for reserving accommodations. The app allows users to create listings for their own properties, giving property owners the opportunity to showcase their rentals to potential guests. With VacationVibe, users can easily search for available properties, view property details, make bookings, and manage their reservations.

**To experience VacationVibe firsthand, please visit our website for a live demo:**

[![Start Your Vacation Adventure](https://cdn.pixabay.com/photo/2023/04/22/04/40/live-streaming-7943006_960_720.png)](https://vacation-vibe.vercel.app/)

[**Visit Website for Live Demo**](https://vacation-vibe.vercel.app/)

## Key Features

- **Booking System:** Users can easily search for available properties and make bookings.
- **Listing Creation:** Property owners can create and manage their listings.
- **Dashboard:** Property owners have access to a dashboard where they can manage their listings and view booking requests.
- **User Accounts:** Users can create accounts to save their favorite properties and manage their bookings.

## Technology Stack

The application was developed using the following technologies:

- **MongoDB:** A NoSQL database used to store property and user data.
- **Express.js:** A server-side framework for building RESTful APIs and handling server-side logic.
- **React:** A JavaScript library for building user interfaces.
- **Tailwind CSS:** A utility-first CSS framework used for styling the frontend.
- **Node.js:** A JavaScript runtime environment used to run the server-side code.
- **Vercel:** A cloud platform for static site hosting and deployment, used to deploy the frontend of the application.
- **AWS S3:** Amazon Simple Storage Service (S3) for file storage, allowing users to upload and retrieve property images. It enables secure and scalable file storage, ensuring a reliable and efficient system for handling property images.

## Getting Started

To run the VacationVibe app locally, follow these steps:

1. Clone the repository: `git clone https://github.com/junaidsaleem10144/VacationVibe.git`
2. Navigate to the project directory: `cd VacationVibe`
3. Install the dependencies:
   - Backend: Navigate to the `api` folder and run `npm install`
   - Frontend: Navigate to the `client` folder and run `npm install`
4. Create a `.env` file in the `api` folder and provide the necessary environment variables. You can refer to the `.env.example` file for the required variables.
5. Start the development servers:
   - Backend: In the `api` folder, run `npm run dev`
   - Frontend: In the `client` folder, run `npm run start`

Now, you can access the VacationVibe app by opening your browser and visiting `http://localhost:4000`.

## Folder Structure

The project follows a specific folder structure:

- `api/`: Contains the backend code, including server setup, routes, and models.
- `client/`: Contains the frontend code, including React components, styles, and assets.

## Acknowledgements

We would like to express our gratitude to the following resources and libraries that have been instrumental in the development of VacationVibe:

### Backend

- [bcryptjs](https://www.npmjs.com/package/bcryptjs): Library for hashing and comparing passwords.
- [cookie-parser](https://www.npmjs.com/package/cookie-parser): Middleware for parsing cookies in Express.
- [cors](https://www.npmjs.com/package/cors): Middleware for enabling Cross-Origin Resource Sharing (CORS).
- [dotenv](https://www.npmjs.com/package/dotenv): Module for loading environment variables from a .env file.
- [jsonwebtoken](https://www.npmjs.com/package/jsonwebtoken): Library for generating and verifying JSON Web Tokens (JWT).
- [mongoose](https://mongoosejs.com/): Object Data Modeling (ODM) library for MongoDB.
- [multer](https://www.npmjs.com/package/multer): Middleware for handling file uploads in Express.
- [@aws-sdk/client-s3](https://aws.amazon.com/sdk-for-javascript/): A client library for interacting with Amazon S3 for storing files.
- [image-downloader](https://www.npmjs.com/package/image-downloader): Library for downloading images from URLs.
- [mime-types](https://www.npmjs.com/package/mime-types): Library for working with MIME types.
- [express](https://expressjs.com/): Web framework for Node.js.

**Development dependencies (Backend):**

- [nodemon](https://nodemon.io/): Utility that automatically restarts the Node.js server when file changes are detected.

### Frontend

- [axios](https://axios-http.com/): Library for making HTTP requests.
- [date-fns](https://date-fns.org/): Library for manipulating and formatting dates.
- [react-router-dom](https://reactrouter.com/): Library for handling routing in React applications.
- [react](https://reactjs.org/): JavaScript library for building user interfaces.
- [react-dom](https://reactjs.org/docs/react-dom.html): Package for rendering React components.

**Development dependencies (Frontend):**

- [@types/react](https://www.npmjs.com/package/@types/react): Type definitions for React.
- [@types/react-dom](https://www.npmjs.com/package/@types/react-dom): Type definitions for React DOM.
- [@vitejs/plugin-react](https://www.npmjs.com/package/@vitejs/plugin-react): Vite plugin for React support.
- [autoprefixer](https://www.npmjs.com/package/autoprefixer): PostCSS plugin for adding vendor prefixes to CSS.
- [postcss](https://www.npmjs.com/package/postcss): CSS post-processor tool.
- [tailwindcss](https://tailwindcss.com/): Utility-first CSS framework.
- [vite](https://vitejs.dev/): Build tool for modern web development.

Thank you for choosing VacationVibe! If you have any questions or feedback, please feel free to reach out.

## Contributing

Contributions to the VacationVibe app are welcome! If you find any issues or want to add new features, please feel free to open a pull request.

## License

This project is licensed under the [MIT License](LICENSE).
