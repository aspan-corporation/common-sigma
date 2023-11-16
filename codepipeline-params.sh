#!/bin/bash
unset ORGANIZATION
unset REPOSITORY
unset BRANCH
unset REGION

export ORGANIZATION=`git remote show origin | head -n 2 | tail -n 1 | awk -F '/' '{print $4}'`
export REPOSITORY=`git remote show origin | head -n 2 | tail -n 1 | awk -F '/' '{print $5}' | awk -F '.' '{print $1}'`
export BRANCH=`git rev-parse --abbrev-ref HEAD`
export REGION=`aws configure get region`

echo "Parameters values:"

echo "ORGANIZATION: ${ORGANIZATION}"
echo "REPOSITORY: ${REPOSITORY}"
echo "BRANCH: ${BRANCH}"
echo "REGION: ${REGION}"
