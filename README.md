# nodeTraining

## Set up
1. go into the lms directory, then run `npm install --verbose`. (the verbose will let you see that it is working instead of it outputting nothing even though it is doing something in the background.)

2. Change the dao/db.js file. change password and database to reflect your database
3. You may have to change our implementation of the daos. For example, the table names and column names are different from mine database.

## Bugs
You may run into an error saying that you need to upgrade your mySQL client. Hoever, you do not need to do that. All you need to do is run this command:
```
ALTER USER 'root'@'localhost' IDENTIFIED WITH mysql_native_password BY 'YourOldePassword';

flush privileges;
```
<br />
All you need to do is change the part that says YourOldPassword, and maybe root and localhost if your user and or host location is different.

## Run LMS project
1. `cd lms`
2. `node main.js`
