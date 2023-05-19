# Running the project locally

Here are the instructions to start the application locally. Please note that the project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Set the database

The name of database is `turfcoach` with a single table `activities`. I have included an SQL script to create the database, table, and even populate it with few sample records. See `/backend/database/turfcoach.sql`.

### Database configuration

Make sure the database server (I am using MySQL with XAMP) is up & running. You can change the database configuration in `/backend/server.py` file. By default, the app assumes that it is running on `localhost` at port `3306`.

## Set the backend server

The backend is developed in Python using Flask and MariaDB. Follow the following steps to start the backend server.

### Requirement

-   Python3
-   Pip3

#### Create a virtual environment

```bash
python3 -m venv .env
```

#### Activiate the environment

```bash
source .env/bin/activate
```

OR

```bash
call venv/Scripts/activate
```

#### Install dependencies

```bash
pip3 install -r requirements.txt
```

#### Finally run the server

```bash
python3 server.py
```

Make sure the backend server is running at `http://127.0.0.1:5000/`. Otherwise change the `baseUrl` property to the correct URL in `/src/App.js`.

### Weather API

The API to fetch weather data is free & opensource - it doesn't require any key. Here you find more information about this API: [Open-Meteo](https://open-meteo.com/)

## Run the frontend application

You can install the dependencies by doing an `npm install`. Then do an `npm start` to start the application at `http://localhost:3000/`
