# Electronic Car Dealership
This project is back-end for an electronic car dealership. There are mainly three endpoints.

http://localhost:3000/api/v1/cars (GET)\
Get Cars - The first endpoint calls database to list all the cars if no filter is provided. But if there is any filter like year or make or model or colour, the filter will be applied to the query and result will be show accordingly.
### Request body
```
{}
```
OR
```
{
  "year": 2020,
  "make": "Tesla",
  "model": "Tesla Model Y",
  "colour": "RED" 
}
```
http://localhost:3000/api/v1/users (POST)\
Add User - This endpoint saves user data in the database like name, email, etc. The endpoint checks whether the email provided in te request body is registered in the system from before. If there is no record found of the provided email, user data is saved otherwise error message is shown along with status code.
### Request body
```
{
  "name": "Chris McCandless",
  "email": "chris.mccandless@example.com",
  "phone_number": "+19076962500"
}
```
http://localhost:3000/api/v1/user/car (POST)\
Add Purchase - When user wishes to purchase a car, this endpoint is called. This one, before saving user and car data in the database checks whether the same user has bought the same car with the exact year, make, model and colour before. If yes, then the endpoint will show error code and message saying 'User already have this make, model with the same colour from the same year.'
### Request body
```
{
  "user_id": 2,
  "car_id": 2
}
```
## Packages Used
- CORS
- DOTENV
- EXPRESS
- MYSQL2

## Run Code
1. Clone the repository.
2. *~cd* into the project folder where *index.js* is present.
3. run command *npm install*
4. Now create database and import *database.sql* from *src/db/* directory.
5. From the same directory you can import dummy data namely *dummy-data.sql*
6. Copy-paste *.env.example* and rename as *.env*, put values on the right of the equal sign according to your system
7. Once done, run command *node index.js*
8. The terminal will show you on which port the project is running.

## Technical decisions
- How to design the database table *CAR* so that it helps filtering the table easily and also it is advantageous for when purchase occurs.
- I Chose the direct approach of saving the same year, make, model car in one table with different colors.
- Becaue the business logic was to not let purchase happen until it is different color, same year, make, model is okay.

## Comments
1. I left out the *sort* part because to me it's better to implement sort from the from-end.
