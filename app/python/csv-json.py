#!/usr/bin/env python
import sys
import json
import os
import re

def clean(s):
   # Remove invalid characters
   s = re.sub('[^0-9a-zA-Z_]', '', s)
   # Remove leading characters until we find a letter or underscore
   s = re.sub('^[^a-zA-Z_]+', '', s)

   return s

# Accepts a csv data file (with header titles in the first row) and dumps a json
# file with the same name in the same directory.
def main(argv=None):
  if argv is None:
    argv = sys.argv
  
  os.chdir('/'.join(argv[1].split('/')[0:-1]))

  csv_f = open(argv[1].split('/')[-1],'r')

  records = []
  headers = []
  for ln, line in enumerate(csv_f):
    line_dat = [x.strip() for x in line.split(',')]
    if ln == 0:
      headers = line_dat
      headers_clean = map(clean,line_dat)
    else:
      records.append(dict(zip(headers_clean, line_dat)))

  csv_f.close()

  with open('data.json', 'w') as json_f:
    json.dump({'records':records, 'headers':dict(zip(headers_clean, headers))}, json_f)

if __name__ == "__main__": 
    sys.exit(main())