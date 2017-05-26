# DircontDesign

##Install
1. Install nvm:

        sudo curl -o- https://raw.githubusercontent.com/creationix/nvm/v0.31.0/install.sh | bash
        source ~/.bashrc

2. Install node 7.5:

        nvm install 7.5
        nvm use 7.5
        nvm alias default node

3. Install angular-cli:

        npm install -g @angular/cli
  
## Install dependencies 
`npm install`

## Development server
Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Settings Environments
Настройки для локальной разработки в файле: `environments/environment.ts`  
Для тестового сервера: `environments/environment.stage.ts`  
Для продакшина: `environments/environment.prod.ts`  

## Development
### For Design
1. `git checkout design-1` - ветка для разработки дизайна
2. `git pull origin design-1`
3. `npm install` - скачивание зависимостей
4. `ng serve` - запуск локального сервера разработки
