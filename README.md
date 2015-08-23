robcmills
=========

Personal website 

```bash

# installing awscli

virtualenv env
. env/bin/activate
pip install awscli

# configuring awscli

aws configure

# using awscli

aws [options] <command> <subcommand> [parameters]

# sync local -> s3

aws s3 sync 
  /Users/robcmills/code/robcmills.net/robcmills 
  s3://robcmills.net 
  --dryrun 
  --exclude '*.DS_Store' 
  --exclude '*.pyc' 
  --exclude '.git/*'
  --exclude 'env/*' 

```
