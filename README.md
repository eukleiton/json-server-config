# json-server-config

* ter o node instalado na maquina
* rodar no comando: npm init -y
* instalar o json-server: npm install json-server

## Criar a fake-api
* npx json-server --watch database.json

### Obs
* toda vez que nos alterarmos o arquivo database.json manualmente, temos que parar o comando no terminal e rodar novamente.

EX: rode o comando: 'CRTL + d' para parar o terminal e depois rode novamente o comando: npx json-server --watch database.json
ente o comando: npx json-server --watch database.json

* adicionar o arquivo .gitignore para asicionar a pasta node_modules
ex: no arquivo .gitignore, digite : node_modules/