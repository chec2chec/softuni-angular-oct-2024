#!/bin/bash

# Find the PID of mongod.exe
PID=$(ps -W | grep mongod.exe | awk '{print $1}')

# Check if the PID is found
if [ -n "$PID" ]; then
    echo "Found mongod.exe with PID: $PID. Terminating..."
    # Kill the process
    kill -f $PID
    echo "mongod.exe process killed successfully."
else
    echo "No mongod.exe process found running."
fi
