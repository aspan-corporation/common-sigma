#!/bin/bash
unset ORGANIZATION
unset REPOSITORY
unset BRANCH
unset REGION
unset BRANCH_HASH

export ORGANIZATION=`git remote show origin | head -n 2 | tail -n 1 | awk -F '/' '{print $4}'`
export REPOSITORY=`git remote show origin | head -n 2 | tail -n 1 | awk -F '/' '{print $5}' | awk -F '.' '{print $1}'`
export BRANCH=`git rev-parse --abbrev-ref HEAD`
export REGION=`aws configure get region`
export BRANCH_HASH=`node -e "console.log(crypto.createHash('shake256', {outputLength: 6}).update('${BRANCH}').digest('base64'))"`

echo "Parameters values:"

echo "ORGANIZATION: ${ORGANIZATION}"
echo "REPOSITORY: ${REPOSITORY}"
echo "BRANCH: ${BRANCH}"
echo "REGION: ${REGION}"
echo "BRANCH_HASH: ${BRANCH_HASH}"
