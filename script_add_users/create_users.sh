#!/bin/bash

while read line
do
  firstname=$(echo $line | cut -d ";" -f 2)
  login=$(echo $line | cut -d ";" -f 1)
  useradd -m $login -c "$firstname"
done < "eleves.txt"
