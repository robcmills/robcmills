
# aws s3 sync  \
#   /Users/robcmills/code/robcmills.net/robcmills/dist  \
#   s3://robcmills.net  \
#   --exclude '*.DS_Store' # \
  # --dryrun

aws s3 sync  \
  /Users/robcmills/code/robcmills.net/robcmills/react-app/build  \
  s3://robcmills.net  \
  --exclude '*.DS_Store' # \
  # --dryrun
