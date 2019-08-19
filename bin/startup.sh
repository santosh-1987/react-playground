#!/bin/bash
{ bin/webpack-dev-server ;} &
{ rails s; } &
wait -n
pkill -P $$