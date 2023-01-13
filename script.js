document.addEventListener('DOMContentLoaded', function() {
const selector = '.nav__link';
const elems = Array.from( document.querySelectorAll( selector ) );
const navigation = document.querySelector( 'nav' );

function makeActive( evt ) {
  const target = evt.target;
  
  if ( !target || !target.matches( selector ) ) {
    return;
  }
  
  elems.forEach( elem => elem.classList.remove( 'active' ) );
    
    evt.target.classList.add( 'active' );
};

navigation.addEventListener( 'mousedown', makeActive );

} );

let items = document.querySelectorAll('.carousel .carousel-item')

    items.forEach((el) => {
      const minPerSlide = 4
      let next = el.nextElementSibling
      for (var i=1; i<minPerSlide; i++) {
        if (!next) {
            // wrap carousel by using first child
            next = items[0]
        }
        let cloneChild = next.cloneNode(true)
        el.appendChild(cloneChild.children[0])
        next = next.nextElementSibling
    }
})

