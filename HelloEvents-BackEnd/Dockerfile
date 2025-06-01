# Build stage: Use a Maven image with Java 21
FROM maven:3.9.8-eclipse-temurin-21 AS build

# Set the working directory inside the container
WORKDIR /app

# Copy the pom.xml file and download dependencies (this step is cached)
COPY pom.xml .
RUN mvn dependency:go-offline

# Copy the source code and build the app
COPY src ./src
ARG SKIP_TESTS=true
RUN mvn package $(if [ "$SKIP_TESTS" = "true" ]; then echo "-DskipTests"; fi)

# Runtime stage: Use a smaller image to run the app
FROM openjdk:21-jdk-slim

# Set the working directory
WORKDIR /app

# Add a non-root user for security
RUN addgroup --system appgroup && adduser --system --ingroup appgroup appuser
USER appuser

# Copy the built JAR file from the build stage
COPY --from=build /app/target/*.jar app.jar

# Expose the port the app runs on (Spring Boot default is 8080)
EXPOSE 8080

# Run the app with some memory settings
ENTRYPOINT ["java", "-Xms512m", "-Xmx1024m", "-jar", "app.jar"]
