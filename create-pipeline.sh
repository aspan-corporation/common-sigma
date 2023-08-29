#!/bin/bash
ROLE=$1
SESSION_NAME=$2

unset FULL_REPOSITORY_ID
unset BRANCH
unset AWS_REGION

export FULL_REPOSITORY_ID=`git remote show origin | head -n 2 | tail -n 1 | awk -F '/' '{print $4 "/" $5}' | awk -F '.' '{print $1}'`
export REPOSITORY_NAME=`echo $FULL_REPOSITORY_ID | awk -F '/' '{print $2}'`
export BRANCH_NAME=`git rev-parse --abbrev-ref HEAD`
export AWS_REGION=`aws configure get region`
export BRANCH_HASH=`node -e "console.log(crypto.createHash('shake256', {outputLength: 6}).update('${BRANCH_NAME}').digest('base64'))"`

echo "Parameters values:"
echo "FULL_REPOSITORY_ID: ${FULL_REPOSITORY_ID}"
echo "BRANCH_NAME: ${BRANCH_NAME}"
echo "AWS_REGION: ${AWS_REGION}"
echo "BRANCH_HASH: ${BRANCH_HASH}"

sam deploy -t codepipeline.yaml --stack-name $REPOSITORY_NAME-pipeline --capabilities=CAPABILITY_IAM \
    --parameter-overrides="FullRepositoryId=${FULL_REPOSITORY_ID} BranchName=${BRANCH_NAME} Region=${AWS_REGION} StackName=${REPOSITORY_NAME}-${BRANCH_HASH}"
