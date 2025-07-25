# 🎁 Amigo Secreto

Este es un sencillo proyecto web interactivo para sortear un "amigo secreto" entre una lista de participantes. Permite añadir nombres a una lista y luego seleccionar aleatoriamente a uno de ellos. Desarrollado como un ejercicio de lógica de programación y manipulación del DOM con JavaScript.

## ✨ Características

* **Añadir Amigos**: Ingresa nombres en un campo de texto y añádelos a una lista.
* **Validación de Entrada**: Evita añadir nombres vacíos a la lista.
* **Listado Dinámico**: Muestra los nombres añadidos en tiempo real.
* **Sorteo Aleatorio**: Selecciona un nombre al azar de la lista de participantes.
* **Validación de Sorteo**: Comprueba si hay nombres en la lista antes de realizar el sorteo.
* **Interfaz Clara**: Diseño intuitivo para facilitar su uso.

## 🚀 Tecnologías Utilizadas

* **HTML5**: Para la estructura del contenido web.
* **CSS3**: Para los estilos y la presentación visual.
    * Uso de **Variables CSS** para una gestión de colores eficiente.
    * Implementación de **Flexbox** para el diseño y la alineación de elementos.
    * Fuentes personalizadas de Google Fonts (`Inter`, `Merriweather`).
* **JavaScript (ES6+)**: Para la lógica interactiva del sorteo y la manipulación del DOM.
    * Manejo de arrays (`const`, `push`, `length`, `forEach`).
    * Manipulación del DOM (`getElementById`, `innerHTML`, `createElement`, `appendChild`, `value`, `focus`).
    * Generación de números aleatorios (`Math.random()`, `Math.floor()`).
    * Validación de entradas (`.trim()`).

## 💻 Cómo Usar

1.  **Clona o descarga el repositorio**:
    ```bash
    git clone [https://github.com/MEER4/juego-de-el-amigo-secreto.git](https://github.com/MEER4/juego-de-el-amigo-secreto.git)
    ```
    Si no tienes un repositorio, simplemente descarga los archivos `index.html`, `style.css`, `app.js` y la carpeta `assets` en una misma carpeta.

2.  **Abre el archivo `index.html`**: Haz doble clic en el archivo `index.html` en tu navegador web.

3.  **Añade Nombres**:
    * En el campo "Digite el nombre de sus amigos", escribe el nombre de un participante.
    * Haz clic en el botón "Añadir".
    * Repite este proceso para todos los amigos que quieras incluir en el sorteo.

4.  **Sortear Amigo**:
    * Una vez que hayas añadido todos los nombres, haz clic en el botón "Sortear amigo".
    * El nombre del amigo secreto sorteado aparecerá debajo.

## 📄 Estructura del Proyecto

amigo-secreto/
├── index.html
├── style.css
├── app.js
└── assets/
├── amigo-secreto.png
└── play_circle_outline.png


* `index.html`: La estructura principal de la página web.
* `style.css`: Contiene los estilos CSS para el diseño y la apariencia.
* `app.js`: Contiene toda la lógica JavaScript para añadir amigos, mostrarlos y realizar el sorteo.
* `assets/`: Carpeta que guarda las imágenes utilizadas en el proyecto.

## 👨‍💻 Contribuciones

Si deseas contribuir a este proyecto, puedes:

1.  Hacer un fork del repositorio.
2.  Crear una nueva rama (`git checkout -b feature/nueva-funcionalidad`).
3.  Realizar tus cambios.
4.  Hacer commit de tus cambios (`git commit -m 'feat: Añade nueva funcionalidad'`).
5.  Enviar tus cambios (`git push origin feature/nueva-funcionalidad`).
6.  Abrir un Pull Request.

## 👤 Autor

**Mario Estrella**
* Estudiante de Ingeniería de Software en UNICARIBE.
* Intereses profesionales: Análisis de Datos e Inteligencia Artificial.
* Este proyecto fue desarrollado como parte de un Challenge de **ONE - Oracle Next Education** en colaboración con **Alura Latam**, programa en el que estoy participando actualmente.
* **LinkedIn**: [Mario Estrella - Desarrollador](https://www.linkedin.com/in/mario-estrella-dev/)
* **GitHub**: [MEER4](https://github.com/MEER4).

---