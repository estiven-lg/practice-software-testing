# Tipos de prueba

> *Ya saben sobre qué tamaño de objeto prueban. Ahora: ¿qué están buscando exactamente?*

---

## Los cuatro tipos de prueba según ISTQB CTFL v4.0.1

| **Tipo** | **Descripción** |
|---|---|
| **Funcional** | ¿El sistema hace lo que se supone que debe hacer? Funciones, reglas de negocio, flujos. |
| **No funcional** | ¿Qué tan bien lo hace? Rendimiento, seguridad, usabilidad y otras características de calidad. |
| **Caja blanca** | Basada en la estructura interna: rutas de código, ramas, condiciones. Se profundiza en la Semana 11. |
| **Relacionado con cambios** | Confirmación (¿se corrigió el defecto?) y regresión (¿algo dejó de funcionar?). |

> **Cualquiera de estos cuatro tipos puede aplicarse en cualquiera de los cuatro niveles que acaba de ver. Un mismo requisito casi siempre necesita más de un tipo de prueba.**

---

## Funcional frente a no funcional

### Funcional

**Verifica QUÉ hace el sistema:** sus funciones, reglas de negocio y flujos, comparados contra lo especificado (o esperado).

**Preguntas típicas:**

- ¿El login rechaza una contraseña incorrecta?
- ¿El total del carrito suma bien con impuestos y descuentos?
- ¿Se envía el correo de confirmación tras una compra exitosa?

### No funcional

**Verifica QUÉ TAN BIEN lo hace:** atributos de calidad como el desempeño, la seguridad o la facilidad de uso. Se apoya directamente en ISO/IEC 25010:2023.

**Preguntas típicas:**

- ¿El checkout responde en menos de 2 segundos con 50 usuarios simultáneos?
- ¿Se puede inyectar código SQL en el campo de búsqueda?
- ¿Un usuario nuevo completa una compra sin ayuda ni manual?

---

## ISO/IEC 25010:2023 — nueve características de calidad de producto

- Adecuación funcional
- Eficiencia de desempeño
- Compatibilidad
- Capacidad de interacción
- Fiabilidad
- Seguridad
- Mantenibilidad
- Flexibilidad
- **Seguridad de funcionamiento** *(NUEVA EN 2023)*

---

## De la pregunta de prueba a la característica de ISO 25010

| **Pregunta de prueba** | **Característica ISO 25010** |
|---|---|
| ¿Responde rápido bajo carga? | **Eficiencia de desempeño** |
| ¿Resiste ataques o fugas de datos? | **Seguridad** |
| ¿Un usuario nuevo lo entiende sin ayuda? | **Capacidad de interacción** |
| ¿Sigue funcionando tras un error o caída? | **Fiabilidad** |
| ¿Es fácil de modificar sin romper otra cosa? | **Mantenibilidad** |
| ¿Funciona igual en otro navegador o entorno? | **Compatibilidad / Flexibilidad** |

---

## Caja blanca y relacionado con cambios

### Caja blanca (estructural)

Diseña las pruebas mirando el código: rutas, ramas, condiciones. Requiere acceso al código fuente — por eso el Proyecto 2 lo exige.

> *Se profundiza en la Semana 10 (técnicas de caja negra) y Semana 11 (caja blanca y pruebas estáticas).*

### Relacionado con cambios

Se ejecuta después de una modificación al sistema. Dos variantes que se confunden con frecuencia:

- **Confirmación (re-prueba):** ¿el defecto reportado ya se corrigió?
- **Regresión:** ¿la corrección rompió algo que sí funcionaba?

> *Se retoma con detalle en el gestor de defectos, más adelante en el curso.*