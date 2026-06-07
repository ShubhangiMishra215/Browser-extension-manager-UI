# Frontend Mentor - Browser extensions manager UI solution

This is a solution to the [Browser extensions manager UI challenge on Frontend Mentor](https://www.frontendmentor.io/challenges/browser-extension-manager-ui-yNZnOfsMAp).

## Table of contents

- [Overview](#overview)
  - [The challenge](#the-challenge)
  - [Links](#links)
- [My process](#my-process)
  - [Built with](#built-with)
  - [What I learned](#what-i-learned)
- [Author](#author)

## Overview

### The challenge

Users should be able to:

- Toggle extensions between active and inactive states
- Filter extensions by All, Active, and Inactive
- Remove extensions from the list
- Switch between light and dark color themes
- View the optimal layout depending on their device's screen size
- See hover and focus states for all interactive elements

### Links

- Solution URL: https://github.com/ShubhangiMishra215/Browser-extension-manager-UI.git
- Live Site URL: https://browser-extension-manager-ui-blond.vercel.app/

## My process

### Built with

- Semantic HTML5 markup
- Flexbox
- CSS Grid
- Mobile-first workflow
- [React](https://reactjs.org/) - JS library
-11111111111111111111111111111111111111111111111111111 [Vite](https://vitejs.dev/) - Build tool
- [Tailwind CSS v4](https://tailwindcss.com/) - For styles

### What I learned

Managing dark mode by toggling a `dark` class on the root wrapper and using Tailwind's `dark:` variants made theming straightforward without any extra libraries:

```jsx
<div className={darkmode ? 'dark' : ''}>
```

Lifting `activeFilter` state to `App.jsx` so both `Navbar` and `Cards` could share it taught me how important it is to identify the right level for shared state early in the component design.

Using `ext.name` instead of the array index to identify items when toggling or removing cards — especially after filtering — prevented a subtle bug where `filteredExtensions` indices didn't match the original `extensions` array indices.

## Author

- Frontend Mentor - [@ShubhangiMishra215](https://www.frontendmentor.io/profile/ShubhangiMishra215)
- GitHub - [@ShubhangiMishra215](https://github.com/ShubhangiMishra215)