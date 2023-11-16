#!/bin/bash

. ./codepipeline-params.sh

sam deploy -t codepipeline.yml \
    --stack-name $REPOSITORY-pipeline \
    --region $REGION \
    --capabilities=CAPABILITY_IAM \
    --parameter-overrides="FullRepositoryId=${ORGANIZATION}/${REPOSITORY} BranchName=${BRANCH} Region=${REGION} ComponentStackName=${REPOSITORY}"
