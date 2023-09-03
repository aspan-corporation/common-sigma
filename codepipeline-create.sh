#!/bin/bash
ROLE=$1
SESSION_NAME=$2

. ./codepipeline-params.sh

sam deploy -t codepipeline.yml \
    --stack-name $REPOSITORY_NAME \
    --region $AWS_REGION \
    --capabilities=CAPABILITY_IAM \
    --parameter-overrides="FullRepositoryId=${FULL_REPOSITORY_ID} BranchName=${BRANCH_NAME} Region=${AWS_REGION} StackName=${REPOSITORY_NAME}-${BRANCH_HASH}"
