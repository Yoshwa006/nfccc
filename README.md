NFC Rental System
This is a Spring Boot-based web application that enables users to rent items using NFC tags. It allows item owners to register, update, and manage their rental items with secure password protection for updates. The system uses a MySQL database to store item and owner details.

Features
NFC Tag Integration: Rent items by scanning NFC tags.
Item Management: Owners can add and update item details such as name, description, price, and rental status.
Password Protection: Owners can only update their items by entering their password.
Rental Status: Track the availability of rental items (Available/Rented).
Secure: Passwords are stored securely using BCrypt hashing.
Technology Stack
Backend: Java 17, Spring Boot
Database: MySQL
Security: Spring Security (BCryptPasswordEncoder)
Build Tool: Maven
Dependency Management: Spring Boot Starter Web, Spring Data JPA, Spring Boot Starter Security, etc.
Prerequisites
Before running the application, make sure you have the following installed:

Java 17 or above
Maven
MySQL Database running on your local machine (or a remote database)
Setup Instructions
1. Clone the repository
bash
Copy
Edit
git clone https://github.com/your-username/nfc-rental-system.git
2. Configure MySQL
Set up a MySQL database with a user having appropriate privileges.
Update the application.properties file (or application.yml if using YAML) with your MySQL database credentials.
properties
Copy
Edit
spring.datasource.url=jdbc:mysql://localhost:3306/nfc_rental_system
spring.datasource.username=root
spring.datasource.password=your-password
spring.jpa.hibernate.ddl-auto=update
spring.jpa.properties.hibernate.format_sql=true
3. Build the application
Navigate to the project directory and run the following Maven command to build the project:

bash
Copy
Edit
mvn clean install
4. Run the Application
After the build is successful, you can run the application using the following command:

bash
Copy
Edit
mvn spring-boot:run
The application will start on http://localhost:8080 by default.

API Endpoints
1. Add a New Item
URL: /items
Method: POST
Request Body:
json
Copy
Edit
{
  "name": "Item Name",
  "description": "Description of the item",
  "price": 100,
  "rentalStatus": "Available",
  "ownerPassword": "owner-password"
}
2. Update an Existing Item
URL: /items/{id}
Method: PUT
Request Body:
json
Copy
Edit
{
  "name": "Updated Item Name",
  "description": "Updated description",
  "price": 150,
  "rentalStatus": "Rented",
  "ownerPassword": "owner-password"
}
3. Get Item Details
URL: /items/{id}
Method: GET
4. Delete an Item
URL: /items/{id}
Method: DELETE
Directory Structure
css
Copy
Edit
src
 ├── main
 │    ├── java
 │    │    └── com
 │    │         └── example
 │    │              └── nfc
 │    │                   └── rental
 │    │                        ├── controller
 │    │                        ├── model
 │    │                        ├── repository
 │    │                        ├── service
 │    │                        └── NfcRentalSystemApplication.java
 │    └── resources
 │         ├── application.properties
 │         └── static
 └── test
      └── java
           └── com
                └── example
                     └── nfc
                          └── rental
                               └── ItemServiceTest.java
Contributing
Feel free to fork the project, open issues, and submit pull requests. Contributions are welcome!

License
This project is licensed under the MIT License - see the LICENSE file for details.
