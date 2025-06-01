# Use Java 17 (or your Java version)
FROM openjdk:17-jdk-slim

# Set working directory inside container
WORKDIR /app

# Copy the JAR file (adjust the name if different)
COPY target/*.jar app.jar

# Expose port 8080 (default Spring Boot port)
EXPOSE 8080

# Run the application
CMD ["java", "-jar", "app.jar"]