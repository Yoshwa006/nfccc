# filepath: /home/yoshwa/Documents/nfc-rental/Dockerfile

# Use an official OpenJDK runtime as a parent image
FROM openjdk:17-jdk-alpine

# Set the working directory in the container
WORKDIR /app

# Copy the current directory contents into the container at /app
COPY . /app

# Build the application
RUN ./mvnw clean install

# Make port 8080 available to the world outside this container
EXPOSE 8080

# Run the application
CMD ["./mvnw", "spring-boot:run"]