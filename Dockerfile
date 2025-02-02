# Use official Maven image
FROM maven:3.8.5-openjdk-17 AS build

WORKDIR /app

# Copy pom.xml and install dependencies first (for caching)
COPY pom.xml ./
RUN mvn dependency:go-offline

# Copy the source code
COPY . .

# Build the application
RUN mvn clean install -DskipTests

# Use a lightweight JDK image for running the app
FROM openjdk:17-jdk-slim

WORKDIR /app

# Copy the built JAR from the build stage
COPY --from=build /app/target/*.jar app.jar

# Expose port 8080
EXPOSE 8080

# Run the application
CMD ["java", "-jar", "app.jar"]
