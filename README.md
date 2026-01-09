## Online Library Application

This Book Management application is developed using React and Vite.
It allows users to browse books by category, view detailed information about each book, and add new books to the collection.

The application uses Redux Toolkit for global state management, ensuring that newly added books are instantly reflected across the application without page reloads.

## Features

- Home page displaying categories and popular books
- Allows user to search for a book in a particular category
- Lets user view more details about the book
- Allows addition of new book
- Shows error when user tries to search for a non existing route
- Global state management with Redux
- Clean and user-friendly UI

## Technology used

- React
- Vite
- React router dom
- Redux toolkit, react-redux
- CSS
- Javascript

## How to run the project

1. Clone the repository(if using git and github) or extract files (if using zip file)

2. Navigate to the online-library folder
   cd online-library

3. Install dependencies (npm uses package-lock.json)
   npm install

4. Run the application
   npm run dev

5. Open browser and go to the link provided by vite

## Flow of application

The application interface consists of a Home page featuring various book categories. Users can select a category, leading them to the Browse Books page, which displays a curated list of books based on their selection. A search bar allows users to find specific titles or authors. Each book card includes a "View Details" option for exploring complete book information, redirecting users to the Book Details page. This page presents comprehensive details about the chosen book. Additionally, users have the functionality to add new books through the Add Book page. Upon submission, the new book is stored in Redux and users are redirected back to the Browse Books page, with the new entry appearing at the top of the list without requiring a page refresh.

## Author

Samudyatha Karanth

## GitHub link

https://github.com/Samm005/Online_Library
