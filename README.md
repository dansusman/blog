# Dan Susman's Blog

A minimal Hugo blog using the [Dario theme](https://github.com/dansusman/dario), inspired by Dario Amodei's personal website. This blog is designed to be minimal, performant, and elegant for reading.

## Prerequisites

- [Hugo](https://gohugo.io/installation/) (v0.119.0 or later)
- Git

## Getting Started

### Development Server

To run the development server with live reload:

```bash
hugo server
```

The site will be available at `http://localhost:1313`. The server will automatically reload when you make changes to content or configuration.

### Building for Production

To build the static site for production:

```bash
hugo
```

This generates the static files in the `public/` directory.

### Creating New Posts

Create a new blog post:

```bash
hugo new content/posts/my-new-post.md
```

Or create the file manually in `content/posts/` with the following front matter:

```yaml
---
title: "Your Post Title"
author: "Dan Susman"
description: "A brief description of your post"
summary: "A summary for search engines"
date: 2024-01-01T00:00:00-00:00
draft: false
---

Your content here in markdown format.
```

## Project Structure

```
.
├── archetypes/          # Content templates
├── content/
│   └── posts/          # Blog posts
├── data/               # Data files
├── layouts/            # Layout overrides
├── static/             # Static files (images, etc.)
├── themes/
│   └── dario/          # Dario theme
├── hugo.toml           # Hugo configuration
└── public/             # Generated site (ignored in git)
```

## Configuration

The site configuration is in `hugo.toml`. Key settings:

- **Site title**: "Dan Susman"
- **Theme**: Dario
- **Author**: Dan Susman
- **Base URL**: Update for production deployment

## Theme Features

The Dario theme includes:

- Minimal, clean design
- Dark/light mode toggle
- Responsive layout
- Fast performance (100/100 PageSpeed score)
- OpenGraph meta tags
- RSS feeds

## Useful Commands

| Command | Description |
|---------|-------------|
| `hugo server` | Start development server |
| `hugo server -D` | Include draft posts |
| `hugo` | Build production site |
| `hugo new content/posts/post-name.md` | Create new post |
| `hugo version` | Check Hugo version |

## File Upload System

The blog includes a file upload system that allows you to upload HTML, PNG, or any other files to be accessible at `dansusman.github.io/uploads/filename.ext`.

### Usage

To upload a file:

```bash
node upload.js /path/to/your/file.png
```

### What it does:
- Copies files to `static/uploads/` directory with randomized names
- Generates a public URL for the uploaded file
- Supports any file type (HTML, PNG, PDF, etc.)
- Files are accessible at `https://dansusman.github.io/uploads/[random-id].ext`

### Example:

```bash
# Upload an image
node upload.js ~/Downloads/screenshot.png

# Output:
# File uploaded successfully!
# Original name: screenshot.png
# New name: a1b2c3d4.png
# Public URL: https://dansusman.github.io/uploads/a1b2c3d4.png
```

### Notes:
- Files are given random names to prevent conflicts and avoid predictable URLs
- After uploading, commit and push your changes to deploy the files
- The upload script requires Node.js to be installed

## Deployment

The built site in `public/` can be deployed to any static hosting service like Netlify, Vercel, GitHub Pages, or AWS S3.