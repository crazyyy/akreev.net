# Start ssh-agent
eval $(ssh-agent) &&
  # Add github private key to the ssh-agent
  ssh-add ~/.ssh/id_rsa_github &&
  # List finger prints of all keys added to the ssh-agent
  ssh-add -l ||
  # Print an error message if either ssh-agent or ssh-add failed
  echo "Error: SSH agent, or ssh-add failed"

# Add an alias for Python3 command to Python
alias python3=python
# Add an alias for long listing with details and file type indicators
alias ll='ls -alF'
