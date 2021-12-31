### Command sequence

- npm install --save sequelize
- npm install --save mysql2
- npm install --save-dev sequelize-cli

## To init the sequilize cli. This command will create models, migrations, seeders folder and config.json file.
- npx sequelize-cli init

## create a model
-  npx sequelize-cli model:generate --name Device_category --attributes primary:string,secondary:string

## running-migration
- npx sequelize-cli db:migrate