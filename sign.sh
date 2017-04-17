#!/bin/sh

tmpfile=$(mktemp)
echo "using $tmpfile for $1"
cat $1 >> $tmpfile
echo "
<!--" >> $tmpfile
gpg --digest-algo SHA256 --default-key 34F28940  --clearsign $tmpfile #Because im signing with non-default key
echo "<!--" > $1
cat "$tmpfile.asc" >> $1
echo "-->" >> $1
rm $tmpfile
rm "$tmpfile.asc"
