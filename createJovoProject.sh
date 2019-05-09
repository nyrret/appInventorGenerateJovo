#!/bin/sh

# parameters
projectName=$1

# create jovo project
cd jovoProjects
jovo new $projectName

# move app.js file to jovo project
mv app.js "$projectName/src/app.js"
