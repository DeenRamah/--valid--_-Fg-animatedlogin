let inputBox = document.getElementById(".input-box");
let search = document.getElementById(".search");
let tafutaIcon = document.getElementById("search-icon");
let fungHio = document.getElementById("close-icon");
let mkuu = document.getElementById(".mkuu");

inputBox.querySelector(".input-box"),
search = document.querySelector(".search"),
fungHio = document.querySelector(".close-icon");

search.addEventListener("click", ()=> inputBox.classList.add("open"));
fungHio.addEventListener("clixk", ()=> inputBox.classList.remove("open"))
//A Cubic Bezier curve is defined by four points P0, P1, P2, and P3.
//P0 and P3 are the start and the end of the curve and, in CSS these
//points are fixed as the coordinates are ratios.
//P0 is (0, 0) and represents the initial time and the initial
//state, P3 is (1, 1) and represents the final time and the final state.*
///
//The cubic-bezier() function can be used with the 
//animation-timing-function property and the 
//transition-timing-function property.
/**
 *     <script>
    let inputBox = document.querySelector(".input-box"),
        search = document.querySelector(".search"),
        closeIcon = document.querySelector(".close-icon");
    
    search.addEventListener("click", ()=> inputBox.classList.add("open"));
    closeIcon.addEventListener("click", ()=>inputBox.classList.remove("open"));
    </script>
 */


