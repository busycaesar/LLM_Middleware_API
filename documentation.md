
# LLM Middleware API Documentation

## Overview

This guide provides instructions on how to use the LLM Middleware API project. Follow the steps below to set up and run the application.

## Pulling the Docker Image

To begin, pull the application image from Docker Hub using the following command:

```bash
docker pull busycaesar/llm_middleware_api:latest
```

## Running the Docker Container

Once the image is pulled, you can run the container by setting the necessary environment variables as outlined below:

```
PORT=7000 # The port number where you want to run the application.
API_KEY=xxxx # Your Google Gemini API key.
```

### Starting the Container

After setting the environment variables, start the container. The APIs provided by the application will be available for use. For a comprehensive list of available APIs, please refer to the [API documentation](../api-documentation.md).

### Using Docker Compose

Alternatively, you can use Docker Compose to manage the container. Below is an example `docker-compose.yml` file to start the container:

```yaml
version: '3.8'

services:
  llm_middleware:
    image: busycaesar/llm_middleware_api:latest
    restart: always
    env_file:
      - llm_middleware.env # The file containing the required environment variables.
    ports:
      - "7000:7000"
```

Ensure that the `llm_middleware.env` file contains the appropriate environment variables needed for the image.

## Conclusion

With the Docker image set up and running, you can now start utilizing the LLM Middleware API. Refer to the [API documentation](../api-documentation.md) for detailed information on each endpoint and how to interact with the service.
