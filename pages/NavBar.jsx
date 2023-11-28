export default function NavBar () {
    return(
        <header class="application__header">
        <nav>
            <div class="img__logo--position"  >
                <img src="/styles/svg PetFinder/logo.svg" alt="logo"/>
              </div> 
                <div class="flex__container">
                    <ul class="flex__container" >
                        <li class="nav__option"><a href="#">Conocenos</a></li>
                        <li class="nav__option" ><a href="#">Historias de Exito</a></li>
                        <li class="nav__option"><a  href="#">Contacto</a></li>
                    </ul>           
                  <button class="nav__button--style , button__primary--orange">Ingresar</button>
                </div>
        </nav>    
    </header>
    )
}
