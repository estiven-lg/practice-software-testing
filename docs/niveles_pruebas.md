# Niveles de prueba

**Bloque 1 · Minutos 10 a 25**

> *Cuatro escalas para hacerse la misma pregunta: ¿qué tan grande es lo que estoy probando?*

---

## Qué es un nivel de prueba

### Definición de trabajo

Un nivel de prueba es un grupo de actividades de prueba organizadas y gestionadas juntas, según el tamaño del objeto que se está probando: desde una función aislada hasta el sistema completo funcionando para un usuario real.

> **El eje NIVEL responde:** «¿sobre qué tamaño de objeto estoy probando ahora mismo?»

El sílabo ISTQB CTFL v4.0.1 reconoce cinco niveles técnicos (componente, integración de componentes, sistema, integración de sistemas y aceptación). En este curso trabajamos con la agrupación práctica de cuatro niveles que verá en la diapositiva 11, la más usada en la industria.

### Idea clave

**Nivel y tipo son ejes independientes.**

Una prueba de seguridad (tipo) puede ejecutarse a nivel de componente o a nivel de sistema. Una prueba funcional (tipo) también puede vivir en cualquiera de los cuatro niveles. Confundir ambos ejes es el error más común de esta unidad.

---

## De dónde vienen los cuatro niveles: El modelo V, en su versión simplificada

| Fase de Definición (Izquierda) | → | Fase de Verificación (Derecha) |
|---|---|---|
| Requisitos del negocio | → | Prueba de aceptación |
| Diseño del sistema | → | Prueba de sistema |
| Diseño detallado | → | Prueba de integración |
| Codificación | → | Prueba de componente |

*Cada nivel de prueba (derecha) verifica el nivel de definición correspondiente (izquierda) — de ahí el nombre "modelo V": se baja definiendo y se sube verificando.*

---

## Prueba de componente (unitaria)

**Verificar una unidad de código aislada: una función, un método, una clase.**

- **¿Quién la ejecuta?**  
  El propio desarrollador, casi siempre con pruebas automatizadas.

- **Enfoque de la técnica**  
  Suele usar técnicas de caja blanca (Semana 11) porque el probador conoce el código.

- **Ejemplo real de esta semana**  
  En Juice Shop: probar que la función que calcula el descuento de un cupón devuelve el monto correcto para distintos valores de entrada, sin tocar la base de datos ni la interfaz.

---

## Prueba de integración

**Verificar las interfaces y la interacción entre dos o más componentes ya probados por separado.**

- **¿Quién la ejecuta?**  
  El equipo de desarrollo o un probador técnico, con foco en los puntos de contacto.

- **Enfoque de la técnica**  
  El foco **NO** es la lógica interna de cada componente: es lo que pasa en la frontera entre ambos.

- **Ejemplo real de esta semana**  
  En Toolshop: probar que el servicio de carrito de compras se comunica correctamente con el servicio de inventario al reservar un producto.

---

## Prueba de sistema

**Verificar el sistema completo, integrado, contra los requisitos funcionales y no funcionales.**

- **¿Quién la ejecuta?**  
  Un equipo de pruebas independiente, idealmente distinto de quien desarrolló.

- **Enfoque de la técnica**  
  Aquí es donde se prueban de forma realista las características de ISO/IEC 25010 (bloque siguiente).

- **Ejemplo real de esta semana**  
  En Juice Shop: ejecutar el flujo completo de compra —desde iniciar sesión hasta recibir la confirmación del pedido— como lo haría un usuario real.

---

## Los cuatro niveles, de un vistazo

| Nivel | Qué verifica | Quién lo hace típicamente | Ejemplo en Juice Shop / Toolshop |
|---|---|---|---|
| **Componente** | Una unidad de código aislada | Desarrollador | Función que calcula un descuento |
| **Integración** | La interacción entre componentes | Equipo técnico | Carrito ↔ servicio de inventario |
| **Sistema** | El sistema completo integrado | Equipo de pruebas independiente | Flujo de compra de principio a fin |
| **Aceptación** | Si el sistema sirve para el negocio o el usuario | Cliente, usuario o interesado | ¿Un usuario real completaría una compra sin ayuda? |

> **Aceptación es el único nivel donde el objetivo NO es encontrar defectos:** es construir confianza en que el sistema está listo para usarse.