
# Project Overview:

This project aims to provide the result of addition between two numbers entered by the user. The front-end will check for the validity of the entered numbers, and in case the numbers are negative or not entered, it will throw an error without making an API call to improve user Experience. In case of two positive numbers, the front-end will display the result of the addition in the format described above.

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
- Fork this repository.
- Clone the repository.
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

 - [axios](https://www.npmjs.com/package/axios) to make API calls to the backend
 - [react-router-dom](https://reactrouter.com/en/main) to be able to scale application if needed
 - [npm](https://www.npmjs.com/) for packages
 
