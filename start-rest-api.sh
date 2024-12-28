#!/bin/bash

# Navigate to the 'rest-api' directory relative to the script's location
cd "$(dirname "$0")/rest-api" || { 
    echo "Directory 'rest-api' not found. Exiting."; 
    exit 1; 
}

# Run the npm start command
echo "Starting the REST API..."
npm run start
