# Alarm Clock Project
This is an alarm clock project built using the MERN (MongoDB, Express, React, Node.js) stack. The project allows users to set alarms and receive notifications when the alarms go off.

## Features
User authentication and authorization using JSON Web Tokens (JWT)
Alarm creation, modification, and deletion
Real-time notifications using Socket.IO
Responsive design for desktop and mobile devices

## Technologies Used
MongoDB: A NoSQL database used for storing alarm data
Express: A web application framework for Node.js used for building the server-side API
React: A JavaScript library for building user interfaces used for the front-end
Node.js: A JavaScript runtime environment used for building the back-end server
Redux: A state management library for managing application state
DaisyUI: A popular UI component library for React used for building responsive user interfaces
Axios: A popular HTTP client for making API requests

## Installation
Clone the repository: git clone https://github.com/usmanwadood/alarm-clock.git
Navigate to the server directory: cd backend
Install server dependencies: npm install
Create a .env file in the server directory and configure the following environment variables:
makefile
MONGODB_URI=<your-mongodb-connection-string>

Start the server: cd backend + yarn dev
Open a new terminal window and navigate to the client directory: cd ../client
Install client dependencies: yarn
Start the client: cd frontend + yarn dev

Open your web browser and go to http://localhost:3000 to see the application running locally.

## Usage
Register a new account or login with an existing account.
Set alarms by providing a title, time, and days of the week.
View, modify, or delete alarms in the alarms list.
When an alarm goes off, a notification will be displayed in real-time.
Turn off the alarm by clicking on the notification or by visiting the alarms list and toggling the alarm status.

## Contributing
If you would like to contribute to this project, please follow these steps:

Fork the repository.
Create a new branch for your feature or bugfix: git checkout -b my-feature-branch
Make your changes and commit them: git commit -m "Add new feature"
Push your changes to your fork: git push origin my-feature-branch
Create a pull request against the main branch of the original repository.

## License
This project is licensed under the MIT License.

## Contact
If you have any questions or suggestions, please feel free to contact me at usmanwadood42@gmail.com
