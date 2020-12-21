let garage = [];

/*
Do not change newCar for base mode!
*/
function newCar(yearInput, makeInput, modelInput){
  console.log('in newCar:', yearInput, makeInput, modelInput);
  const newCarObject = {
    year: yearInput,
    make: makeInput,
    model: modelInput
  }
  garage.push(newCarObject);
  return true;
} // end newCar

$( document).ready( readyNow );

function readyNow(){
  console.log('jQ');
  $( '#addCarButton').on('click', addCar)
 $( '#addCarButton').on('click', displayCars)
}

function addCar(){
  console.log('in addCar');
  let yearInput = $( '#yearInputIn').val();
  let makeInput = $( '#makeInputIn').val();
  let modelInput = $( '#modelInputIn').val();
  newCar( yearInput, makeInput, modelInput );
   $( '#yearInputIn').val( '' );
    $( '#makeInputIn').val( '' );
    $( '#modelInputIn').val( '' );
  }

  //let yearInput = $( '#yearInputIn').val();
  //let makeInput = $( '#makeInputIn').val();
  // let modelInput = $( '#modelInputIn').val()
function displayCars(){
  console.log('in displayCars');
  let el = $('#carsOut');
  el.empty();
  for(car of garage){
    el.append(`<li>` + car.year +' / ' + car.make + ' / ' + car.model + `</li>` )
  }

}
