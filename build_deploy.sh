#!/bin/bash
# declare STRING variable
STRING="done."
#print variable on a screen
echo "Cleaning dist directory:"
gulp clean
echo $STRING

echo "Building dist:"
gulp build
echo $STRING

echo "Deployng to Firebase:"
firebase deploy
echo $STRING

echo "Opening firebase:"
firebase open
echo $STRING