# Cozy Clothes Company

Give your body care and comfort using this test-driven Angular Application based on best practices and atomic design.

## Table of Contents

- [Live Demo](#live-demo)
- [Getting Started](#getting-started)
- [Features](#features)
- [Technologies Used](#technologies-used)
- [API Integration](#api-integration)
- [Usage](#usage)
- [Contributing](#contributing)
- [License](#license)

## Live Demo

[Link to live demo]() coming soon.,,

## Getting Started

To get a local copy up and running follow these simple steps.

### Prerequisites

- Node.js (v18.20 or later)
- Angular CLI

### Installation

1. Clone the repo
   ```bash
   git clone https://github.com/MihlaliMgwebi/cozy-clothes-company.git
   ```
2. Navigate to the project directory
   ```bash
   cd cozy-clothes-company
   ```
3. Automatic Node Version Switching
   ```bash
   nvm install 18.20 && nvm use
   ```
4. Install NPM packages
   ```bash
   npm install
   ```
5. Run the application
   ```bash
   ng serve
   ```

## Features

- Test Driven Development (TDD) using Jest for Unit Testing, Cypress for E2E Testing, Storybook for Component Testing
  and Chromatic for Visual Testing.
- Integration of Fake Store API
- User-friendly interface designed based on Figma designs.
- Mobile-First Responsive Design
- [Git feature branch workflow strategy](https://www.atlassian.com/git/tutorials/comparing-workflows/feature-branch-workflow)
- Hosting an Angular application on GitHub Pages using Travis CI CT/CI

## Technologies Used

- Angular v18
- TypeScript
- HTML5, SASS & CSS3
- Fake Store API

## API Integration

This application uses the **Fake Store API** to retrieve product data. The following endpoints are utilized:

Here’s a summary of the endpoints used in the Fake Store API based on the provided information:

#### Product Endpoints

- **GET /products**: Fetches all products.
- **GET /products/:id**: Fetches a single product by ID.
- **GET /products?limit=5**: Fetches a limited number of products (5 in this case).
- **GET /products?sort=desc**: Fetches all products sorted in descending order.
- **GET /products/categories**: Fetches all product categories.
- **GET /products/category/electronics**: Fetches electronics.
- **GET /products/category/jewelery**: Fetches jewelry.
- **GET /products/category/men's clothing**: Fetches men's clothing.
- **GET /products/category/women's clothing**: Fetches women's clothing.
- **POST /products**: Adds a new product.
- **PUT /products/:id**: Updates an existing product by ID.
- **PATCH /products/:id**: Partially updates an existing product by ID.
- **DELETE /products/:id**: Deletes a product by ID.

#### Cart Endpoints

- **GET /carts**: Fetches all carts.
- **GET /carts/:id**: Fetches a single cart by ID.
- **POST /carts**: Adds a new cart.
- **PUT /carts/:id**: Updates an existing cart by ID.
- **DELETE /carts/:id**: Deletes a cart by ID.

#### User Endpoints

- **GET /users**: Fetches all users.
- **GET /users/:id**: Fetches a single user by ID.
- **POST /users**: Adds a new user.
- **PUT /users/:id**: Updates an existing user by ID.
- **DELETE /users/:id**: Deletes a user by ID.
- **POST /auth/login**: Authenticates a user and returns a token.

## Usage

1. After running `ng serve`, open your browser and navigate to `http://localhost:4200`.
2. Explore the different products displayed on the homepage.

## Contributing

Contributions are what make the open-source community such an amazing place to learn, inspire, and create.
Any contributions you make are **greatly appreciated**.

1. Fork the Project
2. Create your Feature Branch (`git checkout -b feature/AmazingFeature`)
3. Commit your Changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the Branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## License

Distributed under the MIT License. See `LICENSE` for more information.
