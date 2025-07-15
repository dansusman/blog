#!/usr/bin/env node

const fs = require('fs');
const path = require('path');
const crypto = require('crypto');

function generateRandomName(originalName) {
  const ext = path.extname(originalName);
  const randomId = crypto.randomBytes(8).toString('hex');
  return `${randomId}${ext}`;
}

function uploadFile(filePath) {
  if (!fs.existsSync(filePath)) {
    console.error(`Error: File ${filePath} does not exist`);
    process.exit(1);
  }

  const uploadsDir = path.join(__dirname, 'static', 'uploads');
  if (!fs.existsSync(uploadsDir)) {
    fs.mkdirSync(uploadsDir, { recursive: true });
  }

  const originalName = path.basename(filePath);
  const newName = generateRandomName(originalName);
  const destinationPath = path.join(uploadsDir, newName);

  // Copy file to uploads directory
  fs.copyFileSync(filePath, destinationPath);

  // Generate the public URL
  const baseURL = 'https://dansusman.github.io';
  const publicURL = `${baseURL}/uploads/${newName}`;

  console.log(`File uploaded successfully!`);
  console.log(`Original name: ${originalName}`);
  console.log(`New name: ${newName}`);
  console.log(`Public URL: ${publicURL}`);
  console.log(`Local path: ${destinationPath}`);

  return { newName, publicURL, destinationPath };
}

// Command line usage
if (require.main === module) {
  const filePath = process.argv[2];
  
  if (!filePath) {
    console.error('Usage: node upload.js <file-path>');
    console.error('Example: node upload.js ~/Downloads/image.png');
    process.exit(1);
  }

  uploadFile(filePath);
}

module.exports = { uploadFile };