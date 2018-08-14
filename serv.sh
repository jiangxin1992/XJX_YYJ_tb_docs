#!/usr/bin/env bash

echo $1
if [[ $1 == "pub" ]];then
echo "publish..."
rsync -r * yej.yshow:app/rest-api
exit 0
fi;

pm2 start http-server --name yej-rest-docs -- -p12345
