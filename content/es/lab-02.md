# Laboratorio: Comentarios visuales para agentes en el navegador

**Duración estimada:** 15 minutos

## Requisitos previos

- VS Code 1.132 o posterior, actualizado, con GitHub Copilot autenticado.
- Node.js LTS y npm: comprueba `node --version` y `npm --version`.
- Herramientas de terminal y navegador habilitadas según la política de la organización. Revisa las solicitudes de ejecución antes de aprobarlas.

## Qué vamos a crear

Vamos a crear una página de presentación para una cafetería ficticia llamada **Café Aurora**.

Después de que el agente cree la primera versión, seleccionaremos elementos directamente en el navegador integrado, añadiremos comentarios específicos y enviaremos ese contexto visual al agente para perfeccionar la interfaz.

## Entorno del laboratorio

Este laboratorio utiliza el Chat en modo **Agent** y el navegador integrado de VS Code.

### Crear y abrir la carpeta del proyecto

1. En VS Code, abre el menú **File** y selecciona **Open Folder...**.
2. En la ventana que se abra, ve a la carpeta **Escritorio**.
3. Selecciona la opción para crear una carpeta nueva.
4. Ponle el nombre `landing-page-agent`.
5. Selecciona la carpeta creada y haz clic en **Open**.
6. En el Explorer, confirma que `landing-page-agent` esté abierta y vacía.

### Dónde encontrar las funciones

- **Explorer**: icono de dos archivos en la barra lateral. Úsalo para seguir los archivos creados.
- **Chat**: icono de GitHub Copilot. Úsalo para enviar los prompts al agente.
- **Browser**: navegador integrado que utiliza el agente para abrir y probar la página.

### Mapa de artefactos

| Artefacto | Función en el proyecto |
|---|---|
| `index.html` | Estructura y contenido de la página de presentación |
| `styles.css` | Tema y diseño adaptable |
| `app.js` | Interacciones de la página |
| `server.js` | Servidor HTTP local |
| `package.json` | Script para iniciar la aplicación |

---

# Paso 1: Crear la página de presentación

## Pega este prompt en el chat

```text
Crea en este workspace una página de presentación para una cafetería ficticia
llamada Café Aurora.

Estructura:
- index.html
- styles.css
- app.js
- server.js
- package.json

Requisitos:
- usar HTML, CSS y JavaScript sin bibliotecas externas
- incluir una sección principal de presentación, tres puntos diferenciales, una carta resumida y una llamada a la acción
- usar un tema oscuro con tonos cálidos
- crear un diseño adaptable
- crear un servidor HTTP sencillo usando solo funciones nativas de Node.js
- servir únicamente los archivos de la aplicación incluidos en la lista de permitidos: index.html, styles.css y app.js;
  nunca servir archivos arbitrarios ni permitir el acceso a otras rutas; escuchar solo en la interfaz local
- añadir un script npm start
- usar enlaces reales a secciones existentes, sin simular el envío de pedidos
- mantener etiquetas accesibles, contraste legible y navegación por teclado
- iniciar la aplicación y abrirla en el navegador integrado

Implementa directamente en los archivos e indica la URL utilizada.
```

## Verificación

Confirma que:

- Los cinco artefactos aparezcan en el Explorer.
- El servidor esté en ejecución.
- La página de presentación esté abierta en el navegador integrado.
- La página contenga la sección principal, los puntos diferenciales, la carta y la llamada a la acción.

Si el agente no consigue abrir el navegador, usa la paleta de comandos y busca **Browser** para abrir la URL en el navegador integrado. Un navegador externo permite probar el sitio, pero no sustituye el paso de los comentarios integrados.

---

# Paso 2: Comentar elementos en el navegador

Con el foco en el navegador integrado, activa el modo de comentarios:

- macOS: `Option+Cmd+C`
- Windows y Linux: `Ctrl+Alt+C`

Puedes seleccionar varios elementos y añadir un comentario a cada uno antes de enviarlo todo al Chat.

## Comenta el título principal

```text
Acorta el título y mantén destacado el nombre Café Aurora.
```

## Comenta el botón principal

```text
Cambia el texto a "Ver carta" y haz que el botón lleve a la sección de la carta.
```

## Comenta la sección de puntos diferenciales

```text
Mejora la lectura en pantallas pequeñas, apilando las tarjetas y aumentando el espacio entre ellas.
```

Después de añadir los tres comentarios, envíalos al Chat en una única solicitud.

Antes de enviarlos, comprueba que cada comentario incluya el elemento seleccionado. Mencionar solo «el botón» en el chat no demuestra el uso de contexto visual.

<video src="https://code.visualstudio.com/assets/updates/1_132/browser-commenting.mp4" title="Comentarios en elementos del navegador integrado." autoplay loop controls muted></video>

---

# Paso 3: Aplicar los comentarios

## Pega este prompt en el chat

```text
Aplica los comentarios adjuntos, conserva el resto del diseño y
vuelve a probar la página en el navegador.
```

Espera a que el agente edite los archivos y actualice la aplicación.

---

# Paso 4: Probar la nueva versión

## Verificación

En el navegador integrado:

1. Confirma que el nombre Café Aurora siga destacado.
2. Haz clic en **Ver carta** y comprueba que la página navegue hasta la sección correcta.
3. Reduce el ancho del navegador a aproximadamente 375 px.
4. Confirma que las tarjetas queden apiladas y sean legibles, sin desplazamiento horizontal.
5. Usa `Tab` y `Enter` para activar **Ver carta** y comprueba que el foco siga visible.
6. Vuelve al ancho de escritorio y confirma que se haya conservado el resto del diseño.

Si algún punto falla, describe al agente el comportamiento observado y pide que lo corrija.

---

## Lista de comprobación final

- El agente creó e inició la página de presentación.
- La aplicación se abrió en el navegador integrado.
- Tres elementos recibieron comentarios específicos.
- Los comentarios se enviaron juntos al agente.
- El agente aplicó los comentarios visuales.
- Se probaron el botón y el diseño adaptable.

## Problemas comunes y cierre

- **El atajo no funciona:** mantén el foco en el navegador integrado y busca la acción de comentarios en la barra de herramientas. Comprueba que la versión instalada incluya la función.
- **Puerto ocupado:** reutiliza el servidor de este proyecto o pide otro puerto; no detengas servidores desconocidos.
- **La página no se actualiza:** confirma la URL y recarga después de guardar. Pídele al agente que revise la terminal si hay algún error.
- Detén el servidor de este laboratorio con `Ctrl+C` en la terminal correspondiente. Conserva el proyecto o elimina únicamente la carpeta creada para este ejercicio, si lo deseas.

Fuente: [VS Code 1.132 - Comentarios en el navegador integrado](https://code.visualstudio.com/updates/v1_132#_commenting-in-the-integrated-browser)
