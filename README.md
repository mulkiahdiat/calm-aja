# Your Beautiful Website

A modern, responsive website built with React, TypeScript, and Tailwind CSS, ready to deploy on Netlify.

## Features

- Responsive design that works on all devices
- Dark/light mode toggle
- Smooth scroll navigation
- Beautiful UI with subtle animations
- Contact form
- Easy deployment to Netlify

## Deploying to Netlify

This project is configured for easy deployment to Netlify. Here's how to deploy it:

1. Push your code to a GitHub, GitLab, or Bitbucket repository

2. Sign up for a [Netlify account](https://app.netlify.com/signup) if you don't have one

3. Click "New site from Git" in your Netlify dashboard

4. Select your repository

5. In the build settings:
   - Build command: `npm run build`
   - Publish directory: `dist`

6. Click "Deploy site"

Netlify will automatically build and deploy your site. Each time you push changes to your repository, Netlify will automatically rebuild and redeploy your site.

## Running Locally

```bash
# Install dependencies
npm install

# Start development server
npm run dev

# Build for production
npm run build
```

## Customization

- Update text and images in the component files under `src/components/`
- Modify colors and styling in `tailwind.config.js`
- Add your own logo and favicon
- Customize the contact form to connect to your preferred backend

Enjoy your new website!