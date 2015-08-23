robcmills
=========

Personal website 

```bash

# watch and render templates

jade -w -P -o dist jade/index.jade

# install awscli

virtualenv env
. env/bin/activate
pip install awscli

# configure awscli

aws configure

# sync local -> s3

./sync.sh

```
