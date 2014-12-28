#!/bin/sh
if [ -z "$DEV_HOME" ]; then
    export DEV_HOME = "~/Development"
fi

mongod --dbpath=${DEV_HOME}/data/db