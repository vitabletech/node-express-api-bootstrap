#!/bin/bash

# Set up Git
git config --global user.email $GIT_EMAIL
git config --global user.name $GIT_USERNAME

# Install dependencies
npm install

# Run the appropriate command based on the NODE_ENV variable
if [[ $NODE_ENV == 'development' ]]; then
    npm run dev
else
    npm start
fi