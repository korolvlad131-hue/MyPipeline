# Node.js Docker CI/CD Pipeline

## Description
Node.js application deployed to AWS EC2 using Docker Compose and GitHub Actions.

## Technologies
- Node.js
- Docker
- Docker Compose
- PostgreSQL 15
- GitHub Actions
- Docker Hub
- AWS EC2

## Project Files
- `index.js` - HTTP server and PostgreSQL connection
- `Dockerfile` - Docker image configuration
- `.dockerignore` - Excluded files
- `docker-compose.yml` - Application and database services
- `.github/workflows/ci.yml` - Automated CI/CD pipeline

## Deployment
GitHub Actions automatically builds the Docker image, pushes it to Docker Hub, and deploys the application to AWS EC2 using Docker Compose.

## Docker Compose
The project uses two containers:
- `nodeapp` - Node.js application on port 3000
- `nodeapp-postgres` - PostgreSQL 15 database with persistent storage

Run the services:

```bash
docker compose up -d
```

Check containers:

```bash
docker compose ps
```

Check database connection:

```bash
docker compose logs app
```

## Results
- Docker containers started successfully.
- PostgreSQL connection established.
- GitHub Actions deployment completed successfully.

Application output:

```text
Hello CI/CD from AWS EC2!
```

Database log:

```text
PostgreSQL connected successfully!
```

## Docker Hub
Image: `korolvlad/nodeapp:main`
