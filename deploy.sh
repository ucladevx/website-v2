#!/bin/bash

S3_BUCKET="www.ucladevx.com"
DEPLOY_BRANCH="master"
BUILD_FOLDER="dist"

if [[ $TRAVIS_BRANCH == $DEPLOY_BRANCH && $TRAVIS_PULL_REQUEST == "false" ]]; then

  # Build the website bundle/assets
  yarn build

  # Install awscli
  pip install awscli --upgrade --user

  # Authentication for uploading build to S3 relies on TravisCI having environment variables
  # AWS_ACCESS_KEY_ID and AWS_SECRET_ACCESS_KEY set for an AWS IAM user with S3FullAccess privileges

  # Sync the build folder with our S3 bucket
  aws s3 sync $BUILD_FOLDER/ "s3://$S3_BUCKET" --acl public-read --delete

  # Force-invalidate the now-outdated assets rather than waiting for them to expire
  # Uncomment the following lines if/when we use CloudFront
  # aws cloudfront create-invalidation \
  #   --distribution-id $CLOUDFRONT_DIST_ID \
  #   --paths /\*

else
  # Don't want to deploy if it's not one of the above branches
  echo "Not deploying"
  exit
fi
