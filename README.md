# Prueba tecnica Amaris

<p align="center">
  <img src="https://nestjs.com/img/logo-small.svg" width="50" alt="Nest Logo" />
</p>

### Tecnologias usadas

Lenguaje/framework
- **NestJS**

Base de datos 
- **PostgreSQL**

### Instrucciones para iniciar el proyecto

1. Clonar repositorio desde github

```bash
  git clone https://github.com/TeoLunas/pruebaTecnicaAmaris.git
```

2. Ir a carpeta del proyecto

```
  cd prueba-tecnica-vida-camara
```

3. Instalar dependencias del proyecto con gestor de paquetes preferido

```bash
  npm install   #npm
  yarn install  #yarn
  pnpm install  #pnpm
```
4. Generar archivo de variables de entorno .env, basado en archivo .env.template

```text
    DB_PASSWORD=            #Password para base de datos
    DB_NAME=                #Nombre que se le dara a la base de datos
    DB_HOST=                #Url donde estara alojada la base de datos
    DB_PORT=5432            #Puerto de la base de datos, por defecto 5432 de Potgresql
    DB_USERNAME=postgres    #Usuario para acceder a la base de datos
```

5. (**opcional**) Ejecutar comando para inicializar contenedor con base de datos
```bash
   docker compose up -d
```

6.- Ejecutar migracion de base de datos

```bash
  npm run migration:run
```

