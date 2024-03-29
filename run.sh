#!/bin/sh
docker run \
  -it \
  --rm \
  --name sho-excel-script \
  --mount type=bind,source="$(pwd)"/EXCEL-FILE,target=/usr/src/app/EXCEL-FILE \
  --mount type=bind,source="$(pwd)"/output,target=/usr/src/app/output \
  dhe/sho_excel_script node index.js