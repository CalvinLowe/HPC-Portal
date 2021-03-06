
# Endpoints

URL: https://hpcportal.rcc.uq.edu.au

## Auth server
Method | Purpose | Endpoint | Link |
------ | ------- | -------- | ---- |
GET | Login |  ```/client/login?service=hpcportal``` | https://hpcportal.rcc.uq.edu.au/client/login?service=hpcportal
GET | End session | ```/client/api/end_session``` | https://hpcportal.rcc.uq.edu.au/client/api/end_session 
GET | Access token | ```/client/api/access_token``` | https://hpcportal.rcc.uq.edu.au/client/api/access_token
GET | Session info | ```/client/api/session_info``` | https://hpcportal.rcc.uq.edu.au/client/api/session_info

## Resource server
Method | Purpose | Endpoint | Query String | Link |
------ | ------- | -------- | ------------ | ---- |
GET | User info | ```/hpcbackend/api/user``` | ```?access_token=TOKEN``` | https://hpcportal.rcc.uq.edu.au/hpcbackend/api/user?access_token=TOKEN
GET | List directories | ```/hpcbackend/api/execute/listfolderbase64``` | ```?folderpath=FOLDERPATHBASE64&access_token=TOKEN``` | https://hpcportal.rcc.uq.edu.au/hpcbackend/api/execute/listfolderbase64?folderpath=FOLDERPATHBASE64&access_token=TOKEN
GET | List running jobs | ```/hpcbackend/api/execute/listall``` | ```?access_token=TOKEN``` | https://hpcportal.rcc.uq.edu.au/hpcbackend/api/execute/listall?access_token=TOKEN
GET | List accessible locations | ```/hpcbackend/api/execute/accessiblelocations``` | ```?access_token=TOKEN``` | https://hpcportal.rcc.uq.edu.au/hpcbackend/api/execute/accessiblelocations?access_token=TOKEN
GET | List groups | ```/hpcbackend/api/execute/getprojects``` | ```?access_token=TOKEN``` | https://hpcportal.rcc.uq.edu.au/hpcbackend/api/execute/getprojects?access_token=TOKEN
GET | Submit jobs | ```/hpcbackend/api/execute/submitjob``` | ```?jobName=JOBNAME&workdir=WORKDIRECTORY&pbs=PBSSCRIPTCONTENTS&machine=MACHINE&access_token=TOKEN``` | https://hpcportal.rcc.uq.edu.au/hpcbackend/api/execute/submitjob?jobName=JOBNAME&workdir=WORKDIRECTORY&pbs=PBSSCRIPTCONTENTS&machine=MACHINE&access_token=TOKEN