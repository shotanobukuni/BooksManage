import os
import sys

usercommand = sys.argv[1]
cmd = 'pipenv run python manage.py ' + usercommand
print(cmd)
os.system(cmd)

