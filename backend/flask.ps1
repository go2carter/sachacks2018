Set-ExecutionPolicy -ExecutionPolicy RemoteSigned -Scope CurrentUser 

$env:FLASK_APP = "app.py"

flask run