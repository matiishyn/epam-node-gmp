# Task 3
* [Task Description](https://epam.sharepoint.com/sites/EPAMNode.jsGlobalMentoringProgram/Shared%20Documents/Forms/AllItems.aspx?id=%2Fsites%2FEPAMNode%2EjsGlobalMentoringProgram%2FShared%20Documents%2FGeneral%2FHomework%2FModule%203%2FHomework%203%2Epdf&parent=%2Fsites%2FEPAMNode%2EjsGlobalMentoringProgram%2FShared%20Documents%2FGeneral%2FHomework%2FModule%203&p=true&originalPath=aHR0cHM6Ly9lcGFtLnNoYXJlcG9pbnQuY29tLzpiOi9zL0VQQU1Ob2RlLmpzR2xvYmFsTWVudG9yaW5nUHJvZ3JhbS9FVmZWRVl4VVhxMUZ1NXFYcW9YTnFxTUJqQXczYzZPRXNPUU9IU3Zta3NUUlpBP3J0aW1lPU5tWEd5cW5ZMTBn) 

## Tech Stack
* Node.js `13`
* Lang: TypeScript `3.8`
* Framework: Express `4.17`
* ORM: Sequelize `5`, [Active Record pattern (Models)](https://en.wikipedia.org/wiki/Active_record_pattern)
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
