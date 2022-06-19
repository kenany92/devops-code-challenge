# Overview
This repository contains a React frontend, and an Express backend that the frontend connects to.

# Objective
Deploy the frontend and backend to somewhere publicly accessible over the internet. The AWS Free Tier should be more than sufficient to run this project, but you may use any platform and tooling you'd like for your solution.

Fork this repo as a base. You may change any code in this repository to suit the infrastructure you build in this code challenge.

# URLS
* [github repo](https://github.com/kenany92/devops-code-challenge/tree/develop)
* [frontend url](https://frontend-dot-winter-pivot-349116.el.r.appspot.com)
* [pipeline file](https://github.com/kenany92/devops-code-challenge/blob/develop/.github/workflows/gcloud.yml)

# Setup your environment
Install nodejs. Binaries and installers can be found on nodejs.org.
https://nodejs.org/en/download/

For macOS or Linux, Nodejs can usually be found in your preferred package manager.
https://nodejs.org/en/download/package-manager/

Depending on the Linux distribution, the Node Package Manager `npm` may need to be installed separately.

# Running the project
The backend and the frontend will need to run on separate processes. The backend should be started first.
```
cd backend
npm ci
npm start
```
The backend should response to a GET request on `localhost:8080`.

With the backend started, the frontend can be started.
```
cd frontend
npm ci
npm start
```
The frontend can be accessed at `localhost:3000`. If the frontend successfully connects to the backend, a message saying "SUCCESS" followed by a guid should be displayed on the screen.  If the connection failed, an error message will be displayed on the screen.

# Configuration
The frontend has a configuration file at `frontend/src/config.js` that defines the URL to call the backend. This URL is used on `frontend/src/App.js#12`, where the front end will make the GET call during the initial load of the page.

The backend has a configuration file at `backend/config.js` that defines the host that the frontend will be calling from. This URL is used in the `Access-Control-Allow-Origin` CORS header, read in `backend/index.js#14`

# Run on docker
Ensure that docker and docker compose are installed. If not, follow those links [install docker](https://docs.docker.com/get-docker/) and [install docker compose](https://docs.docker.com/compose/install/)

1. Update the **FRONTEND_BINDING_PORT** and **BACKEND_BINDING_PORT** in **.env** file from the root project by setting the custom ports

2. From the backend folder, rename the **.env.docker.xample** file to **.env.docker** then set the **FRONTEND_BINDING_PORT** value same as in the **.env** file in root folder (*remove the brackets*)

3. From the frontend folder, rename the **.env.docker.xample** to **.env.docker** then set the **BACKEND_BINDING_PORT** value same as in the .env file in root folder (*remove the brackets*)

4. From the root folder run: ```docker-compose up -d --build```

# Deploy on Google Cloud Platform (GCP)

1. Install the GCP SDK [install gcp sdk](https://cloud.google.com/sdk/docs/install)

2. Create gcloud account [gcloud](https://cloud.google.com/apigee/docs/hybrid/v1.5/precog-gcpaccount)

3. From command line, authenticate to your gcloud account [gcloud auth](https://cloud.google.com/sdk/gcloud/reference/auth)

4. Create gcloud project [project](https://cloud.google.com/resource-manager/docs/creating-managing-projects) and save your project id somewhere

5. From the backend folder, rename the **.env** file to ***.env.old** and rename the **.env.production** file to **.env** and update the **ALLOW_ORIGIN** variable with the correct value. The format is: **https://frontend-dot-[PROJECT_ID].el.r.appspot.com**. Then run (in root folder) ```gcloud app deploy backend/app.yml --project=[PROJECT_ID]```

6. From the frontend folder, update the **REACT_APP_API_URL** variable from the **.env.production** by setting the correct value. The format is: **https://backend-dot-[PROJECT_ID].el.r.appspot.com**. Build the frontend (```npm run build```). Then run (in root folder) ```gcloud app deploy backend/app.yml --project=[PROJECT_ID]```

7. Open **https://frontend-dot-[PROJECT_ID].el.r.appspot.com** in browser

# Optional Extras
The core requirement for this challenge is to get the provided application up and running for consumption over the public internet. That being said, there are some opportunities in this code challenge to demonstrate your skill sets that are above and beyond the core requirement.

A few examples of extras for this coding challenge:
1. Dockerizing the application
2. Scripts to set up the infrastructure
3. Providing a pipeline for the application deployment
4. Running the application in a serverless environment

This is not an exhaustive list of extra features that could be added to this code challenge. At the end of the day, this section is for you to demonstrate any skills you want to show that’s not captured in the core requirement.
