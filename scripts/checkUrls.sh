#!/bin/bash

# Define an array of your JSON files
files=("projects" "links")
acceptable_codes=(200 301 302 000 999)
failed=false

# Loop through each file
for file in "${files[@]}"
do
  echo "Processing $file..."
  # Extract URLs and loop through each
  jq -r ".${file}[] | .url" "./src/data/${file}.json" | while read -r url; do
    # Prepend http if not present
    [[ "$url" != http* ]] && url="https:$url"
    # Perform health check
    http_status=$(curl -o /dev/null -s -w "%{http_code}\n" "$url")
    if [[ "${acceptable_codes[@]}" =~ "$http_status" ]]; then
      echo "URL check passed: $url"
    else
      echo "URL check failed: $url with status $http_status"
      failed=true
    fi
  done
done

if [ $failed ]; then exit 1; fi