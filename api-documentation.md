
# API Documentation

This document provides an overview of the API endpoints provided by the LLM Middleware service. Each endpoint includes a description, request format, and expected response format.

## Index

### Healthcheck

1. [`GET /`](#get-) - Check the health status of the application.

### Response Generation

1. [`POST /response`](#post-response) - Generate a response based on the provided prompt.

## Response Structure

All responses will include the following structure:

```json
{
  "success": boolean, // Indicates if the response was successful (true) or a failure (false).
  "message": string, // Describes the status of the request.
  "data": object // Contains any data requested or required by the response.
}
```

## Healthcheck

### `GET /`

**Description**: Checks the health status of the application and provides the current project version.

**Response Body**:
```json
{
  "success": true,
  "message": "Healthy",
  "data": {
    "Project Version": "string" // The current version of the project
  }
}
```

**Status Codes**:
- 200 OK: Healthcheck successful, and the project version is returned.

## Response Generation

### `POST /response`

**Description**: Generates a response based on the provided prompt using Google Generative AI (Gemini model).

**Request Body**:
```json
{
  "prompt": "string" // The question or prompt for which a response is to be generated.
}
```

**Response Body**:
```json
{
  "success": true,
  "message": "Response sent.",
  "data": {
    "response": "string" // The generated response from the LLM.
  }
}
```

**Status Codes**:
- 200 OK: Response generated and returned successfully.
- 400 Bad Request: Prompt not provided in the request body.
- 500 Internal Server Error: Error while fetching the response from the LLM.
