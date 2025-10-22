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

*con npm*
```bash
npm install
```
*con yarn*
```bash
yarn install  #yarn
```
*con pnpm*
```bash  
pnpm install  #pnpm
```
4. Generar archivo de variables de entorno *.env*, basado en archivo *.env.template*

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

6. Ejecutar migracion de base de datos

```bash
npm run migration:run
```

7. Inciar aplicacion

En modo desarrollo
```bash
npm run start:dev
```

En modo produccion
```bash
npm run start
```


Urls de documentacion con *Swagger*

Para poder verificar y probar directamente los enpoints se encuentra disponible swagger, el cual se puede acceder mediante la url

```text
http://localhost:{PORT}/api/docs
```

### NOTAS

## 📂 Estructura del Proyecto

```plaintext
C:.
├───📦 dist
│   └───📁 src
│       ├───🧩 common
│       │   ├───📄 dtos
│       │   └───⚙️ interceptors
│       ├───⚙️ config
│       ├───🗄️ database
│       │   └───📜 migrations
│       └───📑 policies
│           ├───📄 dto
│           └───🏛️ entities
├───📚 node_modules
│   └───@unrs
│       └───resolver-binding-win32-x64-msvc
├───💻 src
│   ├───🧩 common
│   │   ├───📄 dtos
│   │   └───⚙️ interceptors
│   ├───⚙️ config
│   ├───🗄️ database
│   │   └───📜 migrations
│   └───📑 policies
│       ├───📄 dto
│       └───🏛️ entities
└───🧪 test
```

### 🧠 Descripción de carpetas

| Carpeta | Descripción |
|----------|-------------|
| 📦 **dist/** | Archivos compilados de TypeScript listos para ejecución. |
| 💻 **src/** | Código fuente principal del proyecto. |
| 🧩 **src/common/** | Módulos compartidos como DTOs, interceptores o utilidades. |
| ⚙️ **src/config/** | Configuraciones globales del proyecto (variables, providers, etc.). |
| 🗄️ **src/database/** | Configuración de base de datos y migraciones de TypeORM. |
| 📑 **src/policies/** | Lógica de negocio relacionada con pólizas (DTOs, entidades, servicios, controladores). |
| 🧪 **test/** | Pruebas unitarias o end-to-end del proyecto. |
| 📚 **node_modules/** | Dependencias instaladas mediante npm o yarn. |



Estructura de la base de datos.

### 🧾 Tabla: `policies`

| Columna       | Tipo de dato     | Descripción                                     | Restricciones / Default               |
|----------------|------------------|-------------------------------------------------|---------------------------------------|
| `id`           | `uuid`           | Identificador único de la póliza                | **PK**, autogenerado (`@PrimaryGeneratedColumn`) |
| `rutTitular`   | `text`           | RUT del titular de la póliza                    | No nulo                               |
| `fechaEmision` | `date`           | Fecha en que fue emitida la póliza              | No nulo                               |
| `planSalud`    | `text`           | Nombre o código del plan de salud               | No nulo                               |
| `prima`        | `int`            | Valor de la prima o costo de la póliza          | No nulo                               |
| `estado`       | `text`           | Estado actual de la póliza                      | Valor por defecto: `'emitida'`        |
| `createdAt`    | `timestamptz`    | Fecha y hora de creación del registro           | Valor por defecto: `CURRENT_TIMESTAMP` |
| `updatedAt`    | `timestamptz`    | Fecha y hora de última actualización del registro | Se actualiza automáticamente          |

> **Notas:**
> - Esta entidad se mapea a la tabla `policies` en la base de datos.  
> - Usa decoradores de TypeORM para definir las columnas y metadatos.  
> - Los campos `createdAt` y `updatedAt` son manejados automáticamente por TypeORM.

