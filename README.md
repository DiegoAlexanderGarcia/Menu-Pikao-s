# Menu-Pikao-s

Carta digital interactiva para el restaurante **PIKAO'S FOOD**. Permite a los clientes explorar el menú, agregar platos al carrito y realizar pedidos por WhatsApp. Incluye panel de administración protegido para gestionar los platos.

---

## 🚀 Características

- Visualización moderna y responsiva del menú.
- Filtros por categorías y búsqueda instantánea.
- Carrito de compras con resumen y edición de cantidades.
- Envío de pedidos directo a WhatsApp.
- Panel de administración protegido por contraseña:
  - Agregar, editar y eliminar platos.
- Modo oscuro y claro.
- Persistencia de datos en el navegador (localStorage).

---

## 📸 Capturas

![Vista principal](https://i.imgur.com/99m6kwM.png)
![Carrito y pedido](https://i.imgur.com/VY2X14Q.png)
![Panel admin](https://i.imgur.com/lteCjNF.png)

---

## 🛠️ Instalación y uso

1. **Clona el repositorio:**
   ```sh
   git clone https://github.com/tuusuario/Menu-Pikao-s.git
   cd Menu-Pikao-s
   ```

2. **Abre el archivo `index.html` en tu navegador.**
   - O usa [Live Server](https://marketplace.visualstudio.com/items?itemName=ritwickdey.LiveServer) en VS Code.

---

## 👨‍🍳 Panel de Administración

- Haz clic en el botón **Admin** (arriba a la derecha).
- Ingresa la contraseña: `Admin`
- Desde el panel puedes agregar, editar o eliminar platos del menú.

---

## 📱 Pedido por WhatsApp

1. Agrega platos al carrito.
2. Haz clic en el carrito y luego en **Confirmar Pedido por WhatsApp**.
3. Se abrirá WhatsApp con el pedido listo para enviar.

---

## ⚙️ Personalización

- **Número de WhatsApp:**  
  Modifica la constante `WHATSAPP_NUMBER` en [`script.js`](script.js).
- **Contraseña de admin:**  
  Cambia `ADMIN_PASSWORD` en [`script.js`](script.js).
- **Platos iniciales:**  
  Edita el array `INITIAL_MENU_ITEMS` en [`script.js`](script.js).

---

## 📂 Estructura del proyecto

```
Menu-Pikao-s/
├── index.html
├── script.js
├── styles.css
├── image/
│   └── Imagen_de_WhatsApp_2025-07-13_a_las_11.55.38_1f2e7e3b-removebg-preview.ico
└── .vscode/
    └── settings.json
```

---

## 📝 Créditos

- Desarrollado por [Diego Alexander Garcia Rodriguez](https://github.com/DiegoAlexanderGarcia)
- Iconos: [Font Awesome](https://fontawesome.com/)
- Imágenes: Unsplash y Pixabay

---

## 📄 Licencia

MIT

---