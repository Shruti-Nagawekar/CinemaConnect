# Team: CinemaConnect

# Movie Booking System (MBS)

## Table of Contents
- [Overview](#overview)
- [Features](#features)
- [Technical Details](#technical-details)
- [Development Environment](#development-environment)
- [Non-functional Requirements](#non-functional-requirements)
- [Assumptions and Dependencies](#assumptions-and-dependencies)
- [Team Members](#team-members)
- [Contribution](#contribution)
- [Future Enhancements](#future-enhancements)
- [Acknowledgments](#acknowledgments)

## Overview
The **Movie Booking System (MBS)** is developed to streamline the ticket purchasing process for a chain of six theaters located in Lubbock, Amarillo, Levelland, Plainview, Snyder, and Abilene. This system aims to improve user convenience by allowing online ticket booking, reducing wait times at theaters, and enhancing overall customer satisfaction. The MBS also supports theater management by providing tools for show and ticket sales management.

## Features
### User Functionality
- **Account Management**: Register, log in, and manage user accounts.
- **Movie Catalog**: Browse current and upcoming movies.
- **Search and Details**: Search for specific movies and access detailed information (synopsis, cast, reviews).
- **Ticket Booking**: Select showtimes, locations, and book up to 10 tickets.
- **Secure Payments**: Process payments using credit/debit cards or PayPal.
- **Electronic Tickets**: Generate digital tickets for display or printing.
- **User Reviews**: Post and read movie reviews.

### Admin Functionality
- **System Status Dashboard**: View ticket sales and current movies.
- **Manage Shows**: Add, remove, and modify movie details, including schedules and pricing.

## Technical Details
### External Interfaces
- **User Interfaces**: Designed for desktops, tablets, and smartphones.
- **Hardware Support**: Integrates with printers and barcode scanners for ticket validation.
- **Software Components**: Utilizes Firebase for backend and database management and React.js for the frontend.

### Functional Requirements
- **User Authentication**: Secure login and registration.
- **Movie Browsing and Search**: Full catalog browsing and search capabilities.
- **Payment Integration**: Secure payment processing using PayPal SDK.
- **Review System**: Support for user reviews.
- **Admin Features**: Show management and status reporting.

## Development Environment
- **Frontend Technologies**: HTML5, CSS3, JavaScript, React.js
- **Backend**: Firebase (Authentication, Firestore Database)
- **Hosting**: Firebase Hosting
- **Payment Processing**: PayPal SDK

## Non-functional Requirements
- **Performance**: All features execute within 5 seconds.
- **Scalability**: Supports multiple simultaneous users.
- **Security**: Includes SSL encryption, two-factor authentication, and compliance with security standards.
- **Accessibility**: Adheres to ADA and FCC guidelines for usability.

## Assumptions and Dependencies
- Dependence on reliable payment services (e.g., PayPal).
- Users require internet access and compatible devices.
- Dependence on stable third-party services for database hosting and notifications.

## Team Members
- Shruti Nagawekar
- Rachel Lorfing
- Joy Barno
- Raaida Noor Mahbub
- Joy Omaji
- Dulani Palihapitiya

### Professor
- Dr. Don Pathirage

## Contribution
All team members contributed equally to the project by participating in design, coding, testing, and documentation. Collaborative problem-solving and consistent peer reviews were conducted to maintain quality.

## Future Enhancements
- Implement seat selection functionality.
- Integrate a loyalty rewards system.
- Add movie trailers and additional media content.

## Acknowledgments
Special thanks to Dr. Don Pathirage for his continuous support and guidance throughout this project.
