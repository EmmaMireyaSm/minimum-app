## minimum-app

1. Build and run the containers:

```bash
docker-compose up --build
```

2. Access the services:

* Backend: http://localhost:8000/graphql

* Frontend: http://localhost:3000

# Troubleshooting
1. Verify the Docker Compose network:
```bash
docker network ls
```
2. Test the connectivity from the frontend container to the backend container.  You should see successful ping responses.
```bash
docker exec -it frontend_service ping backend_service

PING backend_service (172.25.0.2) 56(84) bytes of data.
64 bytes from backend_service.minimum-app_default (172.25.0.2): icmp_seq=1 ttl=64 time=0.066 ms
64 bytes from backend_service.minimum-app_default (172.25.0.2): icmp_seq=2 ttl=64 time=0.102 ms
64 bytes from backend_service.minimum-app_default (172.25.0.2): icmp_seq=3 ttl=64 time=0.116 ms
```
