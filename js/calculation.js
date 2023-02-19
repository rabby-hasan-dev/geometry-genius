//  for first card - triangle
let serial = 1;
document.getElementById('btn-triangle').addEventListener('click', function () {
   // get the triangle data using by id 

   const triangleTitle = document.getElementById('triangle-title').innerText;

   const triangleInputFieldB = document.getElementById('ti-field-b').value;


   const triangleInputFieldH = document.getElementById('ti-field-h').value;

   //    calculation
   const triangleArea = 0.5 * parseFloat(triangleInputFieldB) * parseFloat(triangleInputFieldH);
   

   // common string
   const length = triangleArea + 'cm' + stringSup.innerHTML;

   
   displayData(serial, triangleTitle, length)

   serial += 1;

   if (isNaN(triangleInputFieldB)) {
      alert('Please provide a number')
      return;
  }
 

})

//................................ Rhombus area.............................
document.getElementById('btn-rhombus').addEventListener('click', function () {
   // get the rhombus data using by id 

   const rhombusTitle = document.getElementById('rhombus-title').innerText;

   const rhombusInputFieldB = document.getElementById('rif-d1').value;


   const rhombusInputFieldH = document.getElementById('rif-d2').value;

   //    calculation
   const rhombusArea = 0.5 * parseFloat(rhombusInputFieldB) * parseFloat(rhombusInputFieldH);

   // common string
   const length = rhombusArea + 'cm' + stringSup.innerHTML;


   displayData(serial, rhombusTitle, length)

   serial += 1;

})

// ...............Rectangle- area...............
document.getElementById('btn-rectangle').addEventListener('click', function () {
   // get the triangle data using by id 

   const rectangleTitle = document.getElementById('rectangle-title').innerText;

   const rectangleInputFieldB = document.getElementById('rip-w').value;


   const rectangleInputFieldH = document.getElementById('rip-l').value;

   //    calculation
   const rectangleArea = parseFloat(rectangleInputFieldB) * parseFloat(rectangleInputFieldH);
   // common string
   const length = rectangleArea + 'cm' + stringSup.innerHTML;


   displayData(serial, rectangleTitle, length);

   serial += 1;
   // button





})

// ................... Parallelogram.......................
document.getElementById('btn-parallelogram').addEventListener('click', function () {
   // get  data using by id 

   const parallelogramTitle = document.getElementById('parallelogram-title').innerText;

   const parallelogramInputFieldB = document.getElementById('pif-b').value;


   const parallelogramInputFieldH = document.getElementById('pif-h').value;

   //    calculation
   const parallelogramArea = parseFloat(parallelogramInputFieldB) * parseFloat(parallelogramInputFieldH);

   // common string
   const length = parallelogramArea + 'cm' + stringSup.innerHTML;


   displayData(serial, parallelogramTitle, length)

   // common string
   serial += 1;




})

//................ Pentagon Area............
document.getElementById('btn-pentagon').addEventListener('click', function () {

   // get the pentagon data using by id 

   const pentagonTitle = document.getElementById('pentagone-title').innerText;

   const pentagonInputFieldB = document.getElementById('peif-p').value;


   const pentagonInputFieldH = document.getElementById('peif-b').value;

   //    calculation
   const pentagonArea = parseFloat(pentagonInputFieldB) * parseFloat(pentagonInputFieldH);

   // common string
   const length = pentagonArea + 'cm' + stringSup.innerHTML;


   displayData(serial, pentagonTitle, length)

   // common string
   serial += 1;

})

// ....................ellipse Area..................

document.getElementById('btn-ellipse').addEventListener('click', function () {

   // get the pentagon data using by id 

   const ellipseTitle = document.getElementById('ellipse-title').innerText;

   const ellipseInputFieldB = document.getElementById('eif-a').value;


   const ellipseInputFieldH = document.getElementById('eif-b').value;

   //    calculation
   const ellipseArea = 3.14* parseFloat(ellipseInputFieldB) * parseFloat(ellipseInputFieldH);

   // common string
   const length = ellipseArea + 'cm' + stringSup.innerHTML;


   displayData(serial, ellipseTitle, length)

   // common string
   serial += 1;

})


//   common function 

function displayData(serial, angleTitle, angleArea) {

   //    create inner html of table
   const container = document.getElementById('table-container');
   const tr = document.createElement("tr");
   tr.innerHTML = `
   
   <td>${serial}</td>
   <td>${angleTitle}</td>
   <td>${angleArea}</td>
   <td>${btn.innerText}</td>
   `;
   container.appendChild(tr);
}



//....................dynamic button-area.................

let btn = document.createElement("button");
btn.innerHTML = "Convert to m";
btn.id = "btnId"
btn.className = "btnClass"
btn.type = "submit";
btn.name = "convert";
btn.style.backgroundColor="red";



// superscript -Area
let stringSup = document.createElement("sup");
stringSup.innerHTML = '2';
