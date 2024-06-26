﻿
# Mantenimiento de usuarios

Proyecto de creación de un mantenimiento de usuarios sin mecanismo de autenticación

## Puntos a realizar

- [HU01 – Listado de usuarios]
    - Cuando se acceda a la pantalla, se visualizará en formato listado, la totalidad de usuarios dados de alta en la plataforma. Los campos que debe contener el listado son: ID, Nombre, Apellidos, Email, Rol y Acción.Por lo que respecta al campo Acción, éste estará  formado por dos iconos: Editar y Eliminar. El listado debe estar paginado.
- [HU02 – Crear usuario]
    - Cuando el usuario pulse el botón “Crear nuevo usuario” , se redirigirá a la pantalla Crear Usuario.  Todos los campos de la pantalla Crear Usuario serán de tipo obligado.  El campo rol será de tipo desplegable. Deben aparecer dos botones Cancelar y Guardar. El botón cancelar estará deshabilitado hasta que los campos obligatorios estén cumplimentados de forma correcta. Si se pulsa cancelar se abrirá un pop-up dónde se le avisará al usuario que si continua los cambios se perderán. Si  continua la acción, los cambios se pierden y se volverá a la pantalla  de la lista de usuarios. Pero si no continua seguirá en la misma  pantalla sin que se hayan producido cambios.
- [HU03 – Editar usuario]
    - Cuando el usuario pulse el botón “Editar usuario” , se redirigirá a la pantalla  Editar Usuario.  Todos los campos de la pantalla Crear Usuario serán de tipo obligado.  El campo rol será de tipo desplegable. Deben aparecer dos botones Cancelar y Guardar. El botón cancelar estará deshabilitado hasta que los campos obligatorios estén cumplimentados de forma correcta. Si se pulsa cancelar se abrirá un pop-up dónde se le avisará al usuario que si continua los cambios se perderán. Si  continua la acción, los cambios se pierden y se volverá a la pantalla  de la lista de usuarios. Pero si no continua seguirá en la misma  pantalla sin que se hayan producido cambios.

- [HU04 – Eliminar usuario]
    - Cuando el usuario pulse la acción Eliminar asociado a una fila de la lista de usuarios, aparecerá un pop-up dónde se le avisará al usuario que si continua los datos del registro seleccionado se  perderán. Si continua la acción, se eliminará el registro y se volverá a la pantalla de la lista de usuarios. Pero si no continua seguirá en la  misma pantalla sin que se hayan producido cambios
- [HU05 – Filtro en listado de usuarios]
    - En la pantalla donde se encuentra el listado de usuarios, debe aparecer un filtro. El filtro debe contener los siguientes campos: Nombre, Apellidos y Rol. El filtro debe ser capaz de filtrar por uno o varios campos simultáneamente. Nota: no es necesario que el usuario escriba toda la palabra entera, sino que puede escribir solo una parte de la misma, en los campos de tipo texto. Por otro lado, si el usuario realiza un filtrado, pero no se encuentran resultados coincidentes, debe aparecer un mensaje que informe de ello. Es importante también que el filtro se pueda restaurar. En ese caso, los campos del filtro se quedarán en blanco y el listado  volverá a mostrar su contenido original.

## Conocimientos adquiridos a destacar.

- Comportamiento de datos tipo Enum añadiendo anotación @Enumerated(value = EnumType.STRING). Tuve dificultades para realizar el filtrado por el tipo de usuario debido a que se trataba de un enum y por tanto al realizar las funciones de filtrado no encontraba el valor igual a tipo de usuario.

## Documentación consultada

[Comportamiento Enums](https://www.youtube.com/watch?v=oKA2-aIEQaw)

[Comportamiento Enums](https://es.stackoverflow.com/questions/152595/c%C3%B3mo-pasar-un-enumerado-enum-a-una-lista-de-strings-liststring-o-a-un-arr/152602#152602)

[Angular Docs](https://angular.io/docs)

[fontawesome](https://fontawesome.com/)

[Bootstrap](https://getbootstrap.com/)
## Tecnologías empleadas

**Client:** Angular 16.2.0, Bootstrap, FontAwesome

**Server:** SpringBoot 3.2.5, Java, Mapstruct 1.5.5, Gradle, H2

