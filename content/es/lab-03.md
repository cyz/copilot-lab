# Laboratorio: Conversaciones paralelas con `/btw`

**Duración estimada:** 15 minutos

## Requisitos previos

- VS Code 1.132 o posterior, actualizado, con GitHub Copilot autenticado y acceso a Agents Window.
- Node.js LTS y npm instalados: comprueba `node --version` y `npm --version`.
- Permiso para ejecutar herramientas de terminal. Revisa las solicitudes antes de aprobarlas.

## Qué vamos a crear

Vamos a crear un pequeño generador de contraseñas con interfaz web y pruebas automatizadas.

Mientras el agente implementa el proyecto, usaremos `/btw` para hacer preguntas sobre las decisiones técnicas sin interrumpir el trabajo principal. Al finalizar, convertiremos una de las respuestas de la conversación paralela en una mejora real de las pruebas.

## Entorno del laboratorio

Este laboratorio debe realizarse en **Agents Window**.

> **Importante:** `/btw` no está disponible en el Chat lateral de VS Code.

### Crear y abrir la carpeta del proyecto

1. En VS Code, abre el menú **File** y selecciona **Open Folder...**.
2. En la ventana que se abra, ve a la carpeta **Escritorio**.
3. Selecciona la opción para crear una carpeta nueva.
4. Ponle el nombre `generador-contrasenas-agent`.
5. Selecciona la carpeta creada y haz clic en **Open**.
6. En el Explorer, confirma que `generador-contrasenas-agent` esté abierta y vacía.

### Abrir Agents Window

1. Abre **Agents Window** desde el menú de agentes disponible en tu versión de VS Code.
2. Si no encuentras el comando, abre la paleta de comandos (`Cmd+Shift+P` en macOS o `Ctrl+Shift+P` en Windows/Linux) y busca **Agents**.
3. Inicia una sesión nueva para la carpeta `generador-contrasenas-agent`.
4. Confirma que la conversación esté en **Agents Window**, no en el Chat lateral.

### Mapa de artefactos

| Artefacto | Función en el proyecto |
|---|---|
| `index.html` | Estructura de la interfaz |
| `styles.css` | Tema y diseño |
| `app.js` | Interacciones de la interfaz |
| `src/passwordGenerator.js` | Lógica pura de generación de contraseñas |
| `tests/passwordGenerator.test.js` | Pruebas automatizadas |
| `package.json` | Scripts del proyecto |
| `server.js` | Servidor HTTP local para probar la interfaz |

---

# Paso 1: Crear el generador de contraseñas

## Pega este prompt en Agents Window

```text
Crea en este workspace un pequeño generador de contraseñas con HTML, CSS y
JavaScript, sin dependencias externas.

Estructura:
- index.html
- styles.css
- app.js
- src/passwordGenerator.js
- tests/passwordGenerator.test.js
- package.json
- server.js

Requisitos:
- elegir una longitud entre 8 y 32 caracteres
- incluir siempre letras minúsculas; las mayúsculas, los números y los símbolos son opcionales
- ofrecer opciones para letras mayúsculas, números y símbolos
- incluir siempre al menos un carácter de cada opción seleccionada
- usar Web Crypto (crypto.getRandomValues), nunca Math.random, con una selección
  sin sesgo por módulo y una mezcla segura
- rechazar longitudes fuera del intervalo o no enteras con un error explícito
- botón para generar la contraseña
- botón para copiar la contraseña
- separar la lógica de generación de la interfaz
- crear pruebas con el módulo node:test
- añadir un script npm test
- usar módulos ES compatibles tanto con el navegador como con Node.js
- crear un servidor HTTP con funciones nativas de Node.js que sirva únicamente
  los archivos de la aplicación incluidos en la lista de permitidos: index.html, styles.css, app.js y
  src/passwordGenerator.js; nunca servir archivos arbitrarios ni exponer ningún otro archivo;
  escuchar solo en la interfaz local
- añadir npm start e indicar la URL local, sin iniciar servidores duplicados
- mostrar la confirmación de copia solo cuando la Clipboard API tenga éxito;
  mostrar un mensaje de error y permitir la selección manual si no está disponible

Implementa directamente en los archivos, ejecuta las pruebas y corrige
los fallos que se produzcan.
```

En cuanto el agente empiece a crear los archivos, pasa al siguiente paso. No esperes a que termine el turno.

---

# Paso 2: Hacer una pregunta con `/btw`

`/btw` abre una conversación paralela que comparte el contexto de la conversación principal sin añadir la pregunta al historial principal.

## Durante la implementación, escribe

```text
/btw ¿Por qué la lógica de generación debe estar separada de la interfaz?
```

Observa:

- La pregunta se abre en una conversación paralela.
- El chat principal sigue implementando el proyecto.
- La respuesta tiene en cuenta el proyecto que se está creando.

## Haz una segunda pregunta

```text
/btw ¿Cómo garantizan las pruebas que cada tipo de carácter seleccionado aparezca en la contraseña?
```

<video src="https://code.visualstudio.com/assets/updates/1_132/ask-question.mp4" title="Pregunta contextual abierta en una conversación paralela con /btw." autoplay loop controls muted></video>

> Si `/btw` no aparece como comando, confirma que estés en Agents Window. Cierra el Chat lateral y vuelve a la ventana dedicada a los agentes.

Si sigue sin estar disponible, actualiza VS Code y comprueba las políticas de la organización. Las preguntas normales en el chat principal no sustituyen la conversación paralela. Si la implementación termina demasiado rápido, usa `/btw` durante la siguiente tarea del paso 4, sin enviar una orden de cancelación.

---

# Paso 3: Volver al trabajo principal

1. Cierra la conversación paralela o déjala en segundo plano.
2. Vuelve al chat principal.
3. Espera a que termine la implementación.
4. En el Explorer, confirma que se hayan creado los artefactos del proyecto.
5. Revisa el resumen y los resultados de las pruebas presentados por el agente.

## Verificación

En la terminal, ejecuta:

```bash
npm test
```

Confirma que todas las pruebas pasen.

---

# Paso 4: Usar la respuesta de la conversación paralela

A partir de la explicación recibida, solicita una cobertura más explícita.

## Pega este prompt en el chat principal

```text
Añade una prueba que genere una contraseña con todas las opciones habilitadas y
compruebe explícitamente la presencia de una letra mayúscula, un número y un símbolo.
Comprueba también las letras minúsculas, las longitudes 8 y 32, las opciones deshabilitadas
y los errores para 7, 33 y valores no enteros. No compruebes que "dos contraseñas sean siempre
diferentes", ya que es posible una colisión aleatoria. No sustituyas Web Crypto
por Math.random para facilitar las pruebas.
Vuelve a ejecutar las pruebas.
```

## Verificación

Confirma que:

- La nueva prueba se haya añadido en `tests/passwordGenerator.test.js`.
- La prueba compruebe por separado la letra mayúscula, el número y el símbolo.
- `npm test` siga pasando.

## Paso 5: Validar la interfaz

Ejecuta `npm start` en una terminal y abre la URL indicada. Si el servidor ya está en ejecución, reutilízalo.

1. Genera contraseñas de 8 y 32 caracteres y comprueba la longitud.
2. Deshabilita las tres opciones: la contraseña debe seguir conteniendo letras minúsculas.
3. Habilítalas todas: confirma que haya minúsculas, mayúsculas, números y símbolos.
4. Haz clic en copiar y pega el resultado en un campo local desechable. No uses contraseñas reales en el ejercicio.
5. Si el navegador deniega el acceso al portapapeles, confirma que aparezca un error útil, no una confirmación falsa.

La prueba de categorías confirma el contrato, pero no demuestra por sí sola la calidad criptográfica. Este es un prototipo educativo, no un gestor de contraseñas auditado.

---

## Lista de comprobación final

- Se creó el pequeño generador de contraseñas.
- El ejercicio se realizó en Agents Window.
- `/btw` abrió una conversación paralela durante el turno principal.
- El trabajo del agente continuó sin interrupciones.
- La respuesta de la conversación paralela orientó una mejora real.
- Todas las pruebas pasan.
- Se probó la interfaz y el botón de copiar gestiona tanto el éxito como el fallo.

## Cierre

Detén únicamente el servidor de este laboratorio con `Ctrl+C` en la terminal correspondiente. Conserva el proyecto para futuras consultas; eliminar la carpeta es opcional.

Fuente: [VS Code 1.132 - Conversaciones paralelas con `/btw`](https://code.visualstudio.com/updates/v1_132#_side-chats-with-btw)
