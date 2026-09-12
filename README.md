# 🚀 Technology Stack Builder

A modern and responsive web application that allows users to explore different technologies and build their own personalized technology stack.

Users can view technology details, add their favorite technologies to their stack, remove individual technologies, or clear the entire stack.

## 🛠️ Technologies Used

* React
* TypeScript
* Vite
* Tailwind CSS
* DaisyUI
* React Icons
* React Toastify

## ✨ Features

### 1. 🔍 Explore Technologies

Users can explore different technologies with their name, category, difficulty, rating, badge, and description.

### 2. ➕ Build Your Own Stack

Users can add their favorite technologies to **Your Stack** and easily see all selected technologies.

### 3. 🗑️ Manage Your Stack

Users can remove individual technologies or remove all selected technologies at once. Toast notifications provide instant feedback for each action.

## 📱 Responsive Design

The application is responsive and works smoothly on:

* 📱 Mobile devices
* 💻 Tablets
* 🖥️ Desktop screens

## 🚀 Installation

Clone the repository:

```bash
git clone YOUR_GITHUB_REPOSITORY_URL
```

Go to the project folder:

```bash
cd assignment-5
```

Install dependencies:

```bash
npm install
```

Run the development server:

```bash
npm run dev
```

## 👨‍💻 Author

**Md Habibullah**

Built with ❤️ using React, TypeScript, and Tailwind CSS.








## ❓ React Questions & Answers

### 1. What is JSX, and why is it used in React?

JSX is a syntax that lets us write HTML-like code inside JavaScript/TypeScript. React uses JSX to make UI components easier to write and understand.

### 2. What is the difference between props and state?

**Props** are data passed from a parent component to a child component. They are read-only.

**State** is data managed inside a component that can change over time and update the UI.

### 3. What does the `useState` hook do, and where did you use it in this project?

`useState` is used to create and manage changing data in a React component.

In this project, I used `useState` to manage the technologies added to **Your Stack** and update the stack when technologies are added or removed.

### 4. What does the `useEffect` hook do, and why did you need it to load the JSON data?

`useEffect` is used to perform side effects in a React component, such as fetching data or working with external resources.

It can be used to load the technology data from the JSON file when the component starts.

### 5. Why does every item in a `.map()` list need a unique `key` prop?

React uses the `key` to identify each item in a list. A unique key helps React efficiently update, add, or remove items when the list changes.

### 6. What is conditional rendering? Show one place you used it.

Conditional rendering means showing different UI based on a condition.

For example, when the stack is empty, I show an empty message:

```tsx
{card.length === 0 ? (
  <p>Your stack is empty.</p>
) : (
  card.map(item => ...)
)}
```

### 7. How do you pass data from a parent component to a child component, and how does a child send something back to the parent?

A parent passes data to a child using **props**.

A child can send information back to the parent by calling a function that the parent passes through props.

For example:

```tsx
<Child handleAdd={handleAdd} />
```

Here, the parent sends the `handleAdd` function to the child, and the child calls it when needed.

