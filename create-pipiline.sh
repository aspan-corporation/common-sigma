#!/bin/bash
ROLE=$1
SESSION_NAME=$2

unset REPOSITORY_ID
unset BRANCH

export REPOSITORY_ID=`git remote show origin | head -n 2 | tail -n 1 | awk -F '/' '{print $4 "/" $5}' | awk -F '.' '{print $1}'`
export BRANCH=`git rev-parse --abbrev-ref HEAD`

sam deploy -t codepipeline.yaml --stack-name $REPOSITORY_ID-pipeline --capabilities=CAPABILITY_IAM \
    --parameter-overrides="GitBranch=<branch-name> AnotherParameter=<another-parameter-value>"