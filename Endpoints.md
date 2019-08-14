
# Endpoints

URL: https://hpcportal.rcc.uq.edu.au

## Auth server

Method | Purpose | Endpoint | Description
------ | ------- | -------- | -----------
GET | Login | ```/client/login?service=hpcportal``` | Login
GET | Logout / End session | ```/client/api/end_session``` | Logout
GET | Access token | ```/client/api/access_token``` | Get the access token
GET | Session info | ```/client/api/session_info``` | Get the session info

## Resource server
Method | Purpose | Endpoint | Description
------ | ------- | -------- | -----------
GET | User info | ```/hpcbackend/api/user?access_token=___token__``` | Get the user info
GET | List directories | ```/hpcbackend/api/execute/listfolderbase64?folderpath=__based64_url__&access_token=__token__``` | folder path must be in based 64 encoded and the auth-ed user needs to have permission to list the dir/file
GET | List running jobs | ```/hpcbackend/api/execute/listall?access_token=__token__```
GET | List groups | ```/hpcbackend/api/execute/getprojects?access_token=__token__```

For each "execute" endpoint, the result will be a JSON similar to this

```{"userMessages":[],"commandResult":[{}]}```

Where userMessages array often contains error messages (if any) and the commandResult contains the actual result.