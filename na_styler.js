"use strict";

/*
   New Perspectives on HTML5, CSS3 and JavaScript 6th Edition
   Tutorial 12
   Case Problem 1

   Author: Evelyn Duarte
   Date:04.02.19

   Filename: na_styler.js

   Functions
   =========
   
   setStyles()
      Sets up the style sheets and the style sheet switcher.
      
   randInt(size)
      Returns a random integer from 0 up to size-1.

*/
//The function of setStyles will load when the page does. 
window.addEventListener("load", setStyles);

function setStyles() {
      // variables are just created to store code under a single name. I also set attributes to stylesheets and by placing a stylesheet, you must append the varaible and name. 
      var styleNum = randInt(5);
      var linkE = document.createElement("link");
      linkE.setAttribute("rel", "stylesheet");
      linkE.setAttribute("id", "fancySheet");
      linkE.setAttribute("href", "na_style_" + styleNum + ".css");

      document.head.appendChild(linkE);


      var figBox = document.createElement("figure");
      figBox.setAttribute("id", "styleThumbs");
      figBox.setAttribute("name", "figBox");
      document.getElementById("box").appendChild(figBox);
      // For loop that has the index value ranging from 0 to 4. Within, an element is created along with the name of the style sheets that will be different images depending on their number, specified by i.
      for (var i = 0; i <= 4; i++) {
            var sheetIMG = document.createElement("img");
            sheetIMG.setAttribute("src", "na_small_" + i + ".png");
            sheetIMG.setAttribute("alt", "na_style_" + i + ".css");

            sheetIMG.onclick = function (e) {
                  linkE.setAttribute("href", e.target.alt);
            }

            figBox.appendChild(sheetIMG);
      }
      var thumbStyles = document.createElement("style");
      document.head.appendChild(thumbStyles);
      //css code put into text strings using the insertRule.
      document.styleSheets[document.styleSheets.length - 1].insertRule(
            "figure#styleThumbs {\
                  position: absolute;\
                  left: 0px;\
                  bottom: 0px;\
            }"
      )
      document.styleSheets[document.styleSheets.length - 1].insertRule(
            "figure#styleThumbs img {\
            outline: 1px solid black;\
            cursor: pointer;\
            opacity: 0.75;\
            } "
      )
      document.styleSheets[document.styleSheets.length - 1].insertRule(
            "figure#styleThumbs img:hover {\
            outline: 1px solid red;\
            opacity: 1.0;\
            }"
      )

}

function randInt(size) {
      return Math.floor(size * Math.random());
}