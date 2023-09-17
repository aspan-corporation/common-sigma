#!/bin/bash
. ./codepipeline-params.sh

sam delete --stack-name $REPOSITORY-bootstrap --no-prompts
