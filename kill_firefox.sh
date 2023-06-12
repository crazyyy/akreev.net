#!/bin/bash

# Find all running Firefox processes
firefox_pids=$(pgrep -f firefox)

# Check if any Firefox processes are running
if [ -z "$firefox_pids" ]; then
  echo "No running Firefox instances found."
else
  # Kill each Firefox process
  for pid in $firefox_pids; do
    echo "Killing Firefox process with PID: $pid"
    kill $pid
  done
  echo "All Firefox instances have been killed."
fi
