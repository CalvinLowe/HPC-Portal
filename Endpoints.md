
# Endpoints

URL: https://hpcportal.rcc.uq.edu.au

## Auth server

Method | Purpose | Endpoint | Description
------ | ------- | -------- | -----------
GET | Login | ```https://hpcportal.rcc.uq.edu.au/client/login?service=hpcportal``` | Login
GET | Logout / End session | ```https://hpcportal.rcc.uq.edu.au/client/api/end_session``` | Logout
GET | Access token | ```https://hpcportal.rcc.uq.edu.au/client/api/access_token``` | Get the access token
GET | Session info | ```https://hpcportal.rcc.uq.edu.au/client/api/session_info``` | Get the session info

## Resource server
Method | Purpose | Endpoint | Description
------ | ------- | -------- | -----------
GET | User info | ```https://hpcportal.rcc.uq.edu.au/hpcbackend/api/user?access_token=___token__``` | Get the user info
GET | List directories | ```https://hpcportal.rcc.uq.edu.au/hpcbackend/api/execute/listfolderbase64?folderpath=__based64_url__&access_token=__token__``` | folder path must be in based 64 encoded and the auth-ed user needs to have permission to list the dir/file
GET | List running jobs | ```https://hpcportal.rcc.uq.edu.au/hpcbackend/api/execute/listall?access_token=__token__```
GET | List groups | ```https://hpcportal.rcc.uq.edu.au/hpcbackend/api/execute/getprojects?access_token=__token__```

For each "execute" endpoint, the result will be a JSON similar to this

```{"userMessages":[],"commandResult":[{}]}```

Where userMessages array often contains error messages (if any) and the commandResult contains the actual result.