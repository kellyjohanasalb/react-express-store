# 🛒 React Express Store

Este proyecto es una tienda virtual simple creada con **React** en el frontend y **Express** en el backend. Permite a los usuarios visualizar productos, agregarlos al carrito y calcular la mejor combinación de productos sin exceder un presupuesto específico.

## 📦 Estructura del Proyecto

```
react-express-store/
├── backend-express-store/  → Servidor Express (Node.js)
├── frontend-express-store/ → Aplicación React
```

## ✨ Funcionalidades

- Ver lista de productos disponibles
- Agregar productos al carrito
- Calcular la mejor combinación de productos sin superar los $150
- Manejo de estado global del carrito con Context API
- Estilos con Bootstrap

---

## 🚀 Despliegue

| Parte      | URL de Despliegue                                |
|------------|--------------------------------------------------|
| Frontend   | 🔗 https://react-express-store.vercel.app        |
| Backend    | 🔗 _[Agrega aquí la URL de Render cuando esté activa]_ |

---

## ⚙️ Instalación Local

### 1. Clonar el repositorio

```bash
git clone https://github.com/tu-usuario/react-express-store.git
cd react-express-store
```

### 2. Instalar dependencias del backend

```bash
cd backend-express-store
npm install
```

### 3. Ejecutar el backend

```bash
npm start
# Servidor en http://localhost:4000
```

Este servidor expone las siguientes rutas:
- `GET /products` → Lista de productos
- `POST /cart` → Agrega un producto al carrito

> 💡 Asegúrate de que el puerto 4000 esté libre.

### 4. Instalar dependencias del frontend

Abre una nueva terminal:

```bash
cd frontend-express-store
npm install
```

### 5. Ejecutar el frontend

```bash
npm run dev
# App visible en http://localhost:5173
```

---

## 🛠 Tecnologías Usadas

- React
- Vite
- Bootstrap
- Context API
- Node.js
- Express

---

## 📬 Contacto

Desarrollado por **Kelly Saldaña Betancur**.  
💡 ¡Gracias por revisar este proyecto!
