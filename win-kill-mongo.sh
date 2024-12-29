#!/bin/bash

# Find the processes matching "mongod.exe"
PIDS=$(tasklist | grep mongod.exe | awk '{print $2}')

# Check if any PIDs are found
if [ -n "$PIDS" ]; then
    echo "Found mongod.exe processes with PIDs: $PIDS"

    # Iterate over each PID and terminate it
    for PID in $PIDS; do
        echo "Terminating mongod.exe with PID: $PID..."
        taskkill //PID $PID //F

        # Check if the termination was successful
        if [ $? -eq 0 ]; then
            echo "Successfully terminated mongod.exe with PID: $PID"
        else
            echo "Failed to terminate mongod.exe with PID: $PID"
        fi
    done
else
    echo "No mongod.exe processes found running."
fi
