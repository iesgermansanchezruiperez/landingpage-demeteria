DemeterIA

Hidroponía bajo entorno IoT

Trabajo Fin de Grado Superior
Ciclo Formativo en Desarrollo de Aplicaciones Multiplataforma
Mayo de 2026

Autor:
Aitor San José Romero
70.832.494S

Tutor:
José María Pérez Ramos

Departamento de Informática y Comunicaciones
IES Alonso de Madrigal

RESUMEN

En el sector agrícola moderno, especialmente en los sistemas de cultivo hidropónico,

el control riguroso de los parámetros ambientales y de la solución nutritiva, como el pH1 y la

EC2,  es  fundamental  para  garantizar  el  rendimiento  y  la  salud  de  las  plantas.  El  problema

surge cuando los agricultores no disponen de herramientas centralizadas y accesibles para

monitorizar el estado actual de sus cultivos en tiempo real. Esto, en hidroponía, puede derivar

en  la  pérdida  de  la  cosecha  por  valores  fuera  del  rango  aceptado  en  ese  cultivo  con  más

rapidez que en uno convencional.

Para abordar esta necesidad, el objetivo principal de este proyecto ha sido el desarrollo

de  una  aplicación  Android  a  la  que  hemos  llamado  DemeterIA.  Ésta  permite  gestionar  los

cultivos y monitorizarlos mediante alertas o bien ver los datos de sus sensores a tiempo real.

Para llevar a cabo el proyecto, se ha seguido una metodología agile, organizando el

trabajo  mediante  iteraciones.  Con  este  planteamiento  en  mente,  se  decidió  realizar  el

desarrollo  por  módulos  independientes  tales  como  información  de  los  cultivos  y  de  sus

respectivos  sensores,  alertas  y,  por  último,  una  pantalla  de  información  para  el  usuario,

implementando la modularidad en la aplicación para facilitar los cambios y permitir la mejora

continua durante el ciclo de vida del software.

A nivel tecnológico, la aplicación se ha desarrollado para el SO3 Android utilizando el

lenguaje de programación Kotlin. Se ha implementado una arquitectura de software robusta y

escalable  basada  en  Clean  Architecture,  separando  claramente  las  capas  de  presentación

con el patrón MVVM4, dominio y datos para cada módulo independiente. En estos cultivos;

alertas, sensores y ajustes.

1 Potencial de Hidrógeno
2 Conductividad Eléctrica
3 Sistema Operativo
4 Model – View - View Model

Para la infraestructura técnica se ha implementado lo siguiente: Koin para la inyección

de  dependencias,  Room  como  base  de  datos  local  para  garantizar  el  funcionamiento  sin

conexión y una arquitectura reactiva mediante el uso de corrutinas. En el apartado remoto, se

ha integrado Firebase Realtime Database para la sincronización de datos en la nube, también

se ha utilizado Retrofit para realizar conexiones con APIs5 a lo largo del proyecto.

Durante el desarrollo, uno de los desafíos técnicos más importantes fue la evolución

de  la  arquitectura  de  la  capa  de  red.  Inicialmente,  la  aplicación  consumía  los  datos  de  un

JSON mediante una API REST6 ofrecida por el profesor, lo que limitaba la inmediatez de la

información.  Para  solucionarlo,  se  decidió  refactorizar  la  capa  de  datos  migrando  la

infraestructura hacia Firebase Realtime Database. Esto permitió al equipo poder avanzar de

forma más rápida independientemente y aprendiendo nuevas tecnologías que nos enseñaron

a adaptarnos a distintas opciones viendo la utilidad real de una arquitectura modular como la

que se fue desarrollando durante todo el proceso.

Como conclusión, los objetivos propuestos han sido parcialmente cumplidos, logrando

implementar ciertas partes de la aplicación y otras de forma funcional pero no final. De cara

al  futuro  cabe  destacar  la  implementación  de  IA  para  ayudar  al  agricultor  en  la  toma  de

decisiones,  gráficas  de  los  sensores  y  una  mayor  configuración  y  personalización  para  las

alertas.

Palabras claves: Hidroponía, Monitorización, Android, Sensores

5 Application Programming Interface
6 Representational State Transfer

ABSTRACT

In the modern agricultural sector, especially in hydroponic cultivation systems, rigorous

control  of  environmental  and  nutrient  solution  parameters,  such  as  pH7  and  EC8,  is

fundamental  to  ensuring  plant  yield  and  health.  The  problem  arises  when  farmers  lack

centralized  and  accessible  tools  to  monitor  the  current  status  of  their  crops  in  real  time.  In

hydroponics, this can lead to crop loss due to values outside the acceptable range for a given

crop far more quickly than in conventional farming.

 To address this need, the main objective of this project has been the development of

an Android application we have called DemeterIA. It allows users to manage their crops and

monitor them through alerts, or view sensor data in real time.

To  carry  out  the  project,  an  agile  methodology  was  followed,  organizing  the  work

through  iterations.  With  this  approach  in  mind,  development  was  structured  around

independent  modules —  such  as  crop  information and  their  respective sensors,  alerts,  and

finally  a  user  information  screen  —  implementing  modularity  in  the  application  to  facilitate

changes and allow continuous improvement throughout the software lifecycle.

At the technological level, the application was developed for the Android OS9 using the

Kotlin  programming  language.  A  robust  and  scalable  software  architecture  based  on  Clean

Architecture  was  implemented,  clearly  separating  the  presentation  layer  using  the  MVVM

pattern,  the  domain  layer,  and  the  data  layer  for  each  independent  module:  crops,  alerts,

sensors, and settings.

The following technical infrastructure was implemented: Koin for dependency injection,

Room as a local database to ensure offline functionality, and a reactive architecture through

the  use  of  coroutines.  On  the  remote  side,  Firebase  was  integrated  for  cloud  data

synchronization, and Retrofit was used to connect with APIs throughout the project.

During development, one of the most significant technical challenges was the evolution

of the network layer architecture. Initially, the application consumed data from a JSON file via

a  REST  API  provided  by  the  lecturer,  which  limited  the  immediacy  of  the  information.  To

resolve  this,  the  team  decided  to  refactor  the  data  layer  by  migrating  the  infrastructure  to

7 Potential of Hydrogen
8 Electrical Conductivity
9 Operating System

Firebase  Realtime  Database.  This  allowed  the  team  to  progress  more  quickly  and

independently while learning recent technologies, teaching them to adapt to different options

and  demonstrating  the  real  value  of  a  modular  architecture  such  as  the  one  developed

throughout the entire process.

In conclusion, the proposed objectives have been partially met, with certain parts of the

application  implemented  fully  and  others  in  a  functional  but  not  final  state.  Looking  ahead,

notable future developments  include  the  implementation  of  AI  to  assist  farmers  in decision-

making, sensor data graphs, and greater configuration and customization options for alerts.

Keywords: Hydroponics, Monitoring, Android, Sensors.

AGRADECIMIENTOS

Me gustaría agradecer en este proyecto a mis amigos, profesores del I.E.S.
Alonso de Madrigal, familia y compañeros, en especial del equipo de
DemeterIA, por apoyarme en todo momento. También hacer una mención
especial a mi tutora del ciclo de grado medio, Noemi De La Varga Ávila.

Índice

Índice del TFGS

1. Introducción..................................................................................................................... 3

2. Problema .......................................................................................................................... 5

3. Objetivos .......................................................................................................................... 6

3.1 Objetivos Conjuntos ..................................................................................................... 6

3.1.1 Objetivos Cualitativos ........................................................................................... 6

3.1.2 Objetivos Cuantitativos ......................................................................................... 6

3.2 Objetivos Individuales .................................................................................................. 7

3.2.1 Objetivos Cualitativos ........................................................................................... 7

3.2.2 Objetivos Cuantitativos ......................................................................................... 7

4. Metodología ..................................................................................................................... 8

4.1 Metodología Técnica.................................................................................................... 8

4.2

Desarrollo de la metodología ................................................................................11

5.  Resultados ..................................................................................................................21

5.1 Visión técnica .............................................................................................................21

5.1.1 Aplicación ............................................................................................................21

5.1.2 Infraestructura......................................................................................................22

5.1.3 Ecosistema final ...................................................................................................24

5.2

Visión de usuario ..................................................................................................25

6. Conclusiones ..................................................................................................................31

7. Bibliografía .....................................................................................................................33

8. Anexos ............................................................................................................................35

01.- Anexo I. Instrucciones de Copilot...............................................................................35

· I ·

1. Introducción

DemeterIA,  nuestra  aplicación  Android  diseñada  para  la  gestión  de  cultivos

hidropónicos basados en IoT10, surge con la intención de facilitar la vida al agricultor. Este tipo

de cultivo es una mejora respecto al tradicional debido a que permite reducir el gasto de agua

y mejorar la eficiencia de estos en cuanto a la periodicidad de las cosechas, pero la hidroponía

tiene una debilidad: su sensibilidad a los cambios es mucho mayor que en otros tipos de cultivo

y necesitan estar en su ventana de trabajo ya que se pueden producir cambios bruscos en los

niveles óptimos que sin la debida supervisión, pueden resultar fatales.

En consecuencia, decidimos implementar una aplicación que permitiese gestionar las

plantaciones de una forma más sencilla. El objetivo era lograr la visualización de los cultivos

del usuario y los datos importantes referentes a estos. De esta forma se conseguiría optimizar

el proceso de producción mediante el uso de avanzadas tecnologías.

Profundizando un poco más en el motivo que nos llevó a seleccionar la hidroponía y

su sistema de gestión como tema principal, contamos con los siguientes puntos a destacar:

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

10 Internet of Things

•  Existe  un  mayor  control  por  lo  que  se  reduce  la  exposición  a  plagas  y

enfermedades, reduciendo así la necesidad de pesticidas y herbicidas.

Por todo ello, se ha decidido realizar una aplicación orientada a este sector, ya que

nuestros huertos son una parte fundamental de nuestra salud y permite que los agricultores

tengan una forma más sencilla, eficiente y sostenible de realizar su trabajo nos parecía algo

esencial para el futuro.

2. Problema

La agricultura de la era moderna se enfrenta a un desafío cada vez mayor de escasez

de  recursos  y  de  producción  más  sostenibles.  Pero,  la  gestión  de  sistemas  hidropónicos

presenta barreras críticas:

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

Si bien actualmente existen soluciones para gestión de invernaderos, éstas suelen ser

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

La motivación tras DemeterIA nace de un interés en la conexión entre dispositivos IoT

y aplicaciones móviles, cubriendo también de esta manera la relevancia de la agricultura 4.0

además  de  querer fomentar  la  sostenibilidad  mediante soluciones como la hidroponía,  que

consume  hasta  un  90% menos  de  agua  respecto  a la  agricultura tradicional,  haciendo  que

ésta sea más sencilla y llevadera para nuestros agricultores.

3. Objetivos

3.1 Objetivos Conjuntos

     Los  objetivos  conjuntos  impuestos  en  DemeterIA  se  dividen  en  cualitativos  y

cuantitativos.

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

     Al igual que en la fase grupal, mis objetivos individuales en DemeterIA se han definido bajo

criterios tanto cualitativos como cuantitativos. Durante la planificación, se establecieron metas

personales que se consideraron realistas en el momento. A continuación, se detallan aquellos

objetivos que no han sido abordados anteriormente para evitar redundancias.

3.2.1 Objetivos Cualitativos

•  Adquirir  las  competencias  prácticas  en  lo  respectivo  a  aplicaciones  móviles

desde el punto de vista profesional.

•  Comprender  la  integración  de  librerías  de  componentes  para  asegurar  al

usuario una interfaz coherente y funcional.

•  Fomentar una cultura de equipo orientada a la motivación y cumplimiento de

metas propuestas.

3.2.2 Objetivos Cuantitativos

•

Implementar soluciones directas a los problemas identificados por el usuario.

•  Garantizar  un  resultado  final  con  alto  nivel  de  detalle  técnico,  siempre

pensando en mejorar la satisfacción del usuario.

•  Desarrollar  una  búsqueda  eficiente  por  nombre  de  cultivo  para  permitir  un

acceso rápido a la información necesaria para el usuario en dicho momento.

•  Desarrollar el sistema integral de gestión de cultivos: listado, creación, edición,

eliminación y exportación de datos.

4. Metodología

4.1 Metodología Técnica

 La metodología que se ha usado ha sido Agile profundizando en el uso de Scrum, con

sprints11 semanales de máximo 5 tiques. También hemos llevado un seguimiento haciendo

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

había abierto la PR, y un único revisor final que, tras su ok, se podía llevar a cabo un merge

con main. De esta forma se cerraba también la issue asignada.

A continuación, se demuestra cómo se han dispuesto los tiques, los cuales siguen este

flujo: Historia de usuario (Feature completa) > Tarea (Una parte de la funcionalidad grande).

Para  explicarlo  de mejor  manera se dispone  el  siguiente ejemplo;  Un usuario quiere  poder

consultar sus cultivos (Feature), una tarea sería consultar el listado de todos sus cultivos, otra

tarea podría ser  ver  sus  detalles,  etc.…  Podemos  ver  esto reflejado en  la  Fig.1  y  Fig.2.  El

objetivo de ambas (Historia de Usuario y Tarea) debía ser explicado de forma detallada en el

repositorio para que fuese fácil de entender el objetivo y el mismo quedase claro.

Para realizar las historias de usuario y las tareas nuestro profesor, José María Peréz

Ramos, nos puso a disposición unas plantillas para que todos siguiésemos un mismo formato

y orden a la hora de crear nuevas funcionalidades para la aplicación. También se puso unas

instrucciones a Copilot para corregir las PRs como se puede ver en el anexo I.

11 Periodo de trabajo con duración fija, normalmente de 1 a 4 semanas, durante el cual el equipo se centra en
completar un conjunto de tareas
12 Es una unidad relativa para estimar el esfuerzo de una tarea en Agile

En  la  Fig.3  se  puede  observar  también  de  forma  más  visual,  prosiguiendo  con  el

ejemplo de cultivos, la feature con todas sus tareas. De esta manera podemos observar de

forma visual todas las tareas al mismo tiempo y ver el progreso actual de la historia de usuario.

Por último, en la Fig.4 y la Fig.5 encontramos los sprints mencionados anteriormente

y un cronograma realizado por nosotros respectivamente. Esto lo hicimos para permitir una

visualización completa del proyecto, ya que los sprints dejaron de realizarse semanalmente.

En el diagrama de la Fig.5 encontramos la cantidad de tiques planteada y como se han ido

resolviendo a lo largo del tiempo.

Fig.1: Captura de pantalla en la que se observa una Historia
de Usuario (Feature)

Fig.2:  Captura  de  pantalla  en  la  que  se  puede
observar una de las posibles tareas de la Fig.1.

Fig.3: Captura de pantalla en la que se puede ver todas las tareas planteadas para la historia de usuario de
cultivos.

Fig.4: Captura de pantalla de los sprints semanales que se hicieron en 3 ocasiones.

Fig.5: Cronograma en el que se observan las tareas que se han realizado, las de color rosa están etiquetadas como
features en GitHub mientras que el color azul son tareas que pertenecen a la primera feature que tengan por encima.

4.2 Desarrollo de la metodología

Desde una perspectiva técnica, el proyecto reside en la integración de una arquitectura

robusta  mediante  las  buenas  prácticas  de  Clean  Architecture  y  un  producto  escalable.  A

continuación, se detalla de forma técnica el ecosistema tecnológico con el que se realizó el

desarrollo.

La utilización de módulos independientes en la aplicación debido a que seguimos las

buenas  prácticas  de  Clean  Architecture  me  permitió  hacer  una  parte  de  cultivos

totalmente funcional en la aplicación de DemeterIA.

Antes de hablar sobre una funcionalidad específica me gustaría comentar que para la

realización de todo el proyecto fue hecho con DI13 utilizando la librería de Koin, esto aportó al

proyecto una reducción al acoplamiento. La utilización de esta librería fue cada vez que se

creaba una nueva clase para permitir la comunicación con el proyecto.

Otra cosa que se hizo a lo largo de todo el proyecto fue la utilización del fichero de

Strings, para permitir que si en un futuro la aplicación quisiese implementar más idiomas se

pudiese hacerse de forma sencilla y escalable.

También quiero recalcar que el orden seleccionado para mostrar estas funcionalidades

es  el  cronológico  referente  a  los  cultivos  y  una  vez  dispuestas  esas  funcionalidades  se

añadirán las de core que fueron realizadas para la totalidad de la aplicación.

Otro apartado a comentar es que la gran mayoría de las vistas fueron realizadas con

XML y siguiendo las recomendaciones de Material 3 – librería para recomendada por Android

para las interfaces tanto de XML como de Jetpack Compose. También agradecer a José María

por las plantillas para las vistas de error utilizadas a lo largo del proyecto.

La primera funcionalidad que se desarrolló fue un listado de cultivos, para ello tuve que

implementar la librería de Retrofit con la cuál accedí a una API, ofrecida por nuestro profesor

José  María  Peréz  Ramos,  en  la  que  tenía  el  listado  de  todos  los  cultivos.  Una  vez  se

recuperaron todos los cultivos de la API lo siguiente era pintarlos y para esto último tuve que

realizar  una  clase  adapter  que  permitía  la  realización  de  este  tipo  de  listados  con

RecyclerView.  La  estructura  completa  de  este  apartado  constaba  de  un  use  case,  un

fragment, un view model, un repository (tanto una interfaz como una implementación de dicha

interfaz) y por último la parte de la API con Retrofit. También se tuvo que añadir otra librería

para la carga de imágenes, para ello utilizamos Coil, una dependencia para esta tarea. Por

último,

también  se  añadió  una  primera  versión  para  una  cache

local  utilizando

sharedPreferences. Para esta parte y todas las funcionalidades futuras se utilizaron corrutinas

para evitar trabajar en el hilo principal de Android ya que esto es una mala práctica.  Una vez

se desarrolló la funcionalidad, se realizó un test unitario para comprobar que el use case de

obtener todos los cultivos funcionaba de la forma esperada. En la Fig.6 podemos observar la

PR de este listado de cultivos. Como se puede observar en la Fig.6, esta PR fue implementada

en la aplicación.

13 Inyección de dependencias.

Fig.6: Captura de la issue abierta sobre lo que
el usuario quería, en este caso visualizar un
listado de la siguiente manera.

Fig.7: Captura de pantalla de la PR sobre el listado de cultivos
en la que podemos observar la descripción que encontraron los
compañeros  a  la  hora  de  corregir  para  entender  el  proceso
seguido.

La siguiente funcionalidad que se aplicó en la aplicación fue la creación de cultivos del

usuario. En este punto se dieron varias cosas que no se dieron de forma directa en el temario,

como es la creación de un formulario, pero con los contenidos ya aprendidos fue relativamente

sencillo. También agradecer a José María por la corrección aportada para este apartado.

Lo primero en esta funcionalidad fue añadir un Extended Float Action Button (EFAB)

en  la  pantalla  del  listado  para  poder  acceder  al  fragmento  del  formulario  de  creación  del

cultivo. Después se implementó el nuevo fragmento y la navegación en la clase nav_graph.

Una  vez  estaba  la  navegación  implementada  se  añadieron  los  campos  para  el

formulario, siendo su mayoría editText, pero destacando también el uso de datePicker para la

obtención de la fecha. Tras tener todos los campos dispuestos se implementó un nuevo view

model, use case, repository y la parte de la API (con un método Post, para envitar los datos a

la API) junto con un mapper para transformar la clase que yo mandaba en Kotlin al formato

que tenía en la API.

En las próximas funcionalidades se dispondrá únicamente de las capturas sobre las

PRs ya que en todas se termina resolviendo el problema propuesto por las issues.

Después  de  esto,  se  comprobaron  los  errores  que  fueron  surgiendo  en  la

implementación y se simplificaron ciertos métodos con sugerencias de los revisores de la PR,

permitiendo un acabado mucho más profesional y robusto.

En la Fig.8 podemos observar la PR para contextualizar a los compañeros revisores.

Fig.8: Captura de pantalla en la que nos encontramos la PR escrita para esta funcionalidad con los detalles.

Tras estas dos funcionalidades descritas con anterioridad se decidió dar el paso a la

vista detallada para estos cultivos listados y creados. En esta pantalla debía contar con que

más adelante habría más funcionalidades (Como pueden ser la edición y la eliminación de

cultivos de las que hablaremos más adelante) y por ello se debía diseñar correctamente la

pantalla para permitir escalabilidad (Esta fue demostrada en la última PR que se comentará,

en la cual se añadió una nueva funcionalidad en esta pantalla).

Para  hacer  esta  funcionalidad  lo  primero  fue  documentarse  sobre  cómo  poner  un

método onClick a cada elemento del recyclerView. Para probar que este método funcionaba

se  creó  un  fragmento  blanco  al  que  siempre  redirigía  el  método  onClick.  A  ese  fragmento

blanco le fui dando forma añadiéndole un small top app bar para las acciones de esta vista

detallada del cultivo. También se añadieron un EFAB y 2 contenedores para incluir fragmentos

sobre los eventos de un cultivo y sobre los sensores de ese cultivo.

Después de diseñar la pantalla agregué un modelo para los cultivos en la pantalla de

detalles y procedí a crear la estructura básica para cada nueva funcionalidad creada de cero

(use case y método en repository. Al ser una nueva pantalla también se añadieron un fragment

que ya ha sido mencionado y un viewModel.).

Una vez hecho esto, cada vez que se hace el onClick se pasa el id del cultivo que se

está seleccionando para acceder y obtener los datos de ese cultivo de la API. En el momento

de  la  implementación  esto  no  estaba  disponible  asique  se  añadió  un  dato  mock,  pero

actualmente todo funciona de la forma descrita anteriormente.

Por último, en la Fig.9 observamos la PR realizada para este objetivo. También volver

a agradecer a los revisores de esta PR por el feedback recibido de su parte.

Fig.9: Captura de pantalla en la que se puede observar la descripción ofrecida a los revisores sobre el trabajo
desarrollado para esta funcionalidad y el orden que fue seguido.

Una vez tenía la pantalla de detalles empecé a implementar las funcionalidades del

menú superior empezando por la eliminación. Para obtener el resultado obtenido se crearon

el caso de uso pertinente y los métodos necesarios en la capa de datos. De esta manera al

pulsar el icono de la papelera se eliminaba el cultivo. Pero, se me ocurrió que para darle un

acabado más profesional convenia poner un alertDialogue con el que notificar al usuario una

confirmación. En caso de confirmar se mostraba otro alertDialogue en el que se comunicaba

el éxito de la eliminación del cultivo y al aceptar ese último mensaje se devolvía al usuario a

la pantalla del listado refrescada (haciendo que la caché fuese actualizada también para evitar

dar datos desactualizados al usuario que pudiesen ser confusos). También quiero comentar

que, si en el primer alertDialogue no se confirmaba, sino que se daba al botón de cancelar,

entonces no ocurría ningún tipo de acción.

El único inconveniente que hubo en el desarrollo de esta funcionalidad fue que la API

no  permitía  la  eliminación  de  los  datos,  pero  la  lógica,  que  era  lo  importante,  fue  aplicada

correctamente utilizando el método delete.

En la Fig.10 observamos la PR que fue adjuntada en GitHub respecto a la issue

pertinente.

Fig.10: Captura de pantalla de la PR sobre eliminación de cultivos.

Antes de proseguir con la creación de funcionalidades recordé que es tan importante

una nueva funcionalidad como un código bien escrito y escalable, por ello decidí dar un pasito

atrás y refactorizar el código hecho hasta la fecha con los nuevos contenidos vistos en clase,

permitiendo  así  que  el  código  antiguo  siguiese  las  buenas  prácticas  que  vimos  en  el  aula

algunos meses después.

En  esta  funcionalidad  me  dediqué  a  actualizar  los  XML,  reestructurar  las  clases

relacionadas con los cultivos, solucionar algunos bugs que se vieron más adelante, sustituir

el sistema de caché antiguo con sharedPreferences por el uso de Room para tener una caché

como se recomienda.

Por último, en esta pequeña funcionalidad también se actualizó el naming de ciertas

partes del código y se eliminaron recursos que otros compañeros confundieron de lugar.

En  la  Fig.11  dispuesta  a  continuación  nos  encontramos  todo  lo  comentado  con

anterioridad.

Fig.11: Captura de pantalla de la PR de actualización de código viejo.

La  siguiente  funcionalidad  tampoco  era  un  avance  en  cuanto  al  usuario,  sino  sobre

escalabilidad de la aplicación. Como se puede ir notando, solo se mencionó la creación del

caso de uso en la primera funcionalidad, pero en el resto no se realizó, esto fue porque se

creó un tique específico para esto. Realmente esta funcionalidad fue realizada casi al final del

proyecto, pero el tique se creó antes, por ello la comentaré antes del resto de funcionalidades,

aunque haya sido prácticamente la última en realizarse.

Lo primero que hice fueron los tests de caso de uso restantes, los cuales eran todos

bastantes  similares  entre  sí  ya  que  siempre  era  probar  las  mismas  cosas  siguiendo  la

estructura de given, when y then.

Luego se crearon tests sobre los viewModels, para los cuales primero tuve que crear

una serie de reglas. En este punto me apoyé en la IA para aprender a hacer este tipo de test

unitarios pues es algo que no se había dado en el aula como tal, pero sí que se comentaba

que era buena práctica realizar.

Por último, se hicieron tests a la capa de data, incluyendo los mappers, para comprobar

que todo se comportaba como esperaba. (Los mappers no cambiaban los datos del modelo

original, la caché funcionaba correctamente, etc.).

Como se puede ver en la Fig.12 no me extendí especialmente en la descripción de

esta  PR  ya  que  de  haber  contado  todos  los  tests  hechos  hubiese  sido  muy  extenso  y

consideraba que era mejor ver el código en este apartado.

Fig.12: Captura de pantalla en la que encontramos la PR con todos los tests en una captura adjunta ejecutados
al mismo tiempo demostrando que pasan las pruebas.

Después de esta funcionalidad que no aportan valor directo al usuario se comenzó el

desarrollo de la funcionalidad de edición de cultivos.

A  continuación,  para  no  hacer  tedioso  y  repetitivo  el  documento  se  mostrarán

simplemente las funcionalidades que contengan contenido no visto en el aula.

Una de estas funcionalidades fue la barra de búsqueda en la pantalla del listado de

cultivos, permitiendo que el usuario pueda filtrar en todo momento los cultivos que le interesa

visualizar. De esta manera mejora la eficacia en el listado de la aplicación. Para integrarla se

implementó el componente  SearchBar  creando un  nuevo  archivo  XML para permitir  que el

sistema  sea  escalable.  Una  vez  se  diseñó  la  barra  de  búsqueda  se  implementó,  en  el

fragmento del listado y en el view model del mismo, la lógica de la barra de búsqueda para

poder filtrar por nombre del cultivo.

En la Fig.13 se ve la PR que se realizó para esta tarea.

Fig.13: Captura de pantalla en la que se muestra la PR que se
realizó para implementar la barra de búsqueda.

Por último, la funcionalidad final que quiero comentar es la exportación de detalles de

cultivos, ya que me parece que es otra funcionalidad que no entra en los estándares habituales

de  cualquier  aplicación  y  solo  se  ve  en  algunas  más  específicas,  además,  en  esta

funcionalidad se utilizaron vistas con Jetpack Compose, por ello creo que es algo interesante

a mencionar.

Respecto  a  la  exportación  lo  primero  que  se  hizo  fue  crear  el  componente  de

bottomSheet  utilizando  Jetpack  Compose.  Una  vez  hecho  esto  se  implementaron  dos

componentes de acción (Denominados así por mi) en los cuales introduje el PDF y el CSV.

Ya  teniendo  toda  la  interfaz  se  diseñó  la  lógica  de  exportación,  primeramente,  a  PDF  y

después a CSV. Por último, se implementó con Jetpack Compose un snackbar que aparece

con  el  mensaje  para  abrir  el  documento  una vez  se ha  generado  el  exportado,  esta última

parte fue un poco compleja ya que tuve que tratar los directorios y forma de creación del PDF

en función de la versión de la SDK de Android.

En la Fig.14 podemos observar cómo se trató esta pull request en Github.

Fig.14: Captura de pantalla en la que puede observarse la PR realizada
para la funcionalidad de exportar cultivos

5.  Resultados

En  el  siguiente  apartado  se  comentarán  detalladamente  los  resultados  obtenidos

durante  el  proyecto,  teniendo  en  cuenta  el  punto  de  vista  técnico  del  desarrollo  y  el  de  la

experiencia del usuario final. El objetivo es proporcionar una visión completa que permita al

lector valorar la complejidad y el alcance de las soluciones implementadas en la aplicación.

La historia de usuario asignada consistía en el desarrollo de la gestión básica de los

cultivos  en  la  aplicación.  Este  bloque  se  centraba  en  la  gestión  individual  de  los  mismos

exponiendo sus características. Siguiendo las especificaciones del repositorio de GitHub se

debía  implementar  un  listado  de  cultivos,  una  creación  de  los  mismos  y  una  pantalla  de

detalles en la que crear editar o eliminar el cultivo junto con eventos del mismo e información

proveniente de los sensores.

5.1 Visión técnica

En este apartado se expone como se ha formado el sistema tecnológico de cultivos en

DemeterIA. El objetivo es mostrar como he integrado las diferentes tecnologías para obtener

una solución escalable y robusta.

5.1.1 Aplicación

La aplicación se ha desarrollado siguiendo los principios de Clean Architecture, lo que

permite que el código sea independiente y fácilmente testeable. La estructura final se divide

en 3 capas:

•  Presentación:  Implementando  el  patrón  MVVM  para  gestionar  la  interfaz  del

usuario  siguiendo  las  buenas  prácticas  de  Android.  Las  vistas  fueron

construidas principalmente con XML y componentes de Material 3, integrando

también una parte con Jetpack Compose en ciertas partes de la aplicación.

•  Dominio: Contiene la lógica de negocio, principalmente mediante Casos de Uso

que actúan como un puente entre la interfaz y los datos. En esta capa también

se encuentran las clases utilizadas en el resto de la aplicación (Como puede

ser  la  de  cultivos  o  cultivos  detallados).  Y  por  último  en  esta  capa  también

acoplaba la interfaz del repositorio y el manejo de errores propio de DemeterIA.

•  Datos:  En  esta  capa  se  centraliza  la  gestión  de  la  información  siguiendo  el

patrón repository, de esta forma se coordina la obtención de datos de fuentes

locales y remotas, como pueden ser las APIs, bases de datos, etc.

Esta estructura puede visualizarse en la Fig.15

Fig.15:  Captura  en  la  cual  podemos  observar  la  estructura  de  las  3  capas  mencionadas
anteriormente.

5.1.2 Infraestructura

El sistema se apoya en una infraestructura que garantiza la disponibilidad de los datos

y el control en tiempo real.

•  El núcleo de la implementación es la propia aplicación Android desarrollada con

Kotlin. Utilizando corrutinas para gestionar tareas asíncronas, evitando bloquear el

hilo principal y asegurando la fluidez.

•  La  comunicación  con  servicios  externos  se  realizaba  a  través  de  Retrofit  para

permitir comunicarse con una API REST de forma eficiente.

•  Debido a la necesidad de sustituir la API REST se implementó Firebase Realtime

Database para sincronizar los datos del usuario en la nube. Esto permite que la

información  de  los  cultivos  esté  disponible  en  tiempo  real  desde  cualquier

dispositivo. En la Fig.16 podemos observar el esquema utilizado.

Fig.16: Captura en la que podemos ver el esquema utilizado para los cultivos en Firebase Realtime
Database

•  Para garantizar poder ver los cultivos en todo momento se implementó una cache

local, inicialmente con sharedPreferences y luego de una forma más profesional

con Room. Gracias a esto se permite al agricultor consultar sus cultivos incluso sin

conexión.

5.1.3 Ecosistema final

La parte técnica se apoya en las siguientes herramientas:

•

Inyección  de  dependencias  mediante  Koin  para  reducir  el  acoplamiento,

permitiendo así la escalabilidad de cara a nuevas funcionalidades de cultivos u

otra parte de la aplicación.

•  La implementación de Coil para visualizar imágenes y Material Builder para una

cohesión visual en todo el sistema.

•  Mediante los test unitarios se  permite verificar que el comportamiento de los

casos de uso y viewModels entre otros son correctos.

5.2 Visión de usuario

A continuación, en las siguientes figuras se dispone de las pantallas que contiene la

aplicación y la forma en las que el usuario las ve. Todo actualizado a la última versión de la

aplicación.

Fig.17: Captura de la pantalla inicial de cultivos, con una barra de búsqueda, el listado y el botón de creación
de cultivos.

Fig.18: Captura de pantalla del funcionamiento de barra de búsqueda por nombre de cultivo

Fig.19:  Captura  del  formulario
de cultivo vacío

Fig.20:  Captura  del  formulario
con los datos vacíos

Fig.21:  Captura  de  un  cultivo  guardado
con éxito en la aplicación

Fig.22: Captura de la vista
detalla  del  cultivo  en  la
también
que  aparecen
todos
los  eventos  del
cultivo.

Fig.23: Captura en la que se ve la
funcionalidad de edición de la barra
superior.

Fig.24: Captura en la que se ve la
funcionalidad de  exportación de la
barra superior. En la Fig.26 y Fig.27
se  ve  en  funcionamiento  una  de
estas opciones.

Fig.25: Captura en la que se ve la
funcionalidad  de  eliminación  de  la
barra superior. En la Fig.28 y Fig.29
se ven las diferentes acciones.

Fig.26: Captura al dar a “Abrir” en la snackbar

Fig.27: Captura del resultado final de la exportación a
PDF.

Fig.28:  Captura  al  confirmar  la  eliminación.  Tras  esto nos
devuelve a la pantalla del listado.

Fig.29: Captura del resultado al dar a “Cancelar”.
Como se puede ver no ocurre nada.

Fig.30: Captura de la edición y eliminación de eventos

Fig.31: Captura de pantalla en la que aparece el formulario
de  creación  de  un  evento.  Al  no  meter  los  datos
correctamente  observamos  un  resultado  similar  al  de  la
Fig.20  y  al  crearlo  un  resultado  similar  también  al  de  la
Fig.21.  En  ambos  casos  mencionados  anteriormente  se
sustituyen las palabras de cultivo por evento.

Fig.32:  En  la  captura  aparece  el  resultado  al  dar  al
botón de editar que aparece al deslizar a la derecha.

Fig.33:  En  la  captura  aparece  el  resultado  al  dar  al
botón de eliminar que aparece al deslizar a la derecha.
Las acciones con la ventana de evento son las mismas
que las de la Fig.28 y Fig.29.

Fig.34:  Una  captura  en  la  que  se  ve  como  se
visualiza un evento que tiene una descripción que
ocupa más de 1 línea al clicar en él.

Fig.35: Captura en la que se ve la pantalla cuando
no hay ningún evento añadido todavía.

Como se ha podido apreciar en las capturas de la Fig.16 a la Fig.35 las funcionalidades

de cara al usuario son bastante simplificadas permitiendo que sea accesible a la mayor parte

posible.  Quiero  comentar  también  que  la  Fig.24  y  Fig.26  fueron  realizadas  con  Jetpack

Compose en lugar del XML tradicional para demostrar el dominio de ambos tipos de interfaces.

En los diseños podemos observar que se utiliza de forma consistente un mismo patrón

de colores realizado con Material Builder permitiendo así una cohesión durante todo el uso de

la aplicación. Otro apartado a tratar es el uso concurrente que se da en la top bar para que el

usuario  pueda verlas  en  todo  momento,  como  bien  puede  ser  la  opción  de  guardar  de  los

formularios dispuesta en todo momento, la barra de búsqueda del listado o la de edición en

los detalles de un cultivo, esto permite que el usuario sea capaz de realizar las acciones clave

en todo momento sin tener que estar volviendo al inicio de la pantalla.

6. Conclusiones

Tras  finalizar  el  desarrollo  de  DemeterIA,  se  presenta  una  valoración  del  proyecto,

analizando los retos superados, el grado de cumplimiento de objetivos y la proyección de cara

al futuro. Además, se incluye un pequeño punto de vista personal sobre lo que ha significado

para mi este proyecto.

Fueron  surgiendo  diferentes  retos  técnicos  a  los  que  tuve  que  enfrentarme  y

adaptarme:

•  El primer punto que tuvo que evolucionar fue la capa de red, ya que inicialmente

se  realizaba  mediante  una  API  REST,  lo  que  limitaba  la  actualización  de  la

información. Esto se solucionó refactorizando la capa de datos y migrando a

Firebase Realtime Database, logrando una sincronización en tiempo real con

los datos.

•  La transición de un sistema básico con fichero básico de SharedPreferences a

una  base  de  datos  con  Room  permitió  garantizar  la  integridad  y  el

funcionamiento sin conexión de ciertos datos, lo que mejora la aplicación a nivel

profesional puesto que SharedPreferences no está pensado para realizar una

cache local.

•  Mediante  el  uso  de  las  corrutinas  se  evitan  los  bloqueos  al  hilo  principal  de

Android, asegurando que la aplicación no se bloquee y el usuario no sienta que

la aplicación se crashea.

Se  han  cumplido  al  100%  los  objetivos  establecidos  para  el  módulo  de  Gestión  de

Cultivos.  La  modularidad  empleada  garantiza  que  la  integración  con  los  sensores

(desarrollados  por  otros  miembros  del  equipo)  sea  trivial,  cumpliendo  así  con  mi

responsabilidad técnica dentro del equipo.

Con el proyecto he conseguido ampliar y consolidar nuevos conocimientos adquiridos

en  DAM.  También  se  ha  explotado  el  potencial  de  la  IA  para  la  explicación  de  nuevos

conceptos, la corrección de código y el desarrollo de pruebas unitarias. Pero tampoco se ha

descuidado  el  uso  de  la  documentación  oficial,  en  especial  la  de  Android  y  la  de  Material

Design, ya que sus recomendaciones y guías de uso fueron muy útiles en todo el proyecto.

De cara al futuro, creo que DemeterIA es escalable, lo que permitirá integrar la IA para

realizar  recomendaciones  que  ayuden  al  agricultor,  la  incorporación  de  gráficas  para

monitorizar  los  sensores  y  la  implementación  de  un  log  in.  También,  estaría  bien  una

ampliación  en  cuanto  a  la  configuración  de  alertas,  notificaciones  y  ajustes.  Por  otro  lado,

respecto a cultivos, únicamente modificaría la pantalla de detalles utilizando Jetpack Compose

y  añadiría algo  más  concreto  que  un texto en  cuanto  a  la ubicación,  añadiendo  la SDK  de

Google Maps para permitir guardar de forma más específica la ubicación del cultivo y poder

añadir nuevas funcionalidades.

Como conclusión, me gustaría decir que DemeterIA me ha representado un desafío

técnico  gratificante  que  ha  permitido  materializar  una  idea  en  una  solución  para  personas

reales. Con este proyecto no solo he aplicado las competencias técnicas aprendidas, sino que

se  han  adquirido  conocimientos  de  otros  ámbitos  como  la  hidroponía.  También  recalcar  la

importancia del trabajo en equipo y la buena comunicación del mismo para permitir el mejor

trabajo posible.

Finalmente, la entrega de este proyecto supone el cierre de una etapa fundamental en

mi formación técnica y personal dentro de la rama de Ciclos Formativos. DemeterIA no será

solo un resultado académico, sino el resultado final de mi evolución dentro de esta familia de

educación y marcando el final de este capítulo y el comienzo del siguiente.

7. Bibliografía

Android Developer. (2026). Android Mobile App Developer Tools - Android Developers.

https://developer.android.com/?hl=es-419

Material Design. (2026). Material Design. https://m3.material.io/

Robert C. Martin. (2008). Clean Code: A Handbook of Agile Software Craftsmanship.

Pearson

FAO  (Organización  de  las  Naciones  Unidas  para  la  Alimentación  y  la  Agricultura).

(2003). La Huerta Hidropónica Popular. Oficina Regional de la FAO para América Latina y el

Caribe. http://www.fao.org/3/ah501s/ah501s.pdf

INTAGRI  (Instituto  para  la  Innovación  Tecnológica  en  Agricultura).  (2017).  La

Hidroponía: Cultivos sin Suelo. Serie Horticultura Protegida. Núm. 29. Artículos Técnicos de

INTAGRI.  México.

https://www.intagri.com/articulos/horticultura-protegida/la-hidroponia-

cultivos-sin-suelo

Hydro Environment. (2024). ¿Qué es el sistema hidropónico NFT? InovaciónAgrícola

en un click. https://hydroenv.com.mx/id101/

Dr. Calderón Laboratorios. Historia de la Hidroponia y de la Nutrición Vegetal. Bogotá

D.C., Colombia. http://www.drcalderonlabs.com/Publicaciones/Historia_de_la_Hidroponia/

INVEUROP.

(2025).  Cultivo  hidropónico:

sus

ventajas

y

rentabilidad.

https://www.inveurop.com/cultivo-hidroponico/

Iberdrola.  (2021).  Hidroponía:  Qué  es  y  Ventajas  de  este  Sistema  de  Cultivo.

https://www.iberdrola.com/sostenibilidad/que-es-hidroponia-y-ventajas

Portal  Frutícola.  (2025).  Conociendo  los  distintos  tipos  de  sistemas  hidropónicos.

https://www.portalfruticola.com/noticias/2023/08/18/conociendo-los-distintos-tipos-de-

sistemas-hidroponicos/

JH  Hydroponic  Systems.  (2025).  Ventajas  de  cultivo  de  tomate  en  sistemas

hidropónicos.

https://hydroponicsystems.eu/es/ventajas-de-cultivo-de-tomate-en-sistemas-

hidroponicos/

Sánchez-del-Castillo,  F.,  González-Molina,  L.,  Moreno-Pérez,  E.,  et  al.  (2014).

Dinámica nutrimental y rendimiento de pepino cultivado en hidroponía con y sin recirculación

de

la

solución

nutritiva.

Revista

Fitotecnia

Mexicana,

37(3).

https://www.scielo.org.mx/scielo.php?script=sci_arttext&pid=S0187-73802014000300013

ECOagricultor. (2021). Hidroponía: Qué es y cuáles son las Ventajas y Desventajas de

los  Cultivos  Hidropónicos.  https://www.ecoagricultor.com/hidroponia-que-es-y-ventajas-

desventajas-cultivos-hidroponicos/

Asociación

Hidropónica

Mexicana.

Historia

de

la

Hidroponia.

https://www.hidroponia.org.mx/

GroHo  Hidroponía.

(2024).  La  Historia  de

la  Hidroponía.  Tienda  Oficial.

https://www.groho.es/post/la-historia-de-la-hidroponia

Caballero,

I.  (2022).  Hidroponía,  cultivo  sin  suelo.  Ventajas  y  desventajas.

https://isabelcaballero.com/hidroponia-cultivo-sin-suelo-ventajas-y-desventajas/

Novagric.

(2024).  Cultivo  de  Lechuga  en  hidroponía  y  campo  abierto.

https://novagric.com/cultivos/cultivo-de-lechuga/

Campo Galego. (2019). El cultivo en hidropónico de lechuga es más rentable

que  en  tierra.  https://www.campogalego.es/el-cultivo-en-hidroponico-de-lechuga-es-

mas-rentable-que-en-tierra/

GroHo Hidroponía. (2021). Equilibrio de pH para una absorción de nutrientes eficiente.

https://www.groho.es/post/equilibrio-de-ph-para-una-absorcion-de-nutrientes-eficiente

8. Anexos

01.- Anexo I. Instrucciones de Copilot.

Las instrucciones que se utilizaron fueron las dispuestas en el siguiente repositorio.

https://github.com/iesalonsodemadrigal/demeteria/edit/main/.github/copilot-

instructions.md

Solo podrá consultarse esta plantilla si se tiene acceso al repositorio de DemeterIA.

No se ha dispuesto a continuación debido a la gran extensión que presenta la plantilla.

Permiso de divulgación del Trabajo Final de Grado

El alumno Aitor San José Romero, autor del trabajo final de Ciclo Formativo de Grado

Superior titulado “DemeterIA”, y tutorizado por el José María Pérez Ramos, a través del acto

de  presentación  de  este  documento  de  forma  oficial  para  su  evaluación  (registro  en  la

plataforma de TFGS del Centro), manifiesta que PERMITE la divulgación de este trabajo, una

vez  sea  evaluado,  y  siempre  con  el  consentimiento  de  su tutor/a,  por  parte del  centro  IES

Alonso de Madrigal y del Departamento de Informática y Comunicaciones, para que pueda

ser consultado y referenciado por cualquier persona que así lo estime oportuno en un futuro.

Esta divulgación será realizada siempre que ambos, alumno y tutor/a del Trabajo Final

de  Grado  Superior,  den  su  aprobación.  Esta  hoja  supone  el  consentimiento  por  parte  del

alumno, mientras que el profesor, si así lo desea, lo hará constar en futuras reuniones, una

vez finalizado el proceso de evaluación del mismo.

Nota: Este documento será obligatorio presentarlo como última hoja del documento final del TFGS

