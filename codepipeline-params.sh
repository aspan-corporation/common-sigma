#!/bin/bash
unset ORGANIZATION
unset REPOSITORY
unset BRANCH
unset REGION
unset CLOUDFORMATION_EXECUTION_ROLE
unset INFRASTRUCTURE_BUCKET_NAME

export ORGANIZATION=`git remote show origin | head -n 2 | tail -n 1 | awk -F '/' '{print $4}'`
export REPOSITORY=`git remote show origin | head -n 2 | tail -n 1 | awk -F '/' '{print $5}' | awk -F '.' '{print $1}'`
export BRANCH=`git rev-parse --abbrev-ref HEAD`
export REGION=`aws configure get region`
export CLOUDFORMATION_EXECUTION_ROLE=`aws cloudformation describe-stacks --query 'Stacks[?StackName==\`ac-bootstrap\`].Outputs[] | [?OutputKey==\`CloudFormationExecutionRoleArn\`] | [0].OutputValue' | tr -d '"'`
export INFRASTRUCTURE_BUCKET_NAME=`aws cloudformation describe-stacks --query 'Stacks[?StackName==\`ac-bootstrap\`].Outputs[] | [?OutputKey==\`InfrastructureBucketName\`] | [0].OutputValue' | tr -d '"'`

echo "Parameters values:"
echo "ORGANIZATION: ${ORGANIZATION}"
echo "REPOSITORY: ${REPOSITORY}"
echo "BRANCH: ${BRANCH}"
echo "REGION: ${REGION}"
echo "CLOUDFORMATION_EXECUTION_ROLE: ${CLOUDFORMATION_EXECUTION_ROLE}"
echo "INFRASTRUCTURE_BUCKET_NAME: ${INFRASTRUCTURE_BUCKET_NAME}"
