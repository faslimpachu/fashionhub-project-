
// nav bar

function myFunction() {
    var x = document.getElementById("myTopnav");
    if (x.className === "topnav") {
      x.className += " responsive";
    } else {
      x.className = "topnav";
    }
  }


  //product slide

function img(anything) {
    document.querySelector('.slide').src = anything;
  }

  function change(change) {
    const line = document.querySelector('.home');
    line.style.background = change;
  }

  //color

  const colorBoxes = document.querySelectorAll('.color-box');

colorBoxes.forEach(colorBox => {
  colorBox.addEventListener('click', () => {
    // Reset ticked class for all color boxes
    colorBoxes.forEach(box => {
      box.classList.remove('ticked');
    });

    // Add ticked class to clicked color box
    colorBox.classList.add('ticked');
  });
});


// add to cart

document.getElementById("plus-btn").addEventListener("click", function() {
  let productCount = parseInt(document.getElementById("product-count").value);
  productCount += 1;
  document.getElementById("product-count").value = productCount;
});

document.getElementById("minus-btn").addEventListener("click", function() {
  let productCount = parseInt(document.getElementById("product-count").value);
  if (productCount > 1) {
    productCount -= 1;
    document.getElementById("product-count").value = productCount;
  }
});
 