
- #### caution !!!
    View  in full screen to get complete visual optimisation of this poject.



# Project Overview:

This whole project (Front-End & Back-End) follows the Model-View-Controller (MVC) architectural pattern. Project  aims to provide the result of addition between two numbers entered by the user. The front-end will check for the validity of the entered numbers, and in case the numbers are negative or not entered, it will throw an error without making an API call to improve user Experience. In case of two positive numbers, the front-end will display the result of the addition in the format described above.

The project will be developed using React for the front-end and the result of the addition will be computed on the back-end. The back-end will use an Restful_API to receive the input numbers from the front-end and perform the necessary calculations. The result of the calculation will then be returned to the front-end in the desired format.

This project will improve the user experience by providing real-time error checking on the front-end and reducing the number of API calls, thus improving the overall performance of the application. The result of the calculation will be displayed in a clear and concise manner, making it easy for users to understand.

### Input: 
The user is required to input two numbers (NumberOne and NumberTwo) in the front end. The application will check if the input numbers are positive numbers or not. If the numbers are negative or not entered, the application will throw an error on the front-end itself and no API call will be made.

### Output:
The output of the application will be the sum of the two input numbers along with the carry string. The carry string represents the carry during the addition of two numbers.

For example, if the input from the front-end body is NumberOne: 1489 and NumberTwo: 714, the response from the backend should be:

```console
{
  "step1": {
    "carryString": "1",
    "sumString: "3"
  },
  "step2": {
    "carryString": "11",
    "sumString: "03"
  },
  "step3": {
    "carryString": "111",
    "sumString: "203"
  },
  "step4": {
    "carryString": "111",
    "sumString: "2203"
  }
}

```
## How to Run Locally:  
- Fork this repository (or clone directly ).

- Clone the repository (If forked use link from forked Repository  to clone).
```console
git clone https://github.com/safil-badarudeen/Eqaim_Technology_assignment_Frontend.git
```
- Navigate to folder
```console
cd Eqaim_Technology_assignment_Frontend
```
- Install  dependency packages
```console
npm install
```
- Start the project
```console
npm start
```
## Packages Used :

 - [axios](https://www.npmjs.com/package/axios) to make API calls to the backend.
 - [react-router-dom](https://reactrouter.com/en/main) to be able to scale application if needed and to include notFound page in this project.
 - [npm](https://www.npmjs.com/) for packages.
 - [TailwindCSS](https://tailwindcss.com/) for building UI for components 
 

## Features

- Add Two numbers and provide steps.
- Reject negative numbers or if numbers didnt entered.
- Reduced API call for unwanted input for better user experience.
- Error displayed unwanted input is provided directly from front end.
- Clear button to remove data from input when ever user needs


# Data Flow

- #### Component Creation: 
   In the front-end, create a component that will take input from the user for the two numbers. This component will have a form with two input fields for the numbers and a submit button.

- #### Data Collection: 
  Once the user enters the two numbers and clicks on the submit button, the component will collect the data from the form fields.

- #### Data Validation:
   The component will validate the input data and check if both numbers are positive and not empty. If either of the numbers is negative or not entered, an error message will be displayed to the user, and no API call will be made.

- #### API Call: 
   If both numbers are positive and entered, the component will make an API call to the backend, passing the two numbers as part of the request body.

- #### Backend Processing: 

  The backend will receive the API request and process it, performing the sum of the two numbers.

- #### Response Generation: 
    
  The backend will generate a response in JSON format, containing the intermediate steps involved in the sum of the two numbers.

- #### Data Display: 
 
   The front-end component will receive the JSON response from the backend and use JSON.stringify() to convert it into a string. The response will then be displayed to the user.




### Backend Repository Link

- Click here to  [visit backend Repository ](https://github.com/safil-badarudeen/Eqaim-Technology_assignment-Backend) of this Project 