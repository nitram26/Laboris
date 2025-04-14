<template>
  <div id="section1">
    <NavInterno>
      <template #main>INITIUM || Exemplum</template>
      <template #title1>
        <h4>INICIO</h4>
      </template>
      <template #title2>
        <h4>OPTIONS</h4>
      </template>
      <template #title3>
        <h4>PROCESSUS</h4>
      </template>
    </NavInterno>
    <!-- fin de navegador derecho INITIUM => iNICIO Y EXEMPLUM => MODELO-->
  </div>
  <!-- *************************************************************** -->
  <v-row class="mt-3">
    <v-col cols="6">
      <ol>
        <li class="li">
          <details class="select">
            <summary>HTML </summary>
            <a href="http://127.0.0.1:5502/src/CodigosHtml/home/ElementosRapidos.html" class="a" target="_blank">
              <h4>Estructura de Código</h4>
            </a>
            <ol>
              <li>El signo < se cambia por &-lt-Punto y coma; Todo va junto</li>
              <li></li>
            </ol>
            <img src="../assets/image/home/BorradorHtml.png" alt="" class="img1">
            <p><br></p>
          </details>
        </li>
        <!-- ****************************** -->
        <li class="li">
          <details class="select">
            <summary>Estructura de Página</summary>
            <a href="http://127.0.0.1:5502/src/CodigosHtml/home/NavDentroDePagina.html" class="a" target="_blank">
              <h4>Estructura y Nav Interno</h4>
            </a>
            <ol>
              <li>Estructura de Pagina</li>
              <li>Necesita el layout: NavInterno </li>
              <li></li>
            </ol>
            <img src="../assets/image/home/NavImagen.png" alt=" " class="img1">
            <p><br></p>

          </details>
        </li>
        <!-- ****************************** -->
        <li class="li">
          <details class="select">
            <summary>Página Principal</summary>
            <a href="http://127.0.0.1:5502/src/CodigosHtml/home/PaginaPrincipal.html" class="a" target="_blank">
              <h4>Barra de navegación principal</h4>
            </a>

            <img src="../assets/image/home/paginaPrincipal.png" alt="paginaPrincipal" class="img1">
            <p><br></p>
          </details>
        </li>
        <!-- ****************************** -->
        <li class="li">
          <details class="select">
            <summary>Navegador Lateral a Páginas</summary>
            <a href="http://127.0.0.1:5502/src/CodigosHtml/home/NavPaginas.html" class="a" target="_blank">
              <h4>Para redirigir a otras páginas</h4>
            </a>
            <ol>
              <li>Necesita tener el MainLayout</li>
              <li></li>
            </ol>
            <img src="../assets/image/home/navPagina.png " alt=" " class="img1">
            <p><br></p>

          </details>
        </li>
        <!-- ****************************** -->
        <li class="li">
          <details class="select">
            <summary>MainLayout para Nav Lateral a Páginas</summary>
            <a href="http://127.0.0.1:5502/src/CodigosHtml/home/MainLayout.html" class="a" target="_blank">
              <h4>Navegador lateral con enlaces a Páginas</h4>
            </a>
            <img src="../assets/image/home/navPagina.png " alt=" " class="img1">
            <p><br></p>

          </details>
        </li>
        <!-- ****************************** -->
        <li class="li">
          <details class="select">
            <summary>layout NavInterno</summary>
            <a href="http://127.0.0.1:5502/src/CodigosHtml/home/NavDentroDePagina.html" class="a" target="_blank">
              <h4>Layout para Navegar dentro de la página</h4>
            </a>
            <ol>
              <li>Dentro de la carpeta layout</li>
              <li>Se llama en la página a usar</li>
              <li></li>
            </ol>
            <img src="../assets/image/home/menuSecundario.png " alt=" " class="img1">
            <p><br></p>

          </details>
        </li>
        <!-- ****************************** -->
        <li class="li">
          <details class="select">
            <summary></summary>
            <a href="" class="a" target="_blank">
              <h4></h4>
            </a>
            <img src="../assets/image " alt=" " class="img1">
            <p><br></p>

          </details>
        </li>
        <!-- ****************************** -->
      </ol>
    </v-col>
    <v-col cols="6">
      <ol>
        <li class="li">
          <details class="select">
            <summary>Menu Primario</summary>
            <a href="http://127.0.0.1:5502/src/CodigosHtml/home/MenuPrimario.html" class="a" target="_blank">
              <h4>Barra de Navegación Lateral Principal</h4>
            </a>
            <img src="../assets/image/home/menuPrimario.png " alt=" " class="img1">
            <p><br></p>
          </details>
        </li>
        <!-- ****************************** -->
        <li class="li">
          <details class="select">
            <summary>Secundario con Tarjetas</summary>
            <a href="http://127.0.0.1:5502/src/CodigosHtml/home/secundarioYTarjetas.html" class="a" target="_blank">
              <h4>Tarjetas</h4>
            </a>
            <ol>
              <li>Tarjeta con temporizador</li>
              <li>Menu lateral secundario</li>
              <li>Con el uso de v-for se reduce el espacio mucho</li>
            </ol>
            <img src="../assets/image/home/secYtarjeta.PNG " alt=" secYtarjeta" class="img1">
            <p><br></p>
          </details>
        </li>
        <!-- ****************************** -->
        <li class="li">
          <details class="select">
            <summary>Menu Secundario</summary>
            <a href="http://127.0.0.1:5502/src/CodigosHtml/home/MenuSecundario.html" class="a" target="_blank">
              <h4>Lateral de Navegación Interna</h4>
            </a>
            <ol>
              <li>Crear el View</li>
              <li>Elegir el menu</li>
              <li>Establecer la ruta</li>
            </ol>
            <img src="../assets/image/home/menuSecundario.png " alt=" " class="img1">
            <p><br></p>
          </details>
        </li>
        <!-- ****************************** -->
        <li class="li">
          <details class="select">
            <summary>Tarjetas v-for</summary>

            <a href="http://127.0.0.1:5502/src/CodigosHtml/home/TarjetaVfor.html" class="a" target="_blank">
              <h4>Uso de layouts</h4>
            </a>
            <ol>
              <li>Usando layouts simplifica el código</li>
              <li>Agrega imagen personalizadas en el navegador lateral</li>
              <li>Revisar</li>
            </ol>
            <img src="../assets/image/home/NavImagen.png " alt=" NavImagen" class="img1">

            <p><br></p>

          </details>
        </li>
        <!-- ****************************** -->
        <li class="li">
          <details class="select">
            <summary>nav Interno</summary>
            <a href="http://127.0.0.1:5502/src/CodigosHtml/home/NavInterno.html" class="a" target="_blank">
              <h4>MODELO DE NAV INTERNO Y V-FOR
              </h4>
            </a>
            <ol>
              <li>Parece un uso básico de layouts</li>
              <li>Revisar</li>
            </ol>
            <img src="../assets/image " alt=" " class="img1">
            <p><br></p>

          </details>
        </li>
        <!-- ****************************** -->
        <li class="li">
          <details class="select">
            <summary>IA Developers</summary>
            <a href="http://127.0.0.1:5502/src/CodigosHtml/home/IADeveloper.html" class="a" target="_blank">
              <h4>Uso de IAs</h4>
            </a>
            <ol>
              <li>IAs para diversos usos</li>
              <li>links de enlaces a páginas</li>
              <h6>Indicaciones</h6>
              <li>Crear el prompt detallado en Word o Block de Notas <br>
                Tener un archivo de Prompts por tipos (Indicaciones) <br>
                Esto hasta entender la lógica de la IA</li>
            </ol>
            <img src="../assets/image " alt=" " class="img1">
            <p><br></p>

          </details>
        </li>
        <!-- ****************************** -->
        <li class="li">
          <details class="select">
            <summary></summary>
            <a href="" class="a" target="_blank">
              <h4></h4>
            </a>
            <img src="../assets/image " alt=" " class="img1">
            <p><br></p>

          </details>
        </li>
      </ol>
    </v-col>
  </v-row>


  <!-- ///////////////////////////////////////////////// -->
  <div id="section2" class="mt-1">
    <v-row class="mt-1 text-center">
      <v-col cols="12">
        <h2 class="bg-pink-darken-4 pa-4"> ORDER </h2>
      </v-col>
    </v-row>
<!-- ORDER => ORDEN -->
    <!-- ****************************************** -->
    <v-row>
      <v-col cols="6">
        <ol>
          <li class="li">
            <details class="select">
              <summary>NVM</summary>
              <a href="http://127.0.0.1:5502/src/CodigosHtml/home/ManagerNvm.html" class="a" target="_blank">
                <h4>NVM</h4>
              </a>
              <img src="../assets/image/home/nvm.png " alt="nvm " class="img1">
              <p><br></p>
            </details>
          </li>
          <!-- ****************************************** -->
          <li class="li">
            <details class="select">
              <summary>Colores</summary>
              <a href="../CodigosHtml/home/ColoresVuetify.html" class="a" target="_blank">
                <h4>En Vuetify</h4>
              </a>
              <ol>
                <li>Tiene 3 formas: lighten, darken, accent</li>
                <li>Van del 1 al 5</li>
                <li>1 menos intenso, 5 mas intenso</li>
                <li>Sintaxis: cyan-lighten-1</li>
              </ol>
              <img src="../assets/image/home/coloresVuetify.png " alt="coloresVuetify " class="img1">
              <p><br></p>
            </details>
          </li>
          <!-- ****************************************** -->
          <li class="li">
            <details class="select">
              <summary>Tutoriales</summary>
              <a href="http://127.0.0.1:5502/src/CodigosHtml/home/EnlacesReferencias.html#developer" class="a" target="_blank">
                <h4>Enlaces a tutoriales</h4>
              </a>
              <img src="../assets/image/home/youtube.png " alt="youtube " class="img1">
              <p><br></p>
            </details>
          </li>
          <!-- ****************************************** -->
          <li class="li">
            <details class="select">
              <summary>Emmet</summary>
              <a href="http://127.0.0.1:5502/src/CodigosHtml/home/Emmet.html" class="a" target="_blank">
                <h4></h4>
              </a>
              <img src="../assets/image/home/emmet.png " alt=" emmet" class="img1">
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
              <img src="../assets/image " alt=" " class="img1">
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
              <img src="../assets/image " alt=" " class="img1">
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
              <img src="../assets/image " alt=" " class="img1">
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
              <img src="../assets/image " alt=" " class="img1">
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
              <img src="../assets/image " alt=" " class="img1">
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
              <img src="../assets/image " alt=" " class="img1">
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
              <summary>Memento</summary>
              <a href="http://127.0.0.1:5502/src/CodigosHtml/home/ProcesoHora.html" class="a" target="_blank">
                <h4>Recordar cada tiempo</h4>
              </a>
              <img src="../assets/image/home/relojDeArena.png " alt=" relojDeArena" class="img1">
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
              <img src="../assets/image " alt=" " class="img1">
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
              <img src="../assets/image " alt=" " class="img1">
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
              <img src="../assets/image " alt=" " class="img1">
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
              <img src="../assets/image " alt=" " class="img1">
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
              <img src="../assets/image " alt=" " class="img1">
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
              <img src="../assets/image " alt=" " class="img1">
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
              <img src="../assets/image " alt=" " class="img1">
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
              <img src="../assets/image " alt=" " class="img1">
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
              <img src="../assets/image " alt=" " class="img1">
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
import NavInterno from '../layouts/NavInterno.vue';



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