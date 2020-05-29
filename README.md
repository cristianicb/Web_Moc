# Manual Web de Madrid Open City

## Online web navegable en desktop y smartphone

https://cristianicb.github.io/Manual_Web_MadridOpenCity/ 

## Características

- Bootstrap Components
- Material design icon font
- Font-face HK Grotesk

## Structure

- **App Main:**
  - **Main.js** - javascript & jquery for basic web animations
  - **menu_datos.js** - menu JSON actualizable para todas las páginas
- **App:**
  - **Audio**
  - **Css**
  - **Fonts:** HK Grotesk ready to use with fontFace
  - **img:** todas las imagenes nomenclatura por página y número
  - **jquery:** jQuery instalado aquí
  - **menu.txt:** menu en texto para uso posterior.
- **vscode:** cosas de visual studio
- **Documentos html:** estructura textual de la web en la carpeta global
  
## How to use

Usa *plantilla_elementos.html* para copiar y pegar codigo vacío de componentes básicos como el texto, las imagenes o los embed.

- **Text**:
  
  - H1 - Título
  - H2 - 
  - H3 - 
  - P - 
  - H4 - 
  
- **Imágenes**:

  - **Imagen:** una sola imagen preparada para el responsive de la web y que se ajusta al ancho del texto.
  
  ```
      <div class="content_separator">
          <img src="./assets/img/test_images_medium.png" alt="">
          <h4> subtitulos</h4>
      </div>
   ```
      
  
  - **Galería 2:** dos imágenes que se ajustan al responsive como una galería.
  
    ```
      <div class="content_separator">
            <div class="gallery_two_img">
                <img src="./assets/img/test_images_small.png" alt="">
                <img src="./assets/img/test_images_small.png" alt="">
            </div>
            <h4> subtitulos</h4>
      </div>
    
    ```
    
  - **Galería 3:** tres imágenes que se ajustan al ancho del texto. 
  
    ```
    
      <div class="content_separator">
            <div class="gallery_three_img">
                <img src="./assets/img/test_images_small.png" alt="">
                <img src="./assets/img/test_images_small.png" alt="">
                <img src="./assets/img/test_images_small.png" alt="">
            </div>
            <h4> subtitulos</h4>
      </div>
    
    ```
    
    Usar una combinacion de las anteriores para generar galerías más grandes.

- **Bootstrap**:

  - **Carousel** imagenes con flechas que van rotando y permiten poner varias imagenes sobre un mismo tema
  - **Acordeon** 
  - **Modal and modal trigger**
  - **Opciones con texto**
  - **Popover**
  - **Tooltip**
  
- **Color**: (./assets/css/color_palette.css)clases preparadas para poner background y color institucionales:

    - **Azul Internacional Background:** moc_bg_a_i --> moc_bg_a_i_plus // moc_bg_a_i_minus // moc_bg_a_i_minus_x2
    - **Azul Cielo Background:** moc_bg_a_i --> moc_bg_a_i_plus // moc_bg_a_i_minus // moc_bg_a_i_minus_x2
    - **Magenta Futuro Background:** moc_bg_a_i --> moc_bg_a_i_plus // moc_bg_a_i_minus // moc_bg_a_i_minus_x2
    
    - **Azul Internacional Background:** moc_cl_a_i --> moc_cl_a_i_plus // moc_cl_a_i_minus // moc_cl_a_i_minus_x2
    - **Azul Cielo Background:** moc_cl_a_i --> moc_cl_a_i_plus // moc_cl_a_i_minus // moc_cl_a_i_minus_x2
    - **Magenta Futuro Background:** moc_cl_a_i --> moc_cl_a_i_plus // moc_cl_a_i_minus // moc_cl_a_i_minus_x2
    

  
  
