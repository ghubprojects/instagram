<p align="center">
  <img src="https://github-production-user-asset-6210df.s3.amazonaws.com/83504674/242155920-0a6da61c-2cc1-41ce-946f-195f681ff540.png" width="150" >
</p>

<h1 align="center">Instagram</h1>
<div align="center">
  <img src="https://img.shields.io/github/contributors/ghubprojects/instagram" />
  <img src="https://img.shields.io/github/issues/ghubprojects/instagram" />
  <img src="https://img.shields.io/github/forks/ghubprojects/instagram" />
  <img src="https://img.shields.io/github/stars/ghubprojects/instagram" />
  <img src="https://img.shields.io/github/license/ghubprojects/instagram" />
  <img src="https://img.shields.io/github/languages/count/ghubprojects/instagram" />
  <img src="https://img.shields.io/github/languages/top/ghubprojects/instagram" />
  <img src="https://img.shields.io/github/languages/code-size/ghubprojects/instagram" />
  <img src="https://img.shields.io/github/issues-pr-raw/ghubprojects/instagram" />
</div>

## Table of Contents

-   [About the Project](#about)
    -   [Build with](#build-with)
-   [Getting Started](#getting-started)
    -   [Installation](#installation)
    -   [Running](#running)
-   [File Structure](#file-structure)
-   [Contributors](#contributors)
-   [License](#license)

## About

> Instagram is a fully responsive social media app that is a mimic for [Instagram](https://www.instagram.com/) built using [ReactJS](https://react.dev/).

### Build with

-   [Vite](https://vitejs.dev/)
-   [ReactJS](https://react.dev/)
-   [Chakra UI](https://chakra-ui.com/)
-   [Sass](https://sass-lang.com/)
-   [Axios](https://github.com/axios/axios)

## Getting Started

> This is an list of needed instructions to set up your project locally, to get a local copy up and running follow these instructuins.

### Installation

1. **_Clone the repository_**

```sh
$ git clone https://github.com/ghubprojects/instagram.git
```

2. **_Navigate to repository directory_**

```sh
$ cd instagram
```

3. **_Install pnpm (if pnpm is already being used, skip this step)_**

```sh
$ npm install -g pnpm
```

4. **_Install all dependencies_**

```sh
$ pnpm install
```

### Running

1. **_Compiles and hot-reloads for development_**

```sh
$ pnpm dev
```

2. **_Compiles and minifies for production_**

```sh
$ pnpm build
```

<div align="left">
  
## File Structure

```md
instagram
├── README.md
├── .gitignore
├── .prettierrc
├── index.html
├── package.json
├── pnpm-lock.yaml
├── tsconfig.json
├── tsconfig.node.json
├── vite.config.ts
├── src
│ ├── assets
| | ├── fonts
| | ├── icons
| | └── images
│ ├── components
| | └── Avatar
│ ├── config
| | └── paths
│ ├── layouts
| | ├── components
| | | ├── Navbar
| | | | ├── Navbar
| | | | └── NavItem
| | | ├── NewsFeed
| | | | ├── Comment
| | | | ├── NewsFeed
| | | | └── Post
| | | ├── Sidebar
| | | | ├── Sidebar
| | | | └── SuggestedAccount
| | | ├── Stories
| | | | └── Stories
| ├── pages
| | ├── ExplorePage
| | ├── HomePage
| | ├── InboxPage
| | ├── PageNotFound
| | └── ReelsPage
| ├── routes
| ├── styles
| | ├── fonts
| | ├── global
| | ├── mixins
| | ├── variables
| | └── theme.ts
| ├── utils
| | ├── enum
| | └── layoutItems
│ ├── App.tsx
│ └── main.tsx
├── public
│ └── vite.svg
└── node_modules
```

</div>

## Contributors

> Thanks goes to these wonderful people in the frontend team.

| <img src="https://github-production-user-asset-6210df.s3.amazonaws.com/83504674/242248844-6a937701-fda2-49c7-8988-d6cb81dc6e82.jpg" width="100px" alt="user-image"/><br />[The Anh](https://github.com/ghubprojects) |
| :------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------: |

## License

> This project is licensed under the terms of the [MIT License](https://github.com/ghubprojects/instagram/blob/master/LICENSE).