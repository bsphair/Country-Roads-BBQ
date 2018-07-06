
function checkFunction(){

  var createImage = function(src, title, description) {
    var img   = new Image();
    img.src   = src;
    img.alt   = title;
    img.title = title;
    img.id = title;
    img.caption = description;
    return img;
  };

  var images = [];



  images.push(createImage("../images/porkBBQSand01.jpg", "porkSand", "Pork Sandwich"));
  images.push(createImage("../images/chickenSand01.jpg", "chickenSand", "Chicken Sandwich"));  images.push(createImage("../images/sausageSand01.jpg", "sausageSand", "Sausage Sandwich"));



  var sandwichButton = document.getElementById('sandwichBox').checked;
  var printedChicken = false;

  var img = images;

  if(sandwichButton){
    for(var x = 0; x < images.length; x++){
      var container = document.createElement("div");
      container.className = "col-lg-4 imgContainer";
      var sandVar = document.createElement("img");
      sandVar.src = images[x].src;
      sandVar.id = images[x].id;

      sandVar.className = 'sandwichFromJS';

      var imgCap = document.createElement("span");
      imgCap.innerHTML = "<br/>" + images[x].caption;

      container.appendChild(sandVar);
      container.appendChild(imgCap);

      document.getElementById('chickenOutput').appendChild(container);

    }
    printedChicken = true;
  }

  if(!printedChicken){
    var node = document.getElementById('chickenOutput');
    while (node.firstChild) {
        node.removeChild(node.firstChild);
    }
  }
}




function showBrisket(){

  var createImage = function(src, title, description) {
    var img   = new Image();
    img.src   = src;
    img.alt   = title;
    img.title = title;
    img.id = title;
    img.caption = description;
    return img;
  };

  var images = [];


  images.push(createImage("../images/brisket05.JPG", "brisk01", "Slow cooked"));
  images.push(createImage("../images/brisket08.JPG", "brisk02", "Smoked with wood chips"));
  images.push(createImage("../images/brisket01.JPG", "brisk03", "Tender and juicy"));



  var sandwichButton = document.getElementById('chickenBox').checked;
  var printedBrisket = false;

  var img = images;

  if(sandwichButton){
    for(var x = 0; x < images.length; x++){
      var container = document.createElement("div");
      container.className = "col-lg-4 imgContainer";
      var sandVar = document.createElement("img");
      sandVar.src = images[x].src;
      sandVar.id = images[x].id;

      sandVar.className = 'sandwichFromJS';

      var imgCap = document.createElement("span");
      imgCap.innerHTML = "<br/>" + images[x].caption;

      container.appendChild(sandVar);
      container.appendChild(imgCap);

      document.getElementById('brisketOutput').appendChild(container);

    }
    printedBrisket = true;
  }

  if(!printedBrisket){
    var node = document.getElementById('brisketOutput');
    while (node.firstChild) {
        node.removeChild(node.firstChild);
    }
  }
}





function showSides(){

  var createImage = function(src, title, description) {
    var img   = new Image();
    img.src   = src;
    img.alt   = title;
    img.title = title;
    img.id = title;
    img.caption = description;
    return img;
  };

  var images = [];


  images.push(createImage("../images/beans01.JPG", "beans01", "Baked beans"));
  images.push(createImage("../images/chips01.jpg", "chips01", "Lots of options"));


  var sandwichButton = document.getElementById('sideBox').checked;
  var printedBrisket = false;

  var img = images;

  if(sandwichButton){
    for(var x = 0; x < images.length; x++){
      var container = document.createElement("div");
      container.className = "col-lg-4 imgContainer";
      var sandVar = document.createElement("img");
      sandVar.src = images[x].src;
      sandVar.id = images[x].id;

      sandVar.className = 'sandwichFromJS';

      var imgCap = document.createElement("span");
      imgCap.innerHTML = "<br/>" + images[x].caption;

      container.appendChild(sandVar);
      container.appendChild(imgCap);

      document.getElementById('beanOutput').appendChild(container);

    }
    printedBrisket = true;
  }

  if(!printedBrisket){
    var node = document.getElementById('beanOutput');
    while (node.firstChild) {
        node.removeChild(node.firstChild);
    }
  }
}




function showVarious(){

  var createImage = function(src, title, description) {
    var img   = new Image();
    img.src   = src;
    img.alt   = title;
    img.title = title;
    img.id = title;
    img.caption = description;
    return img;
  };

  var images = [];


  images.push(createImage("../images/beans02.jpg", "beans02", "Lot of baked beans"));
  images.push(createImage("../images/sausages01.jpg", "sausage01", "Spicy sausage with onions"));


  var sandwichButton = document.getElementById('variousBox').checked;
  var printedBrisket = false;

  var img = images;

  if(sandwichButton){
    for(var x = 0; x < images.length; x++){
      var container = document.createElement("div");
      container.className = "col-lg-4 imgContainer";
      var sandVar = document.createElement("img");
      sandVar.src = images[x].src;
      sandVar.id = images[x].id;

      sandVar.className = 'sandwichFromJS';

      var imgCap = document.createElement("span");
      imgCap.innerHTML = "<br/>" + images[x].caption;

      container.appendChild(sandVar);
      container.appendChild(imgCap);

      document.getElementById('variousOutput').appendChild(container);

    }
    printedBrisket = true;
  }

  if(!printedBrisket){
    var node = document.getElementById('variousOutput');
    while (node.firstChild) {
        node.removeChild(node.firstChild);
    }
  }
}
