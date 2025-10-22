# 🚀 Prueba Técnica — Amaris

<p align="center">
  <img src="https://nestjs.com/img/logo-small.svg" width="80" alt="NestJS Logo" />
</p>

> Proyecto técnico desarrollado con **NestJS** y **PostgreSQL**, siguiendo buenas prácticas de arquitectura, documentación y organización de código.

---

## 🧰 Tecnologías usadas

| Tipo | Tecnología |
|------|-------------|
| 🧠 Lenguaje / Framework | **NestJS** |
| 🗄️ Base de Datos | **PostgreSQL** |

---

## ⚙️ Instrucciones para iniciar el proyecto

### 1️⃣ Clonar el repositorio
```bash
git clone https://github.com/TeoLunas/pruebaTecnicaAmaris.git
```

### 2️⃣ Entrar al proyecto
```bash
cd prueba-tecnica-vida-camara
```

### 3️⃣ Instalar dependencias
Puedes usar el gestor de paquetes que prefieras 👇

**npm**
```bash
npm install
```

**yarn**
```bash
yarn install
```

**pnpm**
```bash
pnpm install
```

---

### 4️⃣ Crear archivo de variables de entorno

Crea un archivo **`.env`** basado en **`.env.template`** y completa los valores requeridos:

```env
DB_PASSWORD=            # Password de la base de datos
DB_NAME=                # Nombre de la base de datos
DB_HOST=                # URL o IP del servidor de base de datos
DB_PORT=5432            # Puerto de PostgreSQL por defecto
DB_USERNAME=postgres    # Usuario para acceder a la base de datos
```

---

### 5️⃣ (Opcional) Levantar base de datos con Docker
Si deseas iniciar una base de datos local con Docker:

```bash
docker compose up -d
```

---

### 6️⃣ Ejecutar migraciones
Aplica las migraciones para crear la estructura de la base de datos:

```bash
npm run migration:run
```

---

### 7️⃣ Iniciar la aplicación

**Modo desarrollo**
```bash
npm run start:dev
```

**Modo producción**
```bash
npm run start
```

---

## 📘 Documentación de API (Swagger)

Puedes acceder a la documentación y probar los endpoints desde Swagger UI en:

```text
http://localhost:{PORT}/api/docs
```

---

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

---

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

---


## 🗄️ Estructura de la base de datos
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
