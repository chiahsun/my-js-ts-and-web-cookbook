#!/usr/bin/env bash

echo "Start watch compiling..."

fswatch --no-defer -r -e ".*" -i "\\.ts" -i "\\.js" -0 ./TypeScriptTutorialNet | while read -d "" event
do
    echo "$event"
    make js-compile
done

echo "End watch compiling ..."