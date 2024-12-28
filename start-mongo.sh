#!/bin/bash

# Define the default dbpath
DBPATH="/c/data/db"

# Define the location of mongod.exe
MONGO_EXEC="/c/Program Files/MongoDB/Server/8.0/bin/mongod.exe"

# Check if the default dbpath exists, if not, create it
if [ ! -d "$DBPATH" ]; then
    echo "Default dbpath ($DBPATH) not found. Creating it..."
    mkdir -p "$DBPATH"
fi

# Start mongod.exe
echo "Starting mongod.exe with default dbpath ($DBPATH)..."
"$MONGO_EXEC"
