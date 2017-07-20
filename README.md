# mr-templates-angular-aspnetcore

## Build and dev process

### Running in dev:

- `dotnet restore`: restore nuget packages
- `npm i`: install npm packages
- `npm run dev`: starts gulp + webpack in watch mode, and starts the dotnet dev server

### Building for prod:

- `npm run build`: compile ts and sass files for prod
