 # Local Development Setup

## Technology stack

- Node 18.12.0

## Installation

### Requirements


### Requirements

### Setting up the development environment


1.  make .env file in root directory
    ```
    -Rename .env.example file to .env
   

    ```



4.  Install the required packages by running the following command in the project root directory:

    ```bash
    npm i
    npm start
    npm test to test
    ```


## Run Through Docker
### Requirements

Before you get started with docker, the following needs to be installed:
  * **Docker** 20.10.22

### Setting up the docker environment

1.  You can also run script by configuring docker. You can download docker from here https://docs.docker.com/get-docker/

2.  After install, configure docker compose and run the following command:

    ```
    docker build -t slack-api .
    docker run -p 3000:3000 slack-api
    ```

Congratulations! project should now be up and running for development purposes.

## Documentation
 You can access the swagger documentation here: http://localhost:3000/api-docs/


## Deploy to GPC
### Steps to follow

1. To install Google Cloud SDK please follow this https://cloud.google.com/sdk/docs/install  After you install it you be able to use gcloud commands.

2. Create Google Cloud Project and Configure Local Environment

```
gcloud projects create <project-name>
```

3. See your project

```
gcloud projects list
```

4. Get the project configuration with the following command if your project name is empty, follow the project id setting step, else skip it.

```
gcloud config list
```

5. If the project name is empty:

```
gcloud config set project <project-id>
gcloud config get-value project
```

6. Build and Deploy Docker Image with Google Cloud Commands

```
gcloud auth configure-docker
docker build -t gcr.io/<project-name>/nodejs-local-build .
docker images -a | grep gcr.io
```

7. Push the docker image to container registry

```
docker push  gcr.io/<project-name>/nodejs-local-build
```

8. Now we can deploy our Image to Compute Engine

9. Create Firewall Rules

10. Done your project is live





## Implementation table

|        | Page      | Endpoint      | Request Body                                                                                                                                                                            | Action  |
|--------|-----------|---------------|---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|---|
                                                                                                                       |   |
| <ul><li>[x] </li></ul>| Send Spam Alert  | /notify     | {
  "RecordType": "Bounce",
  "Type": "SpamNotification",
  "TypeCode": 512,
  "Name": "Spam notification",
  "Tag": "",
  "MessageStream": "outbound",
  "Description": "The message was delivered, but was either blocked by the user, or classified as spam, bulk mail, or had rejected content.",
  "Email": "zaphod@example.com",
  "From": "notifications@honeybadger.io",
  "BouncedAt": "2023-02-27T21:41:30Z"
}                             | POST  |

