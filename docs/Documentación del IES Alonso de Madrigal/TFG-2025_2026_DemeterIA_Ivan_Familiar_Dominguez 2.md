DemeterIA

Hidroponía bajo entorno IoT

Trabajo Fin de Grado Superior
Ciclo Formativo en Desarrollo de Aplicaciones Multiplataforma
Mayo de 2026

Autor:
Iván Familiar Domínguez
70826336K(DNI)

Tutor:
Prof. José María Pérez Ramos

Departamento de Informática y Comunicaciones
IES Alonso de Madrigal

Índice

RESUMEN

     En el sector agrícola moderno, especialmente en los sistemas de cultivo hidropónico, el

control riguroso de los parámetros ambientales y de la solución nutritiva, como el pH1 y la EC2,

es fundamental para garantizar el rendimiento y la salud de las plantas. El problema surge

cuando  los  agricultores  no  disponen  de  herramientas  centralizadas  y  accesibles  para

monitorizar el estado actual de sus cultivos en tiempo real. Esto, en hidroponía, puede derivar

en  la  pérdida  de  la  cosecha  por  valores  fuera  del  rango  aceptado  en  ese  cultivo  con  más

rapidez que en uno convencional.

     Para abordar esta necesidad, el objetivo principal de este proyecto ha sido el desarrollo de

una aplicación Android a la que hemos llamado DemeterIA. Ésta permite gestionar los cultivos

y monitorizarlos mediante alertas o bien ver los datos de sus sensores a tiempo real.

     Para llevar a cabo el proyecto, se ha seguido una metodología agile, organizando el trabajo

mediante iteraciones. Con este planteamiento en mente, se decidió realizar el desarrollo por

módulos independientes tales como información de los cultivos y de sus respectivos sensores,

alertas  y,  por  último,  una  pantalla  de  información  para  el  usuario,  implementando  la

modularidad en la aplicación para facilitar los cambios y permitir la mejora continua durante el

ciclo de vida del software.

     A  nivel  tecnológico,  la  aplicación  se  ha  desarrollado  para  el  SO3  Android  utilizando  el

lenguaje de programación Kotlin. Se ha implementado una arquitectura de software robusta y

escalable  basada  en  Clean  Architecture,  separando  claramente  las  capas  de  presentación

con el patrón MVVM4, dominio y datos para cada módulo independiente. En estos cultivos;

alertas, sensores y ajustes.

     Para la infraestructura técnica se ha implementado lo siguiente: Koin para la inyección de

dependencias, Room como base de datos local para garantizar el funcionamiento sin conexión

y  una  arquitectura  reactiva  mediante  el  uso  de  corrutinas.  En  el  apartado  remoto,  se  ha

integrado Firebase para la sincronización de datos en la nube, también se ha utilizado Retrofit

para realizar conexiones con APIs 5a lo largo del proyecto.

1 Potencial de Hidrógeno
2 Conductividad Eléctrica
3 Sistema Operativo
4 Model – View - View Model
5 Application Programming Interface

[2]

     Durante el desarrollo, uno de los desafíos técnicos más importantes fue la evolución de la

arquitectura  de  la  capa de  red. Inicialmente,  la aplicación  consumía  los  datos  de  un  JSON

mediante  una  API  REST6  ofrecida  por  el  profesor,  lo  que  limitaba  la  inmediatez  de  la

información.  Para  solucionarlo,  se  decidió  refactorizar  la  capa  de  datos  migrando  la

infraestructura hacia Firebase Realtime Database. Esto permitió al equipo poder avanzar de

forma más rápida independientemente y aprendiendo nuevas tecnologías que nos enseñaron

a adaptarnos a distintas opciones viendo la utilidad real de una arquitectura modular como la

que se fue desarrollando durante todo el proceso.

     Como  conclusión,  los  objetivos  propuestos  han  sido  parcialmente  cumplidos,  logrando

implementar ciertas partes de la aplicación y otras de forma funcional pero no final. De cara

al  futuro  cabe  destacar  la  implementación  de  IA  para  ayudar  al  agricultor  en  la  toma  de

decisiones,  gráficas  de  los  sensores  y  una  mayor  configuración  y  personalización  para  las

alertas.

Palabras claves: Hidroponía, Monitorización, Android, Sensores

6 Representational State Transfer

Índice

ABSTRACT

     In  the  modern  agricultural  sector,  especially  in  hydroponic  cultivation  systems,  rigorous

control  of  environmental  and  nutrient  solution  parameters,  such  as  pH7  and  EC8,  is

fundamental  to  ensuring  plant  yield  and  health.  The  problem  arises  when  farmers  lack

centralised  and  accessible  tools  to  monitor  the  current  status  of  their  crops  in  real  time.  In

hydroponics, this can lead to crop loss due to values outside the acceptable range for a given

crop far more quickly than in conventional farming.

     To address this need, the main objective of this project has been the development of an

Android  application  we  have  called  DemeterIA.  It  allows  users  to  manage  their  crops  and

monitor them through alerts, or view sensor data in real time.

     To carry out the project, an agile methodology was followed, organising the work through

iterations.  With  this  approach  in  mind,  development  was  structured  around  independent

modules — such as crop information and their respective sensors, alerts, and finally a user

information screen — implementing modularity in the application to facilitate changes and allow

continuous improvement throughout the software lifecycle.

     At  the  technological  level,  the  application  was  developed  for  the  Android  OS9  using  the

Kotlin  programming  language.  A  robust  and  scalable  software  architecture  based  on  Clean

Architecture  was  implemented,  clearly  separating  the  presentation  layer  using  the  MVVM

pattern,  the  domain  layer,  and  the  data  layer  for  each  independent  module:  crops,  alerts,

sensors, and settings.

     The  following  technical  infrastructure  was  implemented:  Koin  for  dependency  injection,

Room as a local database to ensure offline functionality, and a reactive architecture through

the  use  of  coroutines.  On  the  remote  side,  Firebase  was  integrated  for  cloud  data

synchronisation, and Retrofit was used to connect with APIs throughout the project.

     During development, one of the most significant technical challenges was the evolution of

the network layer architecture. Initially, the application consumed data from a JSON file via a

REST API provided by the lecturer, which limited the immediacy of the information. To resolve

this,  the  team  decided  to  refactor  the  data  layer  by migrating  the  infrastructure to  Firebase

7 Potential of Hydrogen
8 Electrical Conductivity
9 Operating System

[4]

Realtime Database. This allowed the team to progress more quickly and independently while

learning new technologies, teaching them to adapt to different options and demonstrating the

real value of a modular architecture such as the one developed throughout the entire process.

     In  conclusion,  the  proposed  objectives  have been  partially  met,  with  certain  parts  of  the

application  implemented  fully  and  others  in  a  functional  but  not  final  state.  Looking  ahead,

notable future developments  include  the  implementation  of  AI  to  assist  farmers  in decision-

making, sensor data graphs, and greater configuration and customisation options for alerts.

Keywords: Hydroponics, Monitoring, Android, Sensors.

Índice

AGRADECIMIENTOS

Muchas gracias a mis padres, mi hermano, mis abuelos y mis tíos que tanto
me han apoyado en todo y me ha dado muchísima fuerza para continuar
con mis estudios.

Muchas gracias a mis amigos, tanto a los de Ávila como Aitor, Jorge y
Sampe, como a los de fuera como Gabriel y Pau, me habéis ayudado y
dado muchos ánimos a continuar día a día.

También muchas gracias a todos los profesores del Alonso de Madrigal que
me han enseñado tantas cosas a lo largo de estos años, como Noemi de la
Varga Ávila en el primer año del grado medio SMR, Fracisco Díaz Plaza que
me ha acompañado a lo largo de casi todos mis años en FP en este centro,
José María Pérez Ramos también conocido como Chema que tanto nos ha
enseñado este curso o Juan Carlos que tanto se ha preocupado por todos
nosotros.

[6]

Índice del TFGS

1. Introducción....................................................................................................................10

2. Problema .........................................................................................................................11

3. Objetivos .........................................................................................................................12

3.1 Objetivos Conjuntos ....................................................................................................12

3.1.1 Objetivos Cualitativos ..........................................................................................12

3.1.2 Objetivos Cuantitativos ........................................................................................12

3.2 Objetivos Individuales .................................................................................................13

3.2.1. Objetivos Cualitativos .........................................................................................13

3.2.2 Objetivos Cuantitativos ........................................................................................13

4. Metodología ....................................................................................................................14

4.1 Issues y PRs individuales ...........................................................................................18

4.1.1 Recuperar la lista de sensores desde la API. .......................................................18

4.1.2 Implementar una función de extensión ViewExt. ..................................................18

4.1.3 Implementar Skeleton Layout con funciones de extensión. ..................................18

4.1.4 Crear la interfaz que muestra la información de los sensores ..............................18

4.1.5 Eliminar los métodos deprecados de Skeleton Layout .........................................19

4.1.6 Gestión de errores de sensores. ..........................................................................19

4.1.7 Implementar la cache de los sensores en Room. .................................................19

4.1.8 Migrar la recuperación de datos desde la Api a Firebase .....................................20

4.1.9 Configuración del ESP32 y el sensor DHT11 .......................................................20

5. Resultados ......................................................................................................................21

5.1 Visión técnica .............................................................................................................21

5.1.1 Frontend ..............................................................................................................21

5.1.2 Backend...............................................................................................................21

5.1.3 Sensores .................................................................................................................21

5.2 Visión de usuario ........................................................................................................22

6. Conclusiones ..................................................................................................................22

6.1 Problema encontrados y como se han resuelto. .........................................................22

6.2 Objetivos y posibles mejoras. .....................................................................................22

6.3 Conocimientos relacionados con asignaturas del ciclo. ..............................................22

6.4 Como se han resuelto las dudas. ................................................................................23

7. Bibliografía .....................................................................................................................23

8. Anexos ............................................................................................................................24

01_Fichero main.cpp ........................................................................................................24

02_Fichero secrets.h ........................................................................................................24

03_Fichero functions.cpp ..................................................................................................24

04_Fichero functions.h .....................................................................................................27

05_Captura estructura firebase.........................................................................................28

06_Captura del listado de cultivos. ...................................................................................29

07_Captura del listado de sensores. .................................................................................30

08_Issue “Recover the list of sensors from the api” ..........................................................31

09_Pull request “Recover a list of sensors by a crop id from api” ......................................32

10_Issue “Implement ViewExt” .........................................................................................33

11_Issue “Implement Skeleton Layout” .............................................................................33

12_Pull request “Implement a extension function to make visible or hide the views” .........34

13_Pull request “Skeleton layout implemented with extension functions” ..........................35

14_Issue “Sensors data interface” ....................................................................................36

15_Issue “Eliminate old skeleton methods” .......................................................................36

16_Pull request “Create interface for sensors data” ..........................................................37

17_Issue “Sensor error management” ..............................................................................38

18_Issue “Sensor cache implemented in room” ................................................................38

19_Pull request “Implement sensor error management” ...................................................39

20_Pull request “Implement sensor cache on room” .........................................................40

21_Issue “Migrate sensors from api to firebase” ...............................................................41

22_Pull request “Migrate sensors from api to firebase” .....................................................42

1. Introducción

     DemeterIA, nuestra aplicación Android diseñada para la gestión de cultivos hidropónicos
basados en IoT10, surge con la intención de facilitar la vida al agricultor. Este tipo de cultivo es
una mejora respecto al tradicional debido a que permite reducir el gasto de agua y mejorar la
eficiencia de estos en cuanto a la periodicidad de las cosechas, pero la hidroponía tiene una
debilidad:  su  sensibilidad  a  los  cambios  es  mucho  mayor  que  en  otros  tipos  de  cultivo  y
necesitan estar en su ventana de trabajo ya que se pueden producir cambios bruscos en los
niveles óptimos que sin la debida supervisión, pueden resultar fatales.

     En  consecuencia,  decidimos  implementar  una  aplicación  que  permitiese  gestionar  las

plantaciones de una forma más sencilla. El objetivo era lograr la visualización de los cultivos

del usuario y los datos importantes referentes a estos. De esta forma se conseguiría optimizar

el proceso de producción mediante el uso de avanzadas tecnologías.

     Profundizando un poco más en el motivo que nos llevó a seleccionar la hidroponía y su

sistema de gestión como tema principal, contamos con los siguientes puntos a destacar:

•  Un ahorro de recursos, especialmente energéticos, lo que se traduce en una

mayor  sostenibilidad  y  respeto  con  el  medio  ambiente.  Esto  es  algo

especialmente relevante en el caso del agua, lo cual gracias a sistemas como

la  hidroponía  que  implementan  un  riego  muy  preciso  permiten  una  mayor

eficiencia  de  los  recursos  necesarios  minimizando  de  esta  manera  el

desperdicio de agua. Otro motivo por el que se ahorran recursos es debido a

que  la  producción  permite  el  cultivo  en  zonas  urbanas,  teniendo  así  una

producción más próxima al consumidor lo que reduce la cadena de suministro.

•  Al  no  necesitar  un  suelo  rural,  la  hidroponía  no  fomenta  la  deforestación  ni

destrucción  de  ecosistemas  naturales.  Al  mismo  tiempo,  permite  reducir  la

contaminación del agua y el suelo, además de eliminar los agentes químicos

que se utilizan en la agricultura.

•  Se pueden situar en edificios lo que hace más difícil que estos cultivos sean

víctimas  de  fuertes  cambios  meteorológicos  o  desastres  naturales  como  las

inundaciones respecto a los cultivos tradicionales.

•  Existe  un  mayor  control  por  lo  que  se  reduce  la  exposición  a  plagas  y

enfermedades, reduciendo así la necesidad de pesticidas y herbicidas.

     Por  todo  ello,  se  ha  decidido  realizar  una  aplicación  orientada  a  este  sector,  ya  que

nuestros huertos son una parte fundamental de nuestra salud y permite que los agricultores

10 Internet of Things

tengan una forma más sencilla, eficiente y sostenible de realizar su trabajo nos parecía algo

esencial para el futuro.

2. Problema

     La agricultura de la era moderna se enfrenta a un desafío cada vez mayor de escasez de

recursos y de producción más sostenibles. Pero, la gestión de sistemas hidropónicos presenta

barreras críticas:

•  A diferencia de un cultivo tradicional, los sistemas hidropónicos dependen de

un equilibrio químico constante. Un desvío en el pH o en la EC puede arruinar

el trabajo de meses en sólo unas horas.

•  Actualmente, los agricultores deben supervisar sus sistemas de forma manual,

impidiendo  así  una  reacción  rápida  ante  fallos  o  climatología  adversa  que

ocurra cuando ellos no estén presentes en sus campos de cultivo.

•  La ausencia de unos datos históricos digitales les dificulta la identificación de

patrones.  Y  en  la  actualidad,  la  importancia  de  los  datos  es  tal  que  podría

permitir  a  los  agricultores  saber  con  exactitud  qué  variable  optimizó  el

crecimiento o cuál hizo que se perdiese.

     Si  bien  actualmente  existen  soluciones  para  gestión  de  invernaderos,  éstas  suelen  ser

costosas y con interfaces complejas. Nosotros detectamos un nicho para aquellos usuarios

que quieran:

•  Accesibilidad: Convertir todos esos datos recogidos a una interfaz intuitiva que

pueda ser accesible para todo el mundo.

•  Disponibilidad en varios dispositivos: Debido a la sincronización con la base de

datos  remota,  se  pueden  consultar  los  datos  y  controlar  el  cultivo  desde

cualquier dispositivo sincronizado.

•  Sin  dependencia  de  una  conexión:  Gracias  a  la  base  de  datos  local  de  la

aplicación puedes seguir consultando los datos existentes hasta el momento

de la última conexión en tu dispositivo.

•  Control  y  organización:  La  capacidad  de  poder  seleccionar  la  etapa  de

crecimiento  de  un  cultivo  y  sus  parámetros  óptimos  de  forma  personalizada

permite que todo tipo de cultivos, incluso a pequeña escala, tengan un control

riguroso.

     La motivación tras DemeterIA nace de un interés en la conexión entre dispositivos IoT y

aplicaciones móviles, cubriendo también de esta manera la relevancia de la agricultura 4.0

además  de  querer fomentar  la  sostenibilidad  mediante  soluciones como la hidroponía,  que

consume  hasta  un  90% menos  de  agua  respecto  a  la  agricultura tradicional,  haciendo  que

ésta sea más sencilla y llevadera para nuestros agricultores.

3. Objetivos

3.1 Objetivos Conjuntos

     Los objetivos conjuntos impuestos en DemeterIA se dividen en cualitativos y cuantitativos.

3.1.1 Objetivos Cualitativos

•  Trabajar  con  dispositivos  IoT  recibiendo  datos  e  interpretándolos  en  nuestra

aplicación, ya sea mediante alertas, gráficos u otros.

•  Optimizar el trabajo que supone la hidroponía para hacer que más gente pueda

utilizarla produciendo de tal forma una optimización de recursos, como el agua,

siendo así más sostenibles como sociedad.

•  Una  arquitectura  limpia,  dividida  en  features  individuales  intentando  evitar  el

acoplamiento.

•  Comprender las virtudes que poseen los cultivos hidropónicos y compararlos

con los cultivos tradicionales.

3.1.2 Objetivos Cuantitativos

•

Implementar una caché en local con Room para guardar los datos del usuario

y de sus cultivos combinada con una sincronización a una base de datos en

red.

•

Integrar  gráficos  para  la  visualización  de  los  datos  de  los  sensores  y  poder

consultar el comportamiento en los diferentes cultivos.

•  Exportar los datos de los cultivos en formato CSV o PDF.

•  Crear  con  total  libertad  cultivos  y  poder  consultar  sus  detalles  en  cualquier

momento.

•  Recibir  alertas  de  la  aplicación  usando  notificaciones  push  cuando  ocurra

cualquier inconveniente con algún valor. Por ejemplo, el pH de un cultivo ha

salido del umbral deseado.

•

Implementación  de  un  log  in  funcional  permitiendo  así  la  separación  de  los

datos y privacidad de estos para los diferentes usuarios.

•

Implementar  una  IA  que  analice  los  datos  de  los  cultivos  para  ofrecer

recomendaciones y posibles mejoras.

•  Diseñar  interfaces  intuitivas,  con  el  objetivo  de  que  el  usuario  que  decida

monitorear un cultivo hidropónico, pueda hacerlo adecuadamente y de forma

sencilla.  Este  punto  era  especialmente  clave  ya  que  la  mayoría  de  los

agricultores no están familiarizados con este tipo de aplicaciones móviles.

3.2 Objetivos Individuales

     Los objetivos individuales para mí en DemeterIA han sido…

3.2.1. Objetivos Cualitativos

•  Conocer el funcionamiento de la distribución de los pines del ESP32+ y como conectar

correctamente el sensor.

•  Adquirir conocimientos sobre platform.io, c++ y el framework de Arduino.

3.2.2 Objetivos Cuantitativos

•  Recuperar datos de una API con la librería retrofit y mostrarlos en la aplicación.

•

Implementar  un  skeleton  para  que  se  muestre  mientras  cargan  los  datos  de  la

aplicación.

•  Guardar datos en una cache local los datos recuperados de la base de datos/API de

forma temporal.

•  Crear una estructura en una base de datos de Firebase y recuperar los datos desde la

aplicación para mostrarlos en esta.

•  Conectar a un ESP32 un sensor y programarlo para que lea valores del sensor y suba

los datos a una Firebase con la estructura correcta.

4. Metodología

     La  metodología  que  se  ha  usado  ha  sido  Agile  profundizando  en  el  uso  de  Scrum,  con

sprints11 semanales de máximo 5 tickets. También hemos llevado un seguimiento haciendo

dailys y weeklys.

El proceso seguido ha sido el siguiente:

1.  Redactar la issue.

2.  Crear una rama en la que se desarrolla lo necesario para llevar a cabo la issue.

3.  Estimar en las reuniones los story points12 que nos llevaría en cada sprint la realización

de esa issue.

4.  Se crea la correspondiente pull request que resuelve la issue al finalizar el desarrollo

de la misma.

     Al principio, la pull request se adjudicaba a dos revisores, pero más adelante se optimizó

con la incorporación de Copilot, cuyas observaciones debían ser tratadas por la persona que

había abierto la pr, y un único revisor final que tras su ok, se podía llevar a cabo un merge con

main. De esta forma se cerraba también la issue asignada.

A  continuación,  se  demuestra  cómo  se  han  dispuesto  los  tickets,  los  cuales  siguen

este  flujo:  Historia  de  usuario  (Feature  completa)  >  Tarea  (Una  parte  de  la  funcionalidad

grande). Para explicarlo de mejor manera se dispone el siguiente ejemplo; Un usuario quiere

poder  consultar  sus  cultivos  (Feature),  una  tarea  sería  consultar  el  listado  de  todos  sus

cultivos, otra tarea podría ser ver sus detalles, etc… Podemos ver esto reflejado en la Fig.1 y

Fig.2.  El  objetivo  de  ambas  (Historia  de  Usuario  y  Tarea)  debía  ser  explicado  de  forma

detallada en el repositorio para que fuese fácil de entender el objetivo y el mismo quedase

claro.

Para realizar las historias de usuario y las tareas; nuestro profesor José María Pérez

Ramos  puso  a  nuestra  disposición  unas  plantillas  para  que  todos  siguiésemos  un  mismo

formato y orden a la hora de crear nuevas funcionalidades para la aplicación. También entrenó

a  Copilot  para  realizar  las  revisiones  cuyas  instrucciones  específicas  se  pueden  ver  en  el

siguiente enlace.

https://github.com/iesalonsodemadrigal/demeteria/blob/main/.github/copilot-

instructions.md

11 Periodo de trabajo con duración fija, normalmente de 1 a 4 semanas, durante el cual el equipo se centra en
completar un conjunto de tareas
12 Es una unidad relativa para estimar el esfuerzo de una tarea en Agile

En  la  Fig.3  se  puede  observar  también  de  forma  más  visual,  prosiguiendo  con  el

ejemplo de cultivos, la feature con todas sus tareas. De esta manera podemos observar de

forma visual todas las tareas al mismo tiempo y ver el progreso actual de la historia de usuario.

Por último, en la Fig.4 y la Fig.5 encontramos los sprints mencionados anteriormente

y un diagrama de Gantt realizado por nosotros respectivamente. Esto lo hicimos para permitir

una  visualización  completa  del  proyecto,  ya  que  los  sprints  dejaron  de  realizarse

semanalmente  en  el  aula.  En  el  diagrama  de  la  Fig.5  encontramos  la  cantidad  de  tickets

planteada y como se han ido resolviendo a lo largo del tiempo.

Fig.1: Captura de pantalla en la que se observa una Historia
de Usuario (Feature)

Fig.2:  Captura  de  pantalla  en  la  que  se  puede
observar una de las posibles tareas de la Fig.1.

Fig.3: Captura de pantalla en la que se puede ver todas las tareas planteadas para la historia de usuario de
cultivos.

Fig.4: Captura de pantalla de los sprints semanales que se hicieron en 3 ocasiones.

Fig.5: Cronograma en el que se observan las tareas que se han realizado, las de color rosa están etiquetadas
como features en GitHub mientras que las color azul son tareas que pertenecen a la primera feature que tengan
por encima.

4.1 Issues y PRs individuales

4.1.1 Recuperar la lista de sensores desde la API.

•

Issue:

o  Anexo 8

•  Pull request:

o  Anexo 9

•  Lo que se ha hecho es recuperar un Json desde la api proporcionada utilizando

la librería de retrofit y convertir los datos del Json en clases de Kotlin gracias a

otra librería llamada Gson, guardo esas clases en memoria para luego mostrar

los datos por la terminal.

4.1.2 Implementar una función de extensión ViewExt.

•

Issue:

o  Anexo 10

•  Pull request:

o  Anexo 12

•  Se han creado dos funciones de extensión de la clase View para poder hacer

visible u ocultar las vistas de forma sencilla.

4.1.3 Implementar Skeleton Layout con funciones de extensión.

•

Issue:

o  Anexo 11

•  Pull request:

o  Anexo 13

•  Se han creado funciones de extensión reutilizables que permiten que aparezca

el antiestrés Skeleton mientras la aplicación está cargando datos pero todavía

no hay nada para mostrar.

4.1.4 Crear la interfaz que muestra la información de los sensores

•

Issue:

o  Anexo 14

•  Pull request:

o  Anexo 16

•  Se ha creado un Fragment hijo dentro de DetailedCropFragment que muestra

un

listado  de  sensores  utilizando  Recycler  View,  Se  ha  creado  el

SensorByCropAdapter  que  le muestra  los datos de  cada sensor,  en  la  clase

TimeProvider se han creado más funciones para poder formatear la fecha en

el Adapter, además se refactorizó las funciones de extensión de Skeleton para

solucionar  un  error  que  había  con  los  métodos  antiguos,  por  lo  que  se  han

marcado  como  deprecados  manteniéndose  para  mantener  la  aplicación

funcionando.

4.1.5 Eliminar los métodos deprecados de Skeleton Layout

•

Issue:

o  Anexo 15

•  Se  va  a  eliminar  los  métodos  de  relacionados  con  Skeleton  que  estén

deprecados cuando se hayan sustituido por los nuevos en toda la aplicación.

4.1.6 Gestión de errores de sensores.

•

Issue:

o  Anexo 17

•  Pull request

o  Anexo 19

•  En  la  clase  SensorsByCropFragment  se  ha  añadido  ErrorAppFactory  para

gestionar  los  errores,  se  han  añadido  validaciones  y  un  nuevo  método  que

permite  mostrar  el  error.  En  la  clase  SensorDbLocalDataSource  se  ha

refactorizado la caché para que no sea global y sea individual para cada cultivo

por lo que el método que comprueba si la caché esta caducada ahora recibe el

id del cultivo.

4.1.7 Implementar la cache de los sensores en Room.

•

Issue:

o  Anexo 18

•  Pull request:

o  Anexo 20

•  Se ha sustituido la implementación de la caché en Shared Preferences por una

en Room.

4.1.8 Migrar la recuperación de datos desde la Api a Firebase

•

Issue

o  Anexo 21

•  Pull request:

o  Anexo 22

•  Se ha creado la estructura de los sensores en la base de datos de Firebase, se

ha creado la clase SensorFirebaseDto para mapear la estructura del JSON de

Firebase, la clase SensorFirebaseMapper que permite convertir las estructuras

de  datos  de  Firebase  a  las  estructuras  de  datos  que  utiliza  la  aplicación,

además de las clase necesarias para realizar una conexión exitosa con la base

de datos.

4.1.9 Configuración del ESP32 y el sensor DHT11

Se ha programado una función llamada wifiConection que permite que es ESP32 se

conecte a una red WiFi y de esta forma pueda realizar la conexión con firebase y enviar la

información.

También se han creado varias clases para la gestión de la fecha y hora:

•

isSummerTime

o  Comprueba si nos encontramos en el horario de verano o el de invierno.

•  setUpClock

o  Configura el reloj interno del ESP32 con la fecha y hora recuperada de

internet.

•  getStringDateTime

o  Devuelve la fecha y la hora en un formato concreto en String.

Se  han  programado  ciertas  clases  para  leer  los  sensores  y  enviar  la  información  a

firebase:

•

readSensorsData

o  Lee  la  información  de  los  sensores  y  lo  guarda  en  las  respectivas

variables y devuelve true si se ha leído correctamente o false si no se

ha podido leer los datos de los sensores.

•

firebaseTemperature y firebaseHumidity

o  Suben

la

información  del  sensor  de

temperatura  y  humedad

respectivamente.

•  uploadSensorsDataToFirebase

o  Si los datos del sensor se leen correctamente llama a las funciones que

suben la información a Firebase

5. Resultados

5.1 Visión técnica

5.1.1 Frontend

Se ha desarrollado una aplicación Android con el lenguaje de programación Kotlin y el

IDE13 Androdi Studio siguiendo la arquitectura MVVM debido a que es la arquitectura

que  se  ha  enseñado  en  clase,  en  concreto  yo  he  desarrollado  la  parte que  permite

mostrar la información recogida por sensores de un cultivo específico almacenada en

una base de datos.

5.1.2 Backend

La base de datos utilizada ha sido firebase con la siguiente estructura debido a que

tiene una gran compatibilidad con android, anterior a esta se utilizaba una api proporcionada

por el profesor que devolvía datos mockeados para de esta forma poder recuperar datos de

prueba.

5.1.3 Sensores

Se ha programado un microcontrolador ESP32 junto con un sensor de temperatura y humedad

DHT11. Se ha utilizado el IDE13 Visual Studio Code junto con el plugin de Platform.IO debido

a que me ha parecido el más cómodo además del framework de Arduino. El código es C++

utilizado se encuentra en los anexos 1, 2, 3 y 4.

También  se  han  utilizado  las  siguientes  librerías  aquí  listadas  junto  con  el  enlace  a  su

repositorio:

•  NTPClient

•  FirebaseArduino

•  DHT-sensor-library

13  Integrated Development Environment

5.2 Visión de usuario

Al abrir la aplicación se puede observar el listado de cultivos, si tocamos en uno en

concreto podremos ver dos listados, el de las alertas (el de arriba) y el de los sensores (el de

abajo y en el que nos centraremos) que contiene todos los sensores que pertenecen a ese

cultivo.  Cada  item  del  listado  representa  un  sensor  del  cual  se  puede  ver  la  siguiente

información:

•  Nombre del sensor.

•  Fecha del último valor.

•  Valor actual.

•  Valor máximo y mínimo (si este se encuentra registrado en la base de datos)

6. Conclusiones

     6.1 Problema encontrados y como se han resuelto.

El problema principal a sido que en un principio recuperábamos los datos de una API

proporcionada  por  el  profesor  que  tenía  los  datos  mockeados  por  lo  que  no  se  podían

modificar para que hubiese diferentes datos, por lo que tuvimos que cambiar el origen de los

datos a una base de datos de Firebase que creamos nosotros mismos.

6.2 Objetivos y posibles mejoras.

Se  han  cumplido  todos  los  objetivos  individuales,  pero  han  faltado  cosas  por

implementar de los objetivos generales del proyecto como la incorporación de gráficos para

ver la información de los sensores o incorporar una IA para que pueda hacer recomendaciones

a los usuarios.

6.3 Conocimientos relacionados con asignaturas del ciclo.

Se  ha  utilizado  Shared  Preferences,  Room  y  Firebase,  conocimientos  que  se  han

aprendido en el módulo de acceso a datos.

Como desarrollar interfaces en Android se ha aprendido en el módulo de Desarrollo de

interfaces.

6.4 Como se han resuelto las dudas.

Se  han  resuelto  con  la  guía  de  desarrolladores  de  Android,  buscando  en  Google  y

muchas veces en Stack Overflow, también se ha preguntado dudas a la IA Gemini que viene

integrada en el IDE Android Studio.

7. Bibliografía

Arduino (2026) ArduinoDocs https://docs.arduino.cc/programming/

Google (2026) Android developers https://developer.android.com/?hl=es-419

8. Anexos

INDICE ANEXOS

01_Fichero main.cpp

#include <Arduino.h>
#include "DHT.h"
#include "WiFi.h"
#include "secrets.h"
#include <Firebase.h>
#include "functions.h"

// put function declarations here:
#define DHTPIN GPIO_NUM_33
#define DHTTYPE DHT11
DHT dht(DHTPIN, DHTTYPE);
Firebase fb(REFERENCE_URL);

void setup() {
  // put your setup code here, to run once:
  Serial.begin(115200);

  pinMode(DHTPIN,INPUT);
  dht.begin();
  wifiConnection();
  setUpClock();
}

void loop() {
  //readAndPrintSensorData();
  delay(10000);
  uploadSensorDataToFirebase();
}

02_Fichero secrets.h

#define WIFI_SSID "SSID wifi"
#define WIFI_PASSWORD "contraseña wifi"
#define REFERENCE_URL "url firebase"

03_Fichero functions.cpp

#include <Arduino.h>
#include "DHT.h"

#include "WiFi.h"
#include "secrets.h"
#include <Firebase.h>
#include "functions.h"
#include <NTPClient.h>
#include <time.h>

extern DHT dht;
extern Firebase fb;

WiFiUDP ntpUDP;
NTPClient timeClient(ntpUDP, "pool.ntp.org");

const long utcOffsetInSecondsWinter = 3600; // CET
const long utcOffsetInSecondsSummer = 7200; // CEST

const String temperatureSensorPath = "crops/0/crop_sensors/0";
const String humiditySensorPath = "crops/0/crop_sensors/1";
const String temperatureValueType = "°C";
const String humidityValueType = "%";
const String temperatureSensorName = "Sensor de temperatura";
const String humiditySensorName = "Sensor de humedad";

float lastTemperature;
float lastHumidity;

//FECHA Y HORA
bool isSummerTime(int year, int month, int day, int weekday) {
    if (month < 3 || month > 10) return false;
    if (month > 3 && month < 10) return true;

    int lastSunday = (31 - (5 * year / 4 + 4) % 7);
    if (month == 3) return day > lastSunday || (day == lastSunday &&
timeClient.getHours() >= 2);

    lastSunday = (31 - (5 * year / 4 + 1) % 7);
    if (month == 10) return day < lastSunday || (day == lastSunday &&
timeClient.getHours() < 3);

    return false; // Should not happen
}
void setUpClock() {
    timeClient.begin();
    timeClient.update();
    time_t epochTime = timeClient.getEpochTime();
    struct tm *ptm = gmtime(&epochTime);

    int year = ptm->tm_year + 1900;
    int month = ptm->tm_mon + 1;

    int day = ptm->tm_mday;
    int weekday = ptm->tm_wday;

    if (isSummerTime(year, month, day, weekday)) {
        timeClient.setTimeOffset(utcOffsetInSecondsSummer);
    } else {
        timeClient.setTimeOffset(utcOffsetInSecondsWinter);
    }
    timeClient.update();
}
String getStringDateTime() {
    time_t epochTime = timeClient.getEpochTime();
    struct tm *ptm = gmtime(&epochTime);
    char buffer[21]; // yyyy-MM-ddTHH:mm:ssZ + null
    strftime(buffer, sizeof(buffer), "%Y-%m-%dT%H:%M:%SZ", ptm);
    String dateTime = String(buffer);
    memset(buffer, 0, sizeof(buffer));
    return dateTime;
}

//WIFI
void wifiConnection() {
  WiFi.mode(WIFI_STA);
  WiFi.begin(WIFI_SSID, WIFI_PASSWORD);
  Serial.print("Conectando a: ");
  Serial.println(WIFI_SSID);
  //Mostra que todavía no se ha conectado.
  while (WiFi.status() != WL_CONNECTED)
  {
    delay(200);
    Serial.print('.');
  }
  //Mostrar mensaje de éxito
  Serial.println();
  Serial.print("Conectado a: ");
  Serial.println(WiFi.SSID());
  Serial.print("IP address: ");
  Serial.println(WiFi.localIP());

}

//FIREBASE AND SENSORS
void uploadSensorDataToFirebase() {
  if (readSensorData())
  {
    String dateTime = getStringDateTime();
    firebaseTemperature(lastTemperature, dateTime);
    firebaseHumidity(lastHumidity, dateTime);
  }

}
void firebaseTemperature(float t, String dateTime) {
  String temperature = String(t);
  fb.setString(temperatureSensorPath + "/name", temperatureSensorName);
  fb.setString(temperatureSensorPath + "/value_type", temperatureValueType);
  fb.setString(temperatureSensorPath + "/date", dateTime);
  fb.setString(temperatureSensorPath + "/current", temperature);
}
void firebaseHumidity(float h, String dateTime) {
  String humidity = String(h);
  fb.setString(humiditySensorPath + "/name", humiditySensorName);
  fb.setString(humiditySensorPath + "/value_type", humidityValueType);
  fb.setString(humiditySensorPath + "/date", dateTime);
  fb.setString(humiditySensorPath + "/current", humidity);
}
bool readSensorData() {
  float humidity = dht.readHumidity();
  float temperature = dht.readTemperature();

  if (isnan(humidity) || isnan(temperature)) {
    Serial.println(F("Failed to read from DHT sensor!"));
    return false;
  }

  lastHumidity = humidity;
  lastTemperature = temperature;
  return true;
}

04_Fichero functions.h

#ifndef FUNCTIONS_H
#define FUNCTIONS_H

void wifiConnection();
bool readSensorData();
void setUpClock();
String getStringDateTime();
void firebaseTemperature(float temperature, String dateTime);
void firebaseHumidity(float humidity, String dateTime);
void uploadSensorDataToFirebase();

#endif

05_Captura estructura firebase

06_Captura del listado de cultivos.

07_Captura del listado de sensores.

08_Issue “Recover the list of sensors from the api”

09_Pull request “Recover a list of sensors by a crop id from api”

10_Issue “Implement ViewExt”

11_Issue “Implement Skeleton Layout”

12_Pull request “Implement a extension function to make visible or hide

the views”

13_Pull request “Skeleton layout implemented with extension functions”

14_Issue “Sensors data interface”

15_Issue “Eliminate old skeleton methods”

16_Pull request “Create interface for sensors data”

17_Issue “Sensor error management”

18_Issue “Sensor cache implemented in room”

19_Pull request “Implement sensor error management”

20_Pull request “Implement sensor cache on room”

21_Issue “Migrate sensors from api to firebase”

22_Pull request “Migrate sensors from api to firebase”

Permiso de divulgación del Trabajo Final de Grado

El  alumno  Iván  Familiar  Domínguez,  autor  del  trabajo  final  de  Ciclo  Formativo  de
Grado Superior titulado “DemeterIA Hidroponía bajo entorno IoT”, y tutorizado por el José

María Pérez Ramos, a través del acto de presentación de este documento de forma oficial

para su evaluación (registro en la plataforma de TFGS del Centro), manifiesta que PERMITE

la divulgación de este trabajo, una vez sea evaluado, y siempre con el consentimiento de su

tutor/a,  por  parte  del  centro  IES  Alonso  de  Madrigal  y  del  Departamento  de  Informática  y

Comunicaciones, para que pueda ser consultado y referenciado por cualquier persona que

así lo estime oportuno en un futuro.

Esta divulgación será realizada siempre que ambos, alumno y tutor/a del Trabajo Final

de  Grado  Superior,  den  su  aprobación.  Esta  hoja  supone  el  consentimiento  por  parte  del

alumno, mientras que el profesor, si así lo desea, lo hará constar en futuras reuniones, una

vez finalizado el proceso de evaluación del mismo.

Nota: Este documento será obligatorio presentarlo como última hoja del documento final del TFGS.

