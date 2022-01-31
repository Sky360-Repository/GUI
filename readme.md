## Basic Usage
1. [Install Docker](https://www.docker.com/products/docker-desktop)
2. clone this repository
3. Run **`docker-compose build`** inside the root directory .
4. Run **`docker-compose up -d`** to start up the project.

## Development
- Visit http://localhost:8000 to see the root URL of the django app.
- Visit http://localhost:3000 to see the react app.
- Visit http://localhost:8888 will give you logs for each container.


## Commands
These commands are used to run this project. You should only need numbers 1-4.

1. `make up` to build the project and starting containers.
2. `make build` to build the project.
3. `make start` to start containers if project has been up already.
4. `make stop` to stop containers.
5. `make shell-web` to shell access web container.
6. `make shell-db` to shell access db container.
7. `make shell-nginx` to shell access nginx container.
8. `make logs-web` to log access web container.
9. `make logs-db` to log access db container.
10. `make logs-nginx` to log access nginx container.
11. `make collectstatic` to put static files in static directory.
12. `make log-web` to log access web container.
13. `make log-db` to log access db container.
14. `make log-nginx` to log access nginx container.
15. `make restart` to restart containers.

## Future DS support
In the **`Dockerfile`** we can add support for Numpy, Scipy, Gensim, Pandas, etc later https://gist.github.com/ruddra/870d7a51238ddfa4b50375086c12a4f5
