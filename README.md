# Advertisements - Fernando Gomez Graciani

## Steps to use the app

1. git clone https://github.com/shd8/the-right-way.git

### Raise the backend
1. cd backend
2. npm install
3. (Optional) Create .env file in backend folder following the pattern of .env.example.
4. npm start
5. You should see Server started at port: 4040. Don't close this terminal

Additional notes: Note that at Dashboard and AdDetail components, an intented delay of 1 second while fetching the data was added in order to simulate real Database delay behavior.

### Raise the frontend
1. cd frontend
2. npm install
3. npm start
5. Acess http://localhost:3000/
6. With the backend up, you should see the Dashboard with the title "Advertisements"

### Run the tests
1. cd frontend
2. npm test

### See coverage Report
1. cd frontend
2. npm test (If not done before)
3. npm run coverage-report