#!/bin/bash
SESSION=ps
env="$1"
dir=`pwd`

tmux -2 new-session -d -s $SESSION -c "$dir/inst/angular" -n 'ed'
tmux new-window -t $SESSION:1 -n 'sh' -c "$dir/inst/angular"

tmux new-window -t $SESSION:2 -n 'ng' -c "$dir/inst/angular"
if [ "$env" = "local" ]; then
  tmux send-keys "npm start" C-m
elif [ "$env" = "vpn" ]; then
  tmux send-keys "npm start -- --host 10.8.0.2 --config-name vpn" C-m
else
  tmux send-keys "npm start -- -c demo" C-m
fi

tmux new-window -t $SESSION:3 -n 'ng' -c "$dir/inst/angular"
tmux send-keys "CHROME_BIN=/usr/bin/chromium ng test --watch --source-map=false"

tmux new-window -t $SESSION:4 -c "$dir" -n 'R'
if [ "$env" = "local" ]; then
  tmux send-keys "R --no-save < run-backend.R" C-m
elif [ "$env" = "vpn" ]; then
  tmux send-keys "R --no-save < run-backend-vpn.R" C-m
else
  tmux send-keys "R --no-save < run-backend-demo.R" C-m
fi
tmux -2 attach-session -t $SESSION
