# Official Homepage
The official website of GitHub Campus Experts India.

<p align='center'>
	<img src='public/assets/logo.png' alt='Logo' width='100px' />
</p>

## Features
- User profiles for Indian campus experts.
- A dedicated blog for campus experts in India.

## Instructions
To add your own profile to the website or write a post on the blog,
follow the instructions given in the [wiki](../../wiki):
- [Adding a Profile](../../wiki/Adding-a-Profile)
- [Writing a Post](../../wiki/Writing-a-Blog-Post)

## Development
Using Node.js v15.x is recommended. Start the development server using:
```bash
npm start
```

The website will be running on http://localhost:8080/.

## Deployment
To generate the static build, use:
```bash
npm run build
```

The built website will be available inside the `build` directory. You may
deploy it on any static web server.

> ⚠ Note: React BrowserRouter is extensively used in the website, so make sure to redirect all 404 requests to `index.html` while retaining the route(s).

# Made with ❤ by [Param](https://www.paramsid.com).