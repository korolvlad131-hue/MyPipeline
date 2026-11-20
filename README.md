# Node.js Docker CI/CD Pipeline

A simple Node.js application deployed to AWS EC2 using Docker and GitHub Actions.

## Technologies

- Node.js
- Docker
- Docker Hub
- GitHub Actions
- AWS EC2

## Project Structure

- `index.js` - Node.js HTTP server
- `package.json` - Project configuration
- `Dockerfile` - Docker image configuration
- `.dockerignore` - Docker build exclusions
- `.github/workflows/ci.yml` - CI/CD workflow

## Docker Setup

### Build Docker Image

```bash
docker build -t nodeapp:local .
```

### Run Docker Container

```bash
docker run -d --name nodeapp -p 3000:3000 nodeapp:local
```

Open http://localhost:3000

## CI/CD Pipeline

GitHub Actions automatically:

1. Installs dependencies and builds the project.
2. Builds a Docker image with commit and branch tags.
3. Pushes the image to Docker Hub.
4. Connects to AWS EC2 via SSH.
5. Deploys the updated Docker container.

## Docker Hub

Image: `korolvlad/nodeapp:main`

## Result

The application runs on AWS EC2 on port 3000.

Expected output:

```text
Hello CI/CD from AWS EC2!
```
