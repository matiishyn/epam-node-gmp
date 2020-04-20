# Task 4
* [Task Description](https://epam.sharepoint.com/sites/EPAMNode.jsGlobalMentoringProgram/Shared%20Documents/Forms/AllItems.aspx?id=%2Fsites%2FEPAMNode%2EjsGlobalMentoringProgram%2FShared%20Documents%2FGeneral%2FHomework%2FModule%204%2FHomework%204%2Epdf&parent=%2Fsites%2FEPAMNode%2EjsGlobalMentoringProgram%2FShared%20Documents%2FGeneral%2FHomework%2FModule%204&p=true&originalPath=aHR0cHM6Ly9lcGFtLnNoYXJlcG9pbnQuY29tLzpiOi9zL0VQQU1Ob2RlLmpzR2xvYmFsTWVudG9yaW5nUHJvZ3JhbS9FWm51bTBEeGhOTkdzRmVXVnNWQy1tY0I2alhveVA1cHVCOGpOOEQ0YWk4MG1BP3J0aW1lPXZrcGNQZ1hlMTBn) 

## Tech Stack
* Node.js `13`
* Lang: TypeScript `3.8`
* Framework: Express `4.17`
* ORM: TypeORM, [Data Mapper pattern (Repositories)](https://en.wikipedia.org/wiki/Data_mapper_pattern)
* Database: PostreSQL `8`
* Validator: joi-validation

## DB setup
* you have to have postgres server running locally
* copy `.env.example` to `.env` and put DB data in there
* run `npm run db:migrate` - this will make structure of your DB
* run `npm run db:seed` - this will add some data to your DB

## App setup
* install dependencies by running `npm i`
* start by running `npm run dev`

## deploy
* run `npm run build` to build all files into `/dist` folder


# from other file
Steps to run this project:

1. Run `npm i` command
2. Setup database settings inside `ormconfig.json` file
3. Run `npm start` command

# tech details
```shell script
typeorm init  --database postgres --express
```
