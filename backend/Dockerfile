# Backend Dockerfile
FROM python:3.9-slim

# Set the working directory
WORKDIR /app

# Copy requirements
COPY requirements.txt .

# Install dependencies
RUN pip install --no-cache-dir -r requirements.txt

# Copy the application code
COPY . .

# Expose the backend port
EXPOSE 8000

# Run the app
CMD ["python", "app.py"]
