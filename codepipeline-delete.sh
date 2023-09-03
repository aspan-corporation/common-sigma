#!/bin/bash
. ./codepipeline-params.sh

sam delete --stack-name $REPOSITORY_NAME
