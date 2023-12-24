#!/bin/bash
. ./codepipeline-params.sh

sam delete --stack-name $REPOSITORY-pipeline --no-prompts
