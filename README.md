# README  
  ## License [![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)  https://opensource.org/licenses/MIT  
    This project is licensed under the MIT license. 
    Click the badge for more information.  
  ## Description  
  This application is a psuedo job candidate search tool that was built with React.js and TypeScript. It is a single-page application that does a GET request to the GitHub API to retrieve a random list of GitHub users. The user will be presented with the GitHub users one-at-a-time and will have the option to click the Add button to add them to the list of Potential Candidates, or the Remove button to remove them from the list and review the next GitHub profile.

  Once the user has added a candidate to the list, they can click the Saved Candidates button to see a list of all the candidates they have added. The Saved Candidates will be stored in the browser's local storage and presented to the user in a table format. The user also has the option to click the Remove button next to each candidate to remove them from the table and the saved list of Potential Candidates.


  ## Table of Contents  
  - [Description](#description)  
  - [Installation](#installation)  
  - [Usage](#usage)  
  - [License](#license)  
  - [Contribution](#contribution)  
  - [Tests](#tests)  
  - [Questions](#questions)  
  ## Installation  
  To install this project:  

  1. Clone the repo
   ```sh
    git@github.com:hobbsm-code/candidate-search-app.git
   ```
  2. Install NPM packages (from the Develop directory)
   ```sh
   npm run install
   ```

  ## Usage  
  Please follow these instructions to use the Candidate Search application:

  1. Open a terminal and cd into the Develop directory 
  2. Type npm run start:dev to run the application in development mode or npm run start to run the application in production mode
  3. The application will open in your default browser and you will see the Home/Search Candidates page*

  *Note: In order to make API requests to GitHub, the user must obtain a Github Personal Access Token. Then, they must create a file called .env, save it in the environment directory, include the following environment variable: VITE_GITHUB_TOKEN, and set its value to their GitHub Personal Access Token. This will allow the application to make requests to the GitHub API.
  
  ## Contribution  
  Contributions are what make the open source community such an amazing place to learn, inspire, and create. Any contributions you make are **greatly appreciated**.

  If you have a suggestion that would make this better, please fork the repo and create a pull request. You can also simply open an issue with the tag "enhancement".
  Don't forget to give the project a star! Thanks again!

  1. Fork the Project
  2. Create your Feature Branch (`git checkout -b feature/AmazingFeature`)
  3. Commit your Changes (`git commit -m 'Add some AmazingFeature'`)
  4. Push to the Branch (`git push origin feature/AmazingFeature`)
  5. Open a Pull Request

  ## Tests  
  Test instructions:  

  This project does not currently have any unit tests. Having test coverage is always welcome. Please feel free to contribute some unit tests. Otherwise, it is our goal to improve the test coverage as the project becomes more mature and more complex functionality is added.

  ## Questions  
  For questions, please contact me at:  
  GitHub: [Find me on GitHub ->  hobbsm-code](https://github.com/Find me on GitHub ->  hobbsm-code)  
  Email: [Email me at: hobbsm321@gmail.com]  
  
