aws s3 sync  \
  ./react-vite-app/dist  \
  s3://robcmills.net  \
  --exclude '*.DS_Store' # \
  # --dryrun
