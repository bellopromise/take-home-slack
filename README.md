
### Installation


1.  make .env file in root directory
    ```
    -Rename .env.example file to .env
   

    ```
2.  Here's how to get Slack Api:
    ```
    - Go to the Slack API website and sign in to your Slack workspace.

    - Navigate to the "Your Apps" page and select the app you want to use for sending alerts.

    - Click on the "OAuth & Permissions" tab and scroll down to the "Scopes" section.

    - Click the "Add an OAuth Scope" button for Bot Token Scopes and following scopes:
        - chat:write
        - channel:read
        - group:read
        - group:write" scope from the list

    - Click the "Save Changes" button to update your app's permissions.

    - Click on the install to workspace button

    - Copy the API key that will be your Slack TOKEN for .env file
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
| <ul><li>[x] </li></ul>| Add to Basket  | /api/baskets     | {
    "product_id":"2",
    "quantity": 3,
    "identifier":"Dell"
}                                  | POST  |
| <ul><li>[x] </li></ul>| Get Baskets by identifier      | /  api/baskets/{identifier}           | | GET  |
