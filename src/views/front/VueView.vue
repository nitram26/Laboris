      <template>
        <div id="section1">
          <NavInterno>
            <template #main>VUE3 || INITIUM</template>
            <template #title1>
              <h4>INICIO</h4>
            </template>
            <template #title2>
              <h4>COMPONENTES</h4>
            </template>
            <template #title3>
              <h4>PROCESSUS</h4>
            </template>
            <template #title4>
              <h4>disponible</h4>
            </template>
          </NavInterno>
          <!-- fin de navegador derecho -->
        </div>
        <!-- *************************************************************** -->
        <v-row>
          <v-col cols="6">
            <ol>
              <li class="li">
                <details class="select">
                  <summary class="text-teal">Crear Proyecto</summary>
                  <a href="http://127.0.0.1:5502/src/CodigosHtml/front/vue3/CrearProyecto.html" class="a"
                    target="_blank">
                    <h4>Crear Proyecto con Vuetify,Vite y Cli</h4>
                  </a>
                  <ol>
                    <li>Tener Instalado Node</li>
                    <li>Crear una carpeta y llevarla a VSCode </li>
                    <li></li>
                  </ol>
                  <img src="../../assets/image/front/vue3/instalar.png" alt="instalar " class="img1">
                  <p><br></p>
                </details>
              </li>
              <!-- ****************************************** -->
              <li class="li">
                <details class="select">
                  <summary>Crear Snippets</summary>
                  <a href="http://127.0.0.1:5502/src/CodigosHtml/front/vue3/Snippet.html" class="a" target="_blank">
                    <h4>Crear un Snippet</h4>
                  </a>
                  <ol>
                    <li>Ir a <a href="https://snippet-generator.app/?description=&tabtrigger=&snippet=&mode=vscode"
                        target="_blank">Snippet Generator</a> </li>
                    <li>Pegar el Código, poner descripción y nombre y copiarlo en VScode</li>
                    <li> A FRAGMENTOS DE USUARIO Y PARA QUE LENGUAJES</li>
                    <li> y en ese JSON se pega</li>
                    <li></li>
                  </ol>
                  <img src="../../assets/image/front/vue3/snippet.png " alt=" " class="img1">
                  <p><br></p>
                </details>
              </li>
              <!-- ****************************************** -->
              <li class="li">
                <details class="select">
                  <summary>LLamar un Componente </summary>
                  <a href="http://127.0.0.1:5502/src/CodigosHtml/front/vue3/RelacionarComponentes.html" class="a"
                    target="_blank">
                    <h4></h4>
                  </a>
                  <ol>
                    <li>Se trata de traer el componente a otra página</li>
                    <li>Se llama en el template y la ruta va en el script</li>
                    <li></li>
                  </ol>
                  <img src="../../assets/image/front/vue3/relacionarComponentes.png" alt=" " class="img1">
                  <p><br></p>
                </details>
              </li>
              <!-- ****************************************** -->
              <li class="li">
                <details class="select">
                  <summary>Interpolar Textos</summary>
                  <a href="http://127.0.0.1:5502/src/CodigosHtml/front/vue3/InterpolarTexto.html" class="a"
                    target="_blank">
                    <h4>LLamar una variable</h4>
                  </a>
                  <ol>
                    <li>Desde el template se usa las llaves dobles</li>
                    <li>Dentro se pone la variable que tenemos en el script</li>
                    <li></li>
                  </ol>
                  <img src="../../assets/image/front/vue3/interpolar.PNG " alt=" " class="img1">
                  <p><br></p>
                </details>
              </li>
              <!-- ****************************************** -->
              <li class="li">
                <details class="select">
                  <summary>v-if v-show</summary>
                  <a href="" class="a" target="_blank">
                    <h4>Ejemplo Selectivo</h4>
                  </a>
                  <ol>
                    <li>solo se muestra la opción elegida</li>
                    <li>Se usa cualquiera aunque funciona mejor if con números</li>
                    <li></li>
                  </ol>
                  <img src="../../assets/image/front/vue3/ExampleSelective.PNG " alt=" " class="img1">
                  <p><br></p>
                </details>
              </li>
              <!-- ****************************************** -->
              <li class="li">
                <details class="select">
                  <summary>V-MODEL</summary>
                  <a href="http://127.0.0.1:5502/src/CodigosHtml/front/vue3/Model.html" class="a" target="_blank">
                    <h4>Condiciones Reactivas</h4>
                  </a>
                  <ol>
                    <li>Necesita usar el Ref</li>
                    <li></li>
                    <li></li>
                  </ol>
                  <img src="../../assets/image/front/vue3/model.png " alt=" " class="img1">
                  <p><br></p>
                </details>
              </li>
              <!-- ****************************************** -->
            </ol>
          </v-col>
          <v-col cols="6">
            <ol>
              <li class="li">
                <details class="select">
                  <summary>V-BIND</summary>
                  <a href="http://127.0.0.1:5502/src/CodigosHtml/front/vue3/Bind.html" class="a" target="_blank">
                    <h4>Uso de v-bind</h4>
                  </a>
                  <ol>
                    <li>Como el If y show</li>
                    <li></li>
                    <li></li>
                  </ol>
                  <img src="../../assets/image/front/vue3/bind1.png " alt=" " class="img1">
                  <img src="../../assets/image/front/vue3/bind2.png " alt=" " class="img1">
                  <p><br></p>
                </details>
              </li>
              <!-- ****************************************** -->
              <li class="li">
                <details class="select">
                  <summary>CHECKBOX</summary>
                  <a href="http://127.0.0.1:5502/src/CodigosHtml/front/vue3/SelectCheckbox.html" class="a"
                    target="_blank">
                    <h4>CON VUETIFY y CSS</h4>
                  </a>
                  <ol>
                    <li>Revisar</li>
                    <li></li>
                    <li></li>
                  </ol>
                  <img src="../../assets/image/front/vue3 " alt=" " class="img1">
                  <p><br></p>
                </details>
              </li>
              <!-- ****************************************** -->
              <li class="li">
                <details class="select">
                  <summary>SELECT</summary>
                  <a href="http://127.0.0.1:5502/src/CodigosHtml/front/vue3/SelectNuevo.html" class="a" target="_blank">
                    <h4>Realizado con vuetify</h4>
                  </a>
                  <ol>
                    <li>Revisar</li>
                    <li></li>
                    <li></li>
                  </ol>
                  <img src="../../assets/image/front/vue3/select&Ckeckbox.png " alt=" " class="img1">
                  <p><br></p>
                </details>
              </li>
              <!-- ****************************************** -->
              <li class="li">
                <details class="select">
                  <summary>CONDICIONAL TERNARIO</summary>
                  <a href="http://127.0.0.1:5502/src/CodigosHtml/front/vue3/CondicionalTernario.html" class="a"
                    target="_blank">
                    <h4>TERNARIO</h4>
                  </a>
                  <ol>
                    <li>Simplificación del if y show</li>
                    <li></li>
                    <li></li>
                  </ol>
                  <img src="../../assets/image/front/vue3/CondicionalTernario.PNG " alt=" " class="img1">
                  <p><br></p>
                </details>
              </li>
              <!-- ****************************************** -->
              <li class="li">
                <details class="select">
                  <summary>CONDICIONALES V-IF V-SHOW</summary>
                  <a href="http://127.0.0.1:5502/src/CodigosHtml/front/vue3/IfShow.html" class="a" target="_blank">
                    <h4>CONDICIONALES</h4>
                  </a>
                  <ol>
                    <li>Revisar</li>
                    <li></li>
                    <li></li>
                  </ol>
                  <img src="../../assets/image/front/vue3/IfShow.PNG " alt=" " class="img1">
                  <p><br></p>
                </details>
              </li>
              <!-- ****************************************** -->
              <li class="li">
                <details class="select">
                  <summary></summary>
                  <a href="" class="a" target="_blank">
                    <h4></h4>
                  </a>
                  <ol>
                    <li></li>
                    <li></li>
                    <li></li>
                  </ol>
                  <img src="../../assets/image/front/vue3 " alt=" " class="img1">
                  <p><br></p>
                </details>
              </li>
              <!-- ****************************************** -->
            </ol>
          </v-col>
        </v-row>
        <!-- ///////////////////////////////////////////////// -->
        <div id="section2" class="mt-1">
          <v-row class="mt-1 text-center">
            <v-col cols="12">
              <h2 class="bg-pink-darken-4 pa-4"> COMPONENTES </h2>
            </v-col>
          </v-row>

          <!-- ****************************************** -->
          <v-row>
            <v-col cols="6">
              <ol>
                <li class="li">
                  <details class="select">
                    <summary class="text-teal">Contador</summary>
                    <a href="http://127.0.0.1:5502/src/CodigosHtml/front/vue3/Contador.html" class="a" target="_blank">
                      <h4>Contador </h4>
                    </a>
                    <ol>
                      <li>agrega y descuenta a un número</li>
                      <li>Se puede agregar muchas otras opciones</li>
                      <li></li>
                    </ol>
                    <img src="../../assets/image/front/vue3/contador.png " alt="contador " class="img1">
                    <p><br></p>
                  </details>
                </li>
                <!-- ****************************************** -->
                <li class="li">
                  <details class="select">
                    <summary>Reactividad</summary>
                    <a href="http://127.0.0.1:5502/src/CodigosHtml/front/vue3/ReactividadBasica.html" class="a"
                      target="_blank">
                      <h4>Básica</h4>
                    </a>
                    <ol>
                      <li>Unido al contador</li>
                      <li>Cambia de color pasando 1000</li>
                      <li>Inicia en 500, pero se puede cambiar fácilmente </li>
                    </ol>
                    <img src="../../assets/image/front/vue3/reactividad.png " alt="reactividad " class="img1">
                    <p><br></p>
                  </details>
                </li>
                <!-- ****************************************** -->
                <li class="li">
                  <details class="select">
                    <summary>V_FOR</summary>
                    <a href="" class="a" target="_blank">
                      <h4>Recorre y muestra Array y Objetos</h4>
                    </a>
                    <ol>
                      <li>DEL 1 AL 10 separado por guion o espacio</li>
                      <li>Iterar las letras de una palabra</li>
                      <li>Iterar un array de números o letras</li>
                      <li>Iterar un objeto</li>
                    </ol>
                    <img src="../../assets/image/front/vue3/v-for.png " alt="v-for " class="img1">
                    <p><br></p>
                  </details>
                </li>
                <!-- ****************************************** -->
                <li class="li">
                  <details class="select">
                    <summary>Practica Uno</summary>
                    <a href="http://127.0.0.1:5502/src/CodigosHtml/front/vue3/PracticaUno.html" class="a"
                      target="_blank">
                      <h4>Practica Básica</h4>
                    </a>
                    <ol>
                      <li>Mostrar saldo</li>
                      <li>Botones de depósito y retiro</li>
                      <li>si esta en 0 que no pueda retirar //usar un alert</li>
                      <li>cantidad de movimientos</li>
                      <li>cantidad de movimientos</li>
                      <li></li>
                    </ol>
                    <img src="../../assets/image/front/vue3/practicaUno.png " alt="practicaUno " class="img1">
                    <p><br></p>
                  </details>
                </li>
                <!-- ****************************************** -->
                <li class="li">
                  <details class="select">
                    <summary>V-FOR</summary>
                    <a href="http://127.0.0.1:5502/src/CodigosHtml/front/vue3/OpcionVfor.html" class="a"
                      target="_blank">
                      <h4>v-for</h4>
                    </a>
                    <ol>
                      <li>Hacer un card y tener un objeto de preguntas</li>
                      <li>Que desaparezcan después de 3 segundos las respuestas</li>
                      <li></li>
                    </ol>
                    <img src="../../assets/image/front/vue3/OpcionVfor.png " alt="OpcionVfor " class="img1">
                    <p><br></p>
                  </details>
                </li>
                <!-- ****************************************** -->

              </ol>
            </v-col>
            <v-col cols="6">
              <ol>
                <li class="li">
                  <details class="select">
                    <summary>Rutas</summary>
                    <a href="http://127.0.0.1:5502/src/CodigosHtml/front/vue3/Enrutado.html" class="a" target="_blank">
                      <h4>USANDO VUETIFY</h4>
                    </a>
                    <ol>
                      <li>Revisar</li>
                      <li></li>
                      <li></li>
                    </ol>
                    <img src="../../assets/image/front/vue3/ruta1.png " alt="ruta1 " class="img1">
                    <img src="../../assets/image/front/vue3/ruta2.png " alt="ruta2 " class="img1">
                    <img src="../../assets/image/front/vue3/ruta3.png " alt="ruta3 " class="img1">
                    <img src="../../assets/image/front/vue3/ruta4.png " alt="ruta4 " class="img1">
                    <p><br></p>
                  </details>
                </li>
                <!-- ****************************************** -->
                <li class="li">
                  <details class="select">
                    <summary>LAYOUTS & COMPOSABLES</summary>
                    <a href="http://127.0.0.1:5502/src/CodigosHtml/front/vue3/layoutsComposables.html" class="a"
                      target="_blank">
                      <h4>LAYOUTS</h4>
                    </a>
                    <ol>
                      <li>Muy util para no repetir Código</li>
                      <li></li>
                      <li></li>
                    </ol>
                    <img src="../../assets/image/front/vue3/leyautDeclarativa01.png " alt="leyautDeclarativa01 "
                      class="img1">
                    <img src="../../assets/image/front/vue3/leyautDeclarativa02.png " alt="leyautDeclarativa02 "
                      class="img1">
                    <p><br></p>
                  </details>
                </li>
                <!-- ****************************************** -->
                <li class="li">
                  <details class="select">
                    <summary>Animaciones e Iconos </summary>
                    <a href="http://127.0.0.1:5502/src/CodigosHtml/front/vue3/Animacion&Icono.html" class="a"
                      target="_blank">
                      <h4>Proceso</h4>
                    </a>
                    <ol>
                      <li>Revisar</li>
                      <li></li>
                      <li></li>
                    </ol>
                    <img src="../../assets/image/front/vue3/iconos01.png " alt=" " class="img1">
                    <p><br></p>
                  </details>
                </li>
                <!-- ****************************************** -->
                <li class="li">
                  <details class="select">
                    <summary>Router</summary>
                    <a href="http://127.0.0.1:5502/src/CodigosHtml/front/vue3/routerVuetify.html" class="a"
                      target="_blank">
                      <h4>ROUTER CON VUETIFY</h4>
                    </a>
                    <ol>
                      <li>Revisar</li>
                      <li></li>
                      <li></li>
                    </ol>
                    <img src="../../assets/image/front/vue3 " alt=" " class="img1">
                    <p><br></p>
                  </details>
                </li>
                <!-- ****************************************** -->
                <li class="li">
                  <details class="select">
                    <summary></summary>
                    <a href="" class="a" target="_blank">
                      <h4></h4>
                    </a>
                    <ol>
                      <li></li>
                      <li></li>
                      <li></li>
                    </ol>
                    <img src="../../assets/image/front/vue3 " alt=" " class="img1">
                    <p><br></p>
                  </details>
                </li>
                <!-- ****************************************** -->

              </ol>
            </v-col>
          </v-row>
        </div> <br>
        <!-- ///////////////////////////////////////////////// -->
        <div id="section3" class="mt-1">
          <v-row class="bg-purple-lighten-4 text-center">
            <v-col cols="12">
              <h2 class="bg-pink-darken-4 pa-4">PROCESSUS</h2>
            </v-col>
          </v-row>
          <!-- ************************************************* -->
          <v-row>
            <v-col cols="6">
              <ol>
                <li class="li">
                  <details class="select">
                    <summary>Props</summary>
                    <a href="http://127.0.0.1:5502/src/CodigosHtml/front/vue3/propsVuetres.html" class="a"
                      target="_blank">
                      <h4>Componentes Padre Hijo</h4>
                    </a>
                    <ol>
                      <li>Analizar el proceso</li>
                      <li></li>
                      <li></li>
                    </ol>
                    <img src="../../assets/image/front/vue3 " alt=" " class="img1">
                    <p><br></p>
                  </details>
                </li>
                <!-- ****************************************** -->
                <li class="li">
                  <details class="select">
                    <summary>Emits</summary>
                    <a href="http://127.0.0.1:5502/src/CodigosHtml/front/vue3/EmitVue.html" class="a" target="_blank">
                      <h4>Emits y Props</h4>
                    </a>
                    <ol>
                      <li>Revisar</li>
                      <li></li>
                      <li></li>
                    </ol>
                    <img src="../../assets/image/front/vue3/emits1.png " alt="emits1 " class="img1">
                    <p><br></p>
                  </details>
                </li>
                <!-- ****************************************** -->
                <li class="li">
                  <details class="select">
                    <summary>Props Array</summary>
                    <a href="http://127.0.0.1:5502/src/CodigosHtml/front/vue3/PrpsArray.html" class="a" target="_blank">
                      <h4>Props Arrays</h4>
                    </a>
                    <ol>
                      <li>Revisar</li>
                      <li></li>
                      <li></li>
                    </ol>
                    <img src="../../assets/image/front/vue3/propsArray.png " alt=" propsArray" class="img1">
                    <p><br></p>
                  </details>
                </li>
                <!-- ****************************************** -->
                <li class="li">
                  <details class="select">
                    <summary>Injection</summary>
                    <a href="http://127.0.0.1:5502/src/CodigosHtml/front/vue3/Injection.html" class="a" target="_blank">
                      <h4>Reemplaza a los props y emits</h4>
                    </a>
                    <ol>
                      <li>Mucho más fácil</li>
                      <li></li>
                      <li></li>
                    </ol>
                    <img src="../../assets/image/front/vue3/injection.png " alt="injection " class="img1">
                    <p><br></p>
                  </details>
                </li>
                <!-- ****************************************** -->
                <li class="li">
                  <details class="select">
                    <summary>PlaceHolder</summary>
                    <a href="http://127.0.0.1:5502/src/CodigosHtml/front/vue3/ServicePlaceholder.html" class="a"
                      target="_blank">
                      <h4>Uso de Placeholder</h4>
                    </a>
                    <ol>
                      <li>Revisar</li>
                      <li></li>
                      <li></li>
                    </ol>
                    <img src="../../assets/image/front/vue3/placeholder.PNG " alt=" placeholder" class="img1">
                    <p><br></p>
                  </details>
                </li>
                <!-- ****************************************** -->

              </ol>
            </v-col>
            <v-col cols="6">
              <ol>
                <li class="li">
                  <details class="select">
                    <summary>login Firebase</summary>
                    <a href="http://127.0.0.1:5502/src/CodigosHtml/front/vue3/LoginFirebase.html" class="a"
                      target="_blank">
                      <h4>Autenticar</h4>
                    </a>
                    <ol>
                      <li>Revisar</li>
                      <li></li>
                      <li></li>
                    </ol>
                    <img src="../../assets/image/front/vue3 " alt=" " class="img1">
                    <p><br></p>
                  </details>
                </li>
                <!-- ****************************************** -->
                <li class="li">
                  <details class="select">
                    <summary>Pinia</summary>
                    <a href="http://127.0.0.1:5502/src/CodigosHtml/front/vue3/pinia.html" class="a" target="_blank">
                      <h4>Pinia</h4>
                    </a>
                    <ol>
                      <li>Revisar</li>
                      <li></li>
                      <li></li>
                    </ol>
                    <img src="../../assets/image/front/vue3/piniaMain.png " alt="piniaMain " class="img1">
                    <img src="../../assets/image/front/vue3/piniaCounter.png " alt=" piniaCounter" class="img1">
                    <img src="../../assets/image/front/vue3/piniaComponent.png " alt="piniaComponent " class="img1">
                    <p><br></p>
                  </details>
                </li>
                <!-- ****************************************** -->
                <li class="li">
                  <details class="select">
                    <summary>PWA</summary>
                    <a href="http://127.0.0.1:5502/src/CodigosHtml/front/vue3/pwa.html" class="a" target="_blank">
                      <h4>PWA</h4>
                    </a>
                    <ol>
                      <li>Revisar</li>
                      <li></li>
                      <li></li>
                    </ol>
                    <img src="../../assets/image/front/vue3 " alt=" " class="img1">
                    <p><br></p>
                  </details>
                </li>
                <!-- ****************************************** -->
                <li class="li">
                  <details class="select">
                    <summary>il18n</summary>
                    <a href="http://127.0.0.1:5502/src/CodigosHtml/front/vue3/pwa.html" class="a" target="_blank">
                      <h4>il18n</h4>
                    </a>
                    <ol>
                      <li>Revisar</li>
                      <li></li>
                      <li></li>
                    </ol>
                    <img src="../../assets/image/front/vue3 " alt=" " class="img1">
                    <p><br></p>
                  </details>
                </li>
                <!-- ****************************************** -->
                <li class="li">
                  <details class="select">
                    <summary>Plugins</summary>
                    <a href="http://127.0.0.1:5502/src/CodigosHtml/front/vue3/plugins.html" class="a" target="_blank">
                      <h4>Plugins</h4>
                    </a>
                    <ol>
                      <li>Revisar</li>
                      <li></li>
                      <li></li>
                    </ol>
                    <img src="../../assets/image/front/vue3 " alt=" " class="img1">
                    <p><br></p>
                  </details>
                </li>
                <!-- ****************************************** -->

              </ol>
            </v-col>
          </v-row>
        </div>

        <!-- ///////////////////////////////////////////////////////////// -->
        <div id="section4" class="mt-1">
          <v-row class="bg-purple-lighten-4 text-center">
            <v-col cols="12">
              <h2 class="bg-pink-darken-4 pa-4">DISPONIBLE</h2>
            </v-col>
          </v-row>
          <!-- ************************************************* -->
          <v-row>
            <v-col cols="6">
              <ol>
                <li class="li">
                  <details class="select">
                    <summary></summary>
                    <a href="" class="a" target="_blank">
                      <h4></h4>
                    </a>
                    <ol>
                      <li></li>
                      <li></li>
                      <li></li>
                    </ol>
                    <img src="" alt=" " class="img1">
                    <p><br></p>
                  </details>
                </li>
                <!-- ****************************************** -->
                <li class="li">
                  <details class="select">
                    <summary></summary>
                    <a href="" class="a" target="_blank">
                      <h4></h4>
                    </a>
                    <ol>
                      <li></li>
                      <li></li>
                      <li></li>
                    </ol>
                    <img src="" alt=" " class="img1">
                    <p><br></p>
                  </details>
                </li>
                <!-- ****************************************** -->
                <li class="li">
                  <details class="select">
                    <summary></summary>
                    <a href="" class="a" target="_blank">
                      <h4></h4>
                    </a>
                    <ol>
                      <li></li>
                      <li></li>
                      <li></li>
                    </ol>
                    <img src="" alt=" " class="img1">
                    <p><br></p>
                  </details>
                </li>
                <!-- ****************************************** -->
                <li class="li">
                  <details class="select">
                    <summary></summary>
                    <a href="" class="a" target="_blank">
                      <h4></h4>
                    </a>
                    <ol>
                      <li></li>
                      <li></li>
                      <li></li>
                    </ol>
                    <img src="" alt=" " class="img1">
                    <p><br></p>
                  </details>
                </li>
                <!-- ****************************************** -->
                <li class="li">
                  <details class="select">
                    <summary></summary>
                    <a href="" class="a" target="_blank">
                      <h4></h4>
                    </a>
                    <ol>
                      <li></li>
                      <li></li>
                      <li></li>
                    </ol>
                    <img src="" alt=" " class="img1">
                    <p><br></p>
                  </details>
                </li>
                <!-- ****************************************** -->


              </ol>
            </v-col>
            <v-col cols="6">
              <ol>
                <li class="li">
                  <details class="select">
                    <summary></summary>
                    <a href="" class="a" target="_blank">
                      <h4></h4>
                    </a>
                    <ol>
                      <li></li>
                      <li></li>
                      <li></li>
                    </ol>
                    <img src="" alt=" " class="img1">
                    <p><br></p>
                  </details>
                </li>
                <!-- ****************************************** -->
                <li class="li">
                  <details class="select">
                    <summary></summary>
                    <a href="" class="a" target="_blank">
                      <h4></h4>
                    </a>
                    <ol>
                      <li></li>
                      <li></li>
                      <li></li>
                    </ol>
                    <img src="" alt=" " class="img1">
                    <p><br></p>
                  </details>
                </li>
                <!-- ****************************************** -->
                <li class="li">
                  <details class="select">
                    <summary></summary>
                    <a href="" class="a" target="_blank">
                      <h4></h4>
                    </a>
                    <ol>
                      <li></li>
                      <li></li>
                      <li></li>
                    </ol>
                    <img src="" alt=" " class="img1">
                    <p><br></p>
                  </details>
                </li>
                <!-- ****************************************** -->
                <li class="li">
                  <details class="select">
                    <summary></summary>
                    <a href="" class="a" target="_blank">
                      <h4></h4>
                    </a>
                    <ol>
                      <li></li>
                      <li></li>
                      <li></li>
                    </ol>
                    <img src="" alt=" " class="img1">
                    <p><br></p>
                  </details>
                </li>
                <!-- ****************************************** -->
                <li class="li">
                  <details class="select">
                    <summary></summary>
                    <a href="" class="a" target="_blank">
                      <h4></h4>
                    </a>
                    <ol>
                      <li></li>
                      <li></li>
                      <li></li>
                    </ol>
                    <img src="" alt=" " class="img1">
                    <p><br></p>
                  </details>
                </li>
                <!-- ****************************************** -->

              </ol>
            </v-col>
          </v-row>
        </div>
      </template>
<!-- ///////////////////////////////////////////////////////////// -->
<script setup>
import NavInterno from '../../layouts/NavInterno.vue';



</script>
<!-- /////////////////////////////////////////////////////////// -->
<style scoped>
.fixed-top {
  position: fixed;
  top: 0;
  left: 0;
  width: 101%;
  z-index: 1000
}
</style>


