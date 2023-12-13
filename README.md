# Emaily

https://github.com/Ayyanaruto/Emaily/assets/72731349/d1a4b316-ac37-4a4a-9562-979f507cb53c

<img src="https://github.com/Ayyanaruto/Ayyanaruto/blob/a8ab3ec2f7b0db200c750cd1f22c303d6a1c2a08/LINE.gif"><br><br>

##  🤔 About Emaily

<p>Emaily is a web app, powered by the MERN stack and Redux, designed for start-up owners to send bulk emails with surveys for collecting customer reviews, it uses the SendGrid API to manage email sending, a credit system for bulk emails, and Stripe API for secure payments. Users create accounts, compose surveys, and purchase credits to gather feedback efficiently. With a user-friendly interface, Emaily provides a comprehensive solution for managing bulk email campaigns and obtaining valuable customer insights</p>


<img src="https://github.com/Ayyanaruto/Ayyanaruto/blob/a8ab3ec2f7b0db200c750cd1f22c303d6a1c2a08/LINE.gif"><br><br>

## 👨‍💻 Technoligies Used

![MongoDB](https://img.shields.io/badge/MongoDB-%234ea94b.svg?style=for-the-badge&logo=mongodb&logoColor=white)
![EXPRESS](https://img.shields.io/badge/Express.js-000000?style=for-the-badge&logo=express&logoColor=white)
![React](https://img.shields.io/badge/react-%2320232a.svg?style=for-the-badge&logo=react&logoColor=%2361DAFB)
![NODE](https://img.shields.io/badge/Node.js-339933?style=for-the-badge&logo=nodedotjs&logoColor=white)
![CSS3](https://img.shields.io/badge/CSS%20-%231572B6.svg?style=for-the-badge&logo=css3&logoColor=white)
![Stripe](https://img.shields.io/badge/Stripe-626CD9?style=for-the-badge&logo=Stripe&logoColor=white)
![Sendgrid](https://img.shields.io/badge/Twilio-F22F46?style=for-the-badge&logo=Twilio&logoColor=white)

## 📋 Installation Instructions

**Prerequisites:**

* Node.js v16+
* npm
* Git

**1. Clone the Repository:**

Open a terminal in your desired directory and run:

```
git clone https://github.com/Ayyanaruto/Emaily
cd Emaily
```

**2. Install Dependencies:**

Run the following command to install all necessary dependencies:

```
npm install
```
Change directory to client and install all client dependencies:

```
cd client
npm install
cd..
```
**3. Configure Environment Variables:**

Create a `.env` file in the root directory and populate it with the following environment variables:

**Server:**

* `GOOGLE_CLIENT_ID`: Your Google Client ID
* `GOOGLE_CLIENT_SECRET`: Your Google Client Secret
* `SECRET`: Your application secret (used for JWT signing)
* `MONGO_DB_URI`: Your MongoDB connection string
* `STRIPE_SECRET_KEY`: Your Stripe secret key
* `REDIRECT_DOMAIN`: Your application's domain (e.g., "localhost:3000")

**Client:** (Create a `.env.development` file for development environment)

* `REACT_APP_STRIPE_CLIENT_ID`: Your Stripe client ID
* `REACT_APP_STRIPE_SECRET_KEY`: Your Stripe secret key (optional for development)
* `REACT_APP_SERVER`: Your server URL (e.g., "http://localhost:8080")

**4. Start the Server and Client:**

Run the following command to simultaneously start the server and the React application in development mode:

```
npm run dev
```

This command uses the `concurrently` script defined in the `package.json` file.

**5. Access the Application:**

Open your browser and navigate to http://localhost:3000 to view the React application.

**Additional Notes:**

* You can find more detailed information about the application and its configuration options in the documentation (if available).
* Remember to replace the placeholder values for environment variables with your own.
* The `.env` and `.env.development` files are ignored by Git for security reasons.

This guide should provide a basic understanding of how to install and run the application. For further assistance, consult the project documentation or reach out to the developers.

I hope this helps! Let me know if you have any other questions.



### Deployment
**Note:** You can deploy on [render.com,](https://render.com/) Its very easy to deploy there. <br>

[![Deploy to Render](https://render.com/images/deploy-to-render-button.svg)](https://render.com/deploy)


**Note:** Just add this script in build command during Setup
```
  npm install && npm run render-postbuild 
```

## Additional Notes

* This is a basic installation guide. You may need to adjust the steps based on your specific environment.
* Feel free to contribute to the project by creating pull requests on GitHub.

We hope this helps you get started with Emaily!





