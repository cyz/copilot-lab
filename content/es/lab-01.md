# Laboratorio: Desarrollo con agentes en Copilot Chat

**Duración estimada:** 15 minutos

## Requisitos previos

- VS Code actualizado, con acceso a GitHub Copilot y una sesión autenticada.
- Node.js LTS y npm instalados. En la terminal, comprueba `node --version` y `npm --version`.
- Acceso a Internet para instalar Express y Tailwind CSS.
- Permiso para ejecutar herramientas de terminal y navegador. Revisa cada solicitud antes de aprobarla; no es necesario autorizar todas las herramientas automáticamente.

## Qué vamos a crear

Vamos a crear una calculadora sencilla con frontend en Tailwind CSS y backend en Node.js con Express.

El objetivo no es la calculadora en sí. La meta es aprender a estructurar un sistema de desarrollo con agentes, en el que la IA trabaje con el contexto y las reglas de control que tú definas.

## Entorno del laboratorio

Este laboratorio utiliza el entorno de ejecución **Local** de GitHub Copilot en VS Code.

### Crear y abrir la carpeta del proyecto

1. En VS Code, abre el menú **File** y selecciona **Open Folder...**.
2. En la ventana que se abra, ve a la carpeta **Escritorio**.
3. Selecciona la opción para crear una carpeta nueva.
4. Ponle el nombre `calculadora-copilot-lab`.
5. Selecciona la carpeta creada y haz clic en **Open**.
6. En el Explorer de VS Code, confirma que `calculadora-copilot-lab` esté abierta y vacía.

Durante los ejercicios:

1. Usa el modo **Agent**.
2. Confirma que las herramientas de terminal y navegador estén disponibles.

> Los comandos `/create-instructions`, `/create-prompt`, `/create-agent` y `/init`, así como los archivos de prompt, se utilizan aquí en el contexto del entorno Local. Es posible que no estén disponibles en otros entornos de ejecución.

Si no aparece un comando de creación, pídele al Chat en lenguaje natural que cree el mismo archivo en la ruta indicada. No cambies a otro entorno de ejecución para ejecutar los archivos de prompt de este laboratorio.

### Dónde encontrar las funciones en VS Code

Usa estos iconos durante el laboratorio:

- **Explorer**: icono de dos archivos en la barra lateral izquierda. Úsalo para seguir los archivos creados en el proyecto.
- **Chat**: icono de GitHub Copilot en la barra lateral. Úsalo para abrir el chat y ejecutar los prompts.
- **Configure Chat**: icono de engranaje en el Chat. Úsalo para abrir la configuración y las personalizaciones de Copilot.

Para abrir el panel de personalizaciones:

1. Haz clic en el icono de **GitHub Copilot** en la barra lateral.
2. En el Chat, haz clic en el engranaje **Configure Chat**.
3. En el editor de personalizaciones que se abra, usa las secciones **Instructions**, **Prompts**, **Skills** y **Agents** para ver y gestionar los artefactos del laboratorio.

![Editor Chat Customizations de VS Code con el entorno Local y las categorías Agents, Skills, Instructions y Prompts](https://code.visualstudio.com/assets/docs/agent-customization/customization/create-instructions-file.png)

> El aspecto y la posición de los iconos pueden variar ligeramente entre versiones de VS Code. Busca los mismos nombres que aparecen en la imagen.

> Si el engranaje no está visible, abre la paleta de comandos con `Cmd+Shift+P` en macOS o `Ctrl+Shift+P` en Windows y Linux, busca **Chat: Open Customizations** y pulsa Enter.

### Mapa de artefactos

| Artefacto | Función en el sistema |
|---|---|
| Instrucción de arquitectura | Define las tecnologías, la estructura y el estilo visual del proyecto |
| Instrucción de calculadora | Especializa el comportamiento en el dominio del cálculo |
| Archivo de prompt de Local | Permite ampliar la generación de código con coherencia |
| Skill | Prueba la experiencia real de uso de la calculadora |
| Agente de revisión de código | Revisa el código y propone mejoras de forma autónoma |
| Copilot Instructions | Orienta al agente sobre el proyecto en su conjunto |

---

# Paso 1: Instrucción de arquitectura

Establece las tecnologías y la estructura del proyecto. Copilot tendrá en cuenta esta información siempre que trabaje en cualquier archivo del repositorio.

## Escribe en el chat

`/create-instructions`

## Pega este prompt

```
Crea una instrucción de workspace llamada arquitectura en
.github/instructions/arquitectura.instructions.md.

Configura la instrucción con applyTo: "**" y define las tecnologías,
la estructura y las convenciones de código del proyecto.

Tecnologías:
- JavaScript con Node.js y Express en el backend
- Tailwind CSS en el frontend, con una interfaz moderna inspirada en el modo oscuro de VS Code
- Compilar Tailwind CSS localmente con la herramienta compatible con la versión instalada, sin depender de una CDN en el navegador

Estructura:
- src/calculadora/ para las funciones puras del dominio
- src/services/calcService.js para validación y orquestación
- src/routes/calculadora.js para las rutas HTTP
- public/ para el frontend
- tests/ para las pruebas automatizadas

Convenciones de código:
- Funciones pequeñas con una única responsabilidad
- Separación clara entre rutas, servicios y lógica de dominio
- Sin lógica de negocio directamente en las rutas
- Scripts de npm para iniciar la aplicación y ejecutar las pruebas
```

Después de guardar, confirma que el archivo aparezca en **Configure Chat > Instructions**.

Para comprobarlo:

1. En el Chat, haz clic en el engranaje **Configure Chat**.
2. En el editor de personalizaciones, abre **Instructions**.
3. Confirma que `arquitectura.instructions.md` aparezca como una instrucción del workspace.
4. Haz clic en el nombre de la instrucción y comprueba que el campo `applyTo` contenga `**`.

---

# Paso 2: Instrucción de calculadora

Especializa el comportamiento de Copilot en el dominio del cálculo. Se aplica siempre que Copilot trabaje con archivos de la calculadora.

## Escribe en el chat

`/create-instructions`

## Pega este prompt

```
Crea una instrucción de workspace llamada calculadora en
.github/instructions/calculadora.instructions.md.

Configura la instrucción con applyTo: "src/calculadora/**/*.js,src/services/**/*.js" y orienta a Copilot
cuando trabaje con código de operaciones matemáticas.

Copilot siempre debe:
- Usar funciones puras
- Validar las entradas numéricas antes de operar
- Devolver un error explícito para la división entre cero
- Actualizar las pruebas cada vez que cambie una operación
- Evitar efectos secundarios y registros innecesarios

Copilot debe evitar:
- Funciones con múltiples responsabilidades
- Dar por hecho que las entradas son válidas
- Ignorar los casos de error
```

Después de guardar, confirma que el archivo aparezca en **Configure Chat > Instructions**.

Para comprobarlo:

1. En el Chat, haz clic en el engranaje **Configure Chat**.
2. En el editor de personalizaciones, abre **Instructions**.
3. Confirma que `calculadora.instructions.md` aparezca como una instrucción del workspace.
4. Haz clic en el nombre de la instrucción y comprueba que el campo `applyTo` contenga `src/calculadora/**/*.js,src/services/**/*.js`. Las funciones puras son las del dominio; el servicio valida y orquesta las llamadas.

---

# Paso 3: Crear la calculadora

Con las instrucciones listas, es hora de generar el esqueleto de la aplicación. Copilot utilizará el contexto definido en los pasos anteriores para producir código que ya se ajuste a la arquitectura y al dominio.

## Pega este prompt en el chat

```
Crea una aplicación de calculadora básica que sume y reste
dos valores de entrada.

Sigue la estructura definida en las instrucciones del workspace:
- src/calculadora/
- src/services/calcService.js
- src/routes/calculadora.js
- public/
- tests/

Requisitos:
- Inicializa el proyecto Node.js.
- Configura Express y Tailwind CSS.
- Crea scripts de npm para iniciar la aplicación y ejecutar las pruebas.
- Sirve la aplicación en http://localhost:3000.
- Implementa pruebas automatizadas para suma, resta y entradas no válidas.
- Define un contrato HTTP coherente: solicitudes con una operación y dos números,
  respuesta de éxito con un resultado numérico y HTTP 400 con un mensaje para entradas
  no válidas. Rechaza valores ausentes, vacíos y no finitos, sin convertirlos en cero.
- Prueba también las rutas HTTP y la propagación de los errores hasta la interfaz.
- Usa node:test para las pruebas y documenta el formato de las solicitudes en el README.
- Crea un README con instrucciones de instalación, pruebas y ejecución.
- Instala las dependencias, ejecuta las pruebas y corrige los fallos que se produzcan.
```

## Verificación

En la terminal, ejecuta:

```bash
npm test
npm start
```

Con el servidor en ejecución, abre `http://localhost:3000` y confirma que la suma y la resta funcionen.

Prueba `2 + 3 = 5`, `2 - 5 = -3` y `1.5 + 2.25 = 3.75`. Un campo vacío debe producir un mensaje de validación, no un resultado numérico. Revisa las pruebas de dominio y HTTP en la terminal.

Si el agente ya ha iniciado el servidor, reutilízalo en lugar de volver a ejecutar `npm start`. Si otro proyecto está usando el puerto 3000, pide un puerto libre y usa la URL indicada en todos los pasos siguientes. No detengas procesos de otros proyectos.

---

# Paso 4: Prompt reutilizable

## Qué es

Un prompt parametrizado que permite generar nuevas operaciones de forma coherente.

## Objetivo

Ampliar la creación de código manteniendo las convenciones y la calidad.

## Escribe en el chat

`/create-prompt`

## Pega este prompt

```
Crea un archivo de prompt de workspace llamado nueva-operacion en
.github/prompts/nueva-operacion.prompt.md.

Configura el prompt con:
- name: nueva-operacion
- description: Implementa y valida una nueva operación de la calculadora
- argument-hint: Nombre de la operación matemática
- agent: agent

El prompt debe usar la variable ${input:nombre_operacion} y pedir a Copilot que:

1. Inspeccione la estructura actual antes de editar.
2. Implemente la operación en JavaScript como una función pura.
3. Valide las entradas numéricas.
4. Gestione los errores previsibles.
5. Actualice la ruta, el servicio, la interfaz y las pruebas.
6. Ejecute las pruebas automatizadas y corrija los fallos que se produzcan.
7. Inicie o reutilice el servidor local.
8. Pruebe la operación en el navegador.

Al finalizar, informa de:
- Operación implementada
- Archivos modificados
- Pruebas ejecutadas y resultados
- Validación realizada en el navegador
```

Si la versión instalada no solicita la variable de entrada, ejecuta `/nueva-operacion multiplicacion` y pídele al prompt que use el argumento indicado, sin adivinar una operación.

## Comprobar el archivo de prompt

1. En el Chat, haz clic en el engranaje **Configure Chat**.
2. En el editor de personalizaciones, abre **Prompts**.
3. Confirma que `nueva-operacion.prompt.md` aparezca como un prompt del workspace.
4. Abre el prompt y comprueba que su nombre sea `nueva-operacion` y que esté presente el argumento `nombre_operacion`.

---

## 🧪 Prueba intermedia

Usa el prompt creado para generar dos operaciones nuevas. En el chat, ejecuta:

```
/nueva-operacion
```

Cuando se te solicite, introduce `multiplicacion` para la variable `nombre_operacion`.
A continuación, vuelve a ejecutar:

```
/nueva-operacion
```

Esta vez, introduce `division`.

Observa:

* La coherencia del código entre las dos generaciones
* La validación de entradas
* La gestión de la división entre cero

---

# Paso 5: Skill

Antes de crear la skill, vamos a generar el comportamiento que encapsulará. El agente abre el navegador, usa la calculadora como un usuario real y produce un informe crítico.

Antes de ejecutar el prompt, confirma que la aplicación esté disponible en `http://localhost:3000`.

## Primero, ejecuta este prompt en el chat

```
Prueba la calculadora en http://localhost:3000 como un usuario exigente.

Usa la herramienta de navegador para:
- Probar todas las operaciones disponibles
- Comprobar entradas no válidas y la división entre cero
- Evaluar estados de error, claridad de los controles y adaptación a distintos tamaños de pantalla
- No modificar el código durante esta evaluación

Al finalizar, produce un informe con evidencias, problemas encontrados,
gravedad y sugerencias de mejora.
```

## Después, guárdalo como skill

Usa `/create-skill` o simplemente escribe en el chat:

```text
Guarda este flujo como una skill de workspace llamada
calculadora-dogfooding en
.github/skills/calculadora-dogfooding/SKILL.md.
```

## Comprobar la skill

1. En el Chat, haz clic en el engranaje **Configure Chat**.
2. En el editor de personalizaciones, abre **Skills**.
3. Confirma que `calculadora-dogfooding` aparezca como una skill del workspace.
4. Abre la skill y confirma que el archivo `SKILL.md` describa cuándo debe utilizarse.

## Para activar la skill en el futuro

Una vez guardada, usa este prompt en el chat para invocar el comportamiento:

```
haz dogfooding de la calculadora
```

Confirma en la sección **References** de la respuesta que se haya cargado la skill.

El nombre de esta sección puede variar entre versiones. Despliega los detalles del contexto o de las herramientas de la respuesta y busca la ruta `.github/skills/calculadora-dogfooding/SKILL.md`. Una respuesta que solo diga que ha probado la página no demuestra que se haya cargado.

---

# Paso 6: Modernización visual

Antes de crear el agente, vamos a sustituir el formulario por un teclado de calculadora. Es un cambio de interacción, no solo de etiquetas: necesita nuevas pruebas de estado y entrada.

## Pega este prompt en el chat

```
Actualiza el frontend de la calculadora con una interfaz moderna inspirada en la calculadora de iOS, sustituyendo el modelo de dos campos de entrada por un flujo interactivo con teclado numérico.

La interfaz debe tener una pantalla en la parte superior para la entrada y el resultado, un teclado con dígitos (0–9, separador decimal y botón de borrar), botones de operaciones basados en las rutas existentes, además de "=" para calcular y "C" para limpiar.

El usuario debe introducir los valores de forma secuencial y seleccionar la operación antes del cálculo. Utiliza un tema oscuro, con botones grandes, una buena jerarquía visual e indicaciones de interacción, y garantiza que el diseño se adapte a distintos tamaños de pantalla.

Define y prueba: solo un separador decimal por operando; C limpia todo
el estado; borrar elimina el último dígito; = sin dos operandos no envía
una solicitud no válida; la división entre cero muestra un error y permite empezar de nuevo.
Mantén etiquetas accesibles y el uso mediante teclado.

Conserva las rutas existentes, actualiza las pruebas necesarias, ejecuta
la suite automatizada y valida el resultado en el navegador en
http://localhost:3000.
```

## Verificación

Prueba `12 + 3 = 15`, `C`, `9 - 12 = -3`, `1.5 × 2 = 3` y `8 ÷ 0`. Tras el error, usa `C` y confirma que `8 ÷ 2 = 4` funcione. Reduce el ancho a 375 px y comprueba que los controles sigan siendo visibles y utilizables.

---

# Paso 7: Agente de revisión de código

Un agente que lee el código de la calculadora, comprueba que cumpla las instrucciones y produce un informe crítico con los problemas encontrados y las sugerencias de mejora.

Lo que diferencia a este agente de un simple prompt es su autonomía: recorre varios archivos, contrasta las reglas de las instrucciones con el código real y entrega una evaluación estructurada sin necesitar orientación manual.

## Escribe en el chat

`/create-agent`

## Pega este prompt

```
Crea un agente personalizado de workspace llamado code-review-calc en
.github/agents/code-review-calc.agent.md.

El agente debe revisar el código sin modificar archivos. Configura únicamente
las herramientas de lectura y búsqueda disponibles en el selector de herramientas.
No habilites herramientas de edición ni de terminal. Solicita al usuario la salida
de npm test como contexto de la revisión.

El agente debe:

1. Inspeccionar la estructura real del proyecto.
2. Leer todos los archivos de src/calculadora/.
3. Leer src/services/calcService.js.
4. Leer src/routes/calculadora.js.
5. Leer las pruebas relacionadas.
6. Comprobar si se siguen las convenciones definidas en las instrucciones:
   - Funciones puras sin efectos secundarios
   - Validación de entradas en el servicio
   - Sin lógica de negocio en las rutas
   - Gestión explícita de errores previsibles
7. Identificar código duplicado, validaciones ausentes y casos de error sin cobertura.
8. Analizar la salida de pruebas proporcionada y registrar el resultado, dejando
   claro que no ha ejecutado las pruebas por su cuenta.

Al finalizar, producir un informe estructurado con:
- Archivo analizado
- Línea o símbolo relacionado
- Problema identificado
- Gravedad
- Sugerencia de corrección
```

Antes de seleccionar el agente, ejecuta `npm test` en la terminal y adjunta la salida a la conversación. La restricción de herramientas hace que la revisión sea de solo lectura; una instrucción de texto que diga «no editar» no impide por sí sola los comandos de escritura en la terminal.

## Comprobar el agente personalizado

1. En el Chat, haz clic en el engranaje **Configure Chat**.
2. En el editor de personalizaciones, abre **Agents**.
3. Confirma que `code-review-calc` aparezca como un agente del workspace.
4. Vuelve al Chat, abre el selector de agentes en el cuadro de mensaje y selecciona `code-review-calc`.

## Para activar el agente en el chat, usa el selector de agentes y este prompt:

```
revisa el código de la calculadora
```

---

# Paso 8: Copilot Instructions

Genera instrucciones generales del proyecto basándose en lo que ya existe en el repositorio. Se ejecuta al final para que `/init` pueda analizar la aplicación, las pruebas y las personalizaciones creadas durante el laboratorio.

## Escribe en el chat

`/init`

> En el entorno Local, Copilot analizará el proyecto y propondrá automáticamente las instrucciones generales en `.github/copilot-instructions.md`.

Si `/init` no está disponible, pídele al Chat que analice el proyecto y cree `.github/copilot-instructions.md` con los comandos que realmente existan, sin instalar dependencias ni modificar la aplicación.

Revisa el archivo generado:

1. Haz clic en el icono **Explorer** en la barra lateral izquierda.
2. Despliega la carpeta `.github`.
3. Abre `copilot-instructions.md`.
4. Confirma que los comandos de instalación, pruebas y ejecución sean correctos.
5. Compara las reglas con las instrucciones de arquitectura y calculadora.
6. Elimina las duplicaciones y resuelve las posibles contradicciones.
7. Ejecuta una tarea pequeña en un chat nuevo.
8. Abre **References** en la respuesta y confirma que se hayan usado las instrucciones esperadas.

## Lista de comprobación final

Al terminar el laboratorio, confirma que:

- Las dos instrucciones aparezcan en **Configure Chat > Instructions**.
- La suma, la resta, la multiplicación y la división tengan pruebas automatizadas.
- El prompt `/nueva-operacion` funcione en el entorno Local.
- La skill de dogfooding se cargue automáticamente.
- El agente personalizado aparezca en el selector de agentes y no modifique archivos.
- `npm test` pase.
- La calculadora funcione en `http://localhost:3000`.

## Problemas comunes y cierre

- **La instrucción no se aplica:** confirma el entorno Local, la ruta y los metadatos YAML del encabezado. Abre un archivo que coincida con `applyTo` y revisa el contexto de la respuesta.
- **Tailwind no muestra estilos:** pídele al agente que compruebe la compilación local y la ruta del CSS servido por Express.
- **Navegador no disponible:** abre la URL manualmente en el navegador integrado desde la paleta de comandos. Si la política de la organización bloquea la herramienta, realiza la verificación manual y deja constancia de esta limitación.
- Al terminar, detén únicamente el servidor de este laboratorio con `Ctrl+C` en la terminal correspondiente. Conserva el proyecto si quieres reutilizar las personalizaciones; eliminar la carpeta es opcional.

Fuentes: [Personalizaciones](https://code.visualstudio.com/docs/agent-customization/overview), [archivos de prompt](https://code.visualstudio.com/docs/agent-customization/prompt-files) y [skills](https://code.visualstudio.com/docs/agent-customization/agent-skills).
