# Técnicas de diseño de pruebas: Caja negra

> *Diseñar casos desde la especificación: partición de equivalencia, valores límite, tablas de decisión y transición de estados.*

---

## ¿Qué es la prueba de caja negra?

**DEFINICIÓN Y ALCANCE**

### Definición

Se diseñan los casos a partir de la especificación del comportamiento (requisitos, reglas de negocio, interfaces), tratando al componente como una «caja» cuyo interior no se observa. Interesa la relación **entrada → salida esperada**, no la implementación.

### ¿Dónde se aplica?

- Nivel unitario
- Nivel de integración
- Nivel de sistema
- Nivel de aceptación
- Pruebas funcionales y también no funcionales (por ejemplo, pruebas de carga)

### ¿Qué encuentra bien?

- Funciones ausentes o incorrectas.
- Errores en el manejo de rangos y bordes.
- Combinaciones de condiciones no contempladas.
- Comportamiento incorrecto ante secuencias de eventos.

> **Limitación:** no garantiza cobertura del código → se complementa con caja blanca (S11).

# Partición de equivalencia

**TÉCNICA 1 DE 4**

> *Dividir el dominio de entrada en clases que el sistema debería tratar igual; probar un representante por clase.*

---

## Partición de equivalencia — concepto

**EQUIVALENCE PARTITIONING (EP)**

- El dominio de entrada (o salida) se divide en particiones cuyos valores el sistema procesa de la misma forma.
- **Partición válida:** valores que el test object debe aceptar y procesar.
- **Partición inválida:** valores que debe rechazar o ignorar.
- **Hipótesis:** un valor de la clase «representa» a toda la clase → basta un caso por partición.
- **Cobertura EP** = particiones ejercitadas ÷ particiones identificadas.

### Regla práctica

- Cubra **SIEMPRE** al menos una partición inválida (los defectos se esconden ahí).
- No combine varias particiones inválidas en un mismo caso: podrían enmascararse.
- EP reduce casos; los límites (siguiente técnica) refuerzan sus bordes.

> *EP + BVA se usan casi siempre juntas.*

---

## EP — ejemplo trabajado

**REQUISITO: DESCUENTO POR EDAD**

> **R-01:** El sistema aplica descuento solo si la edad del cliente está entre 18 y 65 años (inclusive). Fuera de ese rango, no hay descuento.

| **Partición** | **Rango** | **Tipo** | **Valor representante** | **Resultado esperado** |
|---|---|---|---:|---|
| **P1 — menores** | edad < 18 | Inválida | 10 | Sin descuento |
| **P2 — elegibles** | 18 ≤ edad ≤ 65 | Válida | 40 | Aplica descuento |
| **P3 — mayores** | edad > 65 | Inválida | 80 | Sin descuento |
| **P4 — no numérico** | valor no entero | Inválida | `"abc"` | Error de validación |

*4 particiones → 4 casos base cubren todo el dominio. Cobertura EP = 4/4 = 100 %.*
# Análisis de valores límite

**TÉCNICA 2 DE 4**

> *Los errores se concentran en los bordes de las particiones ordenadas. Se prueba justo en la frontera y sus vecinos.*

---

## Valores límite — concepto

**BOUNDARY VALUE ANALYSIS (BVA)**

- Extiende la EP: en vez de un valor cualquiera, se prueba en los bordes de cada partición.
- Solo aplica a particiones **ORDENADAS** (numéricas, fechas, tamaños): debe existir «anterior» y «siguiente».
- **Motivo:** los defectos de programación suelen estar en operadores relacionales (`<` vs `≤`, `>` vs `≥`) y en *off-by-one*.
- Cada frontera es un valor límite; la cobertura se mide sobre esos valores límite.

### No lo use cuando...

- La partición no está ordenada (p. ej., «país», «color»): no hay borde.
- El «límite» real es difuso: acláralo con el analista antes de diseñar.

> **CTFL 4.0 distingue BVA de 2 valores y de 3 valores → siguiente diapositiva.**

---

## BVA de 2 y 3 valores

**CAMBIO INTRODUCIDO EN CTFL v4.0**

### BVA de 2 valores

- Por cada frontera: el valor límite y su vecino más cercano de la partición adyacente.
- Más económico; suele bastar.

### BVA de 3 valores

- Por cada frontera: el valor límite y **AMBOS vecinos** (anterior y posterior).
- Más costoso; detecta defectos que el de 2 valores no ve.

> **Por qué importa (ejemplo del syllabus):**  
> Si `if (x ≤ 10)` se implementa por error como `if (x = 10)`, los datos del BVA de 2 valores (`x = 10`, `x = 11`) **NO** detectan el fallo. En cambio, `x = 9` —que aporta el BVA de 3 valores— probablemente sí lo revela.

---

## BVA — ejemplo trabajado

**MISMO REQUISITO R-01 (18–65 AÑOS)**

| **Frontera** | **Valor límite** | **BVA 2 valores** | **BVA 3 valores** | **Resultado esperado en el límite** |
|---|---:|---|---|---|
| **Inferior (18)** | 18 | 17, 18 | 17, 18, 19 | 17 → sin dcto. · 18 → aplica |
| **Superior (65)** | 65 | 65, 66 | 64, 65, 66 | 65 → aplica · 66 → sin dcto. |

### BVA de 2 valores → 4 datos

`17, 18 · 65, 66`

Mínimo esfuerzo; cubre ambos bordes con su vecino inmediato.

### BVA de 3 valores → 6 datos

`17, 18, 19 · 64, 65, 66`

Añade el valor interior de la partición válida; mayor poder de detección.
# Tabla de decisión

**TÉCNICA 3 DE 4**

> *Cuando la salida depende de la COMBINACIÓN de varias condiciones, se modela con condiciones, reglas y acciones.*

---

## Tabla de decisión — concepto

**DECISION TABLE TESTING**

- Modela reglas de negocio que combinan varias condiciones para producir acciones.
- **Estructura:** filas de **CONDICIONES** (arriba) y de **ACCIONES** (abajo); cada columna es una **REGLA**.
- **Tabla completa:** todas las combinaciones posibles (`2ⁿ` si las `n` condiciones son booleanas).
- **Tabla colapsada:** fusiona reglas usando «no importa» (`—`) cuando una condición no altera la acción.
- **Cobertura** = reglas ejercitadas ÷ reglas de la tabla.

### ¿Cuándo usarla?

- Descuentos, autorizaciones, elegibilidad, tarifas: lógica de «si... y... entonces».
- Revela combinaciones que la especificación olvidó definir.

> *Cada regla relevante ⇒ al menos un caso de prueba con su resultado esperado.*

---

## Tabla de decisión — ejemplo trabajado

**CHECKOUT: ENVÍO Y DESCUENTO**

> **R-02:** Si el cliente es VIP hay envío gratis; el descuento depende de ser VIP y de que el monto sea ≥ Q500.

### CONDICIONES

| **Regla →** | **R1** | **R2** | **R3** | **R4** |
|---|---:|---:|---:|---:|
| **Cliente VIP** | Sí | Sí | No | No |
| **Monto ≥ Q500** | Sí | No | Sí | No |

### ACCIONES

| **Regla →** | **R1** | **R2** | **R3** | **R4** |
|---|---:|---:|---:|---:|
| **Envío gratis** | Sí | Sí | No | No |
| **Descuento aplicado** | 15 % | 10 % | 5 % | 0 % |

*2 condiciones booleanas ⇒ 4 reglas ⇒ 4 casos. Cobertura de tabla de decisión = 4/4 = 100 %.*
# Transición de estados

**TÉCNICA 4 DE 4**

> *Cuando el comportamiento depende del ESTADO actual y de la SECUENCIA de eventos, se modela con estados y transiciones.*

---

## Transición de estados — concepto

**STATE TRANSITION TESTING**

- Modela sistemas cuya respuesta depende del estado actual y del evento recibido.
- **Elementos:** estados, eventos (disparadores), transiciones y acciones/guardas.
- Se representa con diagrama de estados o con tabla estado-evento.
- **Transición válida:** definida por la especificación.
- **Transición inválida:** no debería ocurrir en ese estado.

### Criterios de cobertura

- **Todos los estados:** visitar cada estado al menos una vez.
- **Todas las transiciones válidas** (0-switch / cobertura de Chow).
- **N-switch:** secuencias de N+1 transiciones encadenadas.
- **Válidas + inválidas:** probar también eventos indebidos.

---

## Transición de estados — ejemplo trabajado

**SESIÓN DE ACCESO CON BLOQUEO POR 3 INTENTOS**

### Diagrama de estados

- **Inactiva** → (login válido) → **Activa**
- **Activa** → (logout) → **Inactiva**
- **Inactiva** → (3.er intento inválido) → **Bloqueada**

### Tabla estado-evento

| **Estado \ Evento** | **Login válido** | **Login inválido (<3)** | **3.er inválido** | **Logout** |
|---|---|---|---|---|
| **Inactiva** | Activa | Inactiva | Bloqueada | — |
| **Activa** | — | — | — | Inactiva |
| **Bloqueada** | — | — | — | — |

> *«—» = transición inválida (evento no admitido en ese estado). 3 estados, 4 transiciones válidas → 0-switch = 4 casos, más los eventos inválidos de mayor riesgo.*
# Pairwise (combinatoria) — más allá del Foundation

**ISO/IEC/IEEE 29119-4:2021 · TÉCNICAS COMBINATORIAS**

- **Problema:** explosión combinatoria. Con *k* parámetros de *v* valores hay `vᵏ` combinaciones exhaustivas.
- **Pairwise (all-pairs):** garantiza que toda **PAREJA** de valores entre dos parámetros aparezca al menos una vez.
- **Fundamento empírico:** gran parte de los defectos surge de la interacción de solo dos factores.
- **Herramientas:** PICT (Microsoft), ACTS (NIST), allpairs.

### Ejemplo visual

**4 parámetros × 3 valores**

- **81** combinaciones exhaustivas
- **≈ 9** casos con pairwise
- **≈ 89 % menos casos**

---

# Experiencia y riesgo — técnicas complementarias

**COMPLEMENTAN, NO SUSTITUYEN, A LAS FORMALES**

### 1. Conjetura de errores

*Error guessing:* el tester enumera defectos típicos (basado en experiencia) y diseña casos para provocarlos.

### 2. Pruebas exploratorias

Aprender, diseñar y ejecutar a la vez, guiadas por «charters» y con *time-boxing*; documentar hallazgos.

### 3. Basadas en checklist

Verificar contra listas de comprobación (heurísticas, normativa, estándares de UI/seguridad).

### 4. Basadas en riesgos

Priorizar el esfuerzo según **probabilidad × impacto**; transversal a todas las técnicas anteriores.

---

# ¿Qué técnica usar y cuándo?

**GUÍA DE SELECCIÓN RÁPIDA**

| **Si el requisito...** | **Técnica recomendada** |
|---|---|
| Define rangos o campos numéricos con límites | Valores límite (BVA) + equivalencia |
| Tiene muchos valores discretos que se tratan igual | Partición de equivalencia |
| Combina varias condiciones para decidir una acción | Tabla de decisión |
| Depende de la secuencia de eventos y del estado | Transición de estados |
| Tiene muchos parámetros que interactúan entre sí | Pairwise / combinatoria (29119-4) |
| Concentra riesgo alto o defectos históricos | Experiencia + basada en riesgos |

> *En la práctica se combinan: EP+BVA para dominios, decisión para la lógica, estados para el flujo, y experiencia/riesgo para afinar.*