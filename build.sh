#! /bin/bash

filename=./log/$1.txt

echo '开始拉代码' >> $filename

git pull >> $filename

echo '开始build' >> $filename

yarn build  >> $filename