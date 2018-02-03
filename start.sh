#!/bin/bash

# Redirect port 80 (http) to 8080 (http server)
# Allows express server to be run as regular user for security measures

sudo iptables -t nat -D PREROUTING 1
sudo iptables -t nat -A PREROUTING -p tcp --dport 80 -j REDIRECT --to-ports 8080

nohup node server.js &> iframe.log &
