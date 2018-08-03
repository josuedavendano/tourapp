const database = firebase.firestore()
const guideInfo = {
  name: null,
  id: null
}

$(document).ready(function() {
  const currentUrl = window.location.href
  console.log(currentUrl)
  const urlArray = currentUrl.split("?")
  const parameters = urlArray[1]
  console.log(parameters)
  const bothParameters = parameters.split("&")
  console.log(bothParameters)
  const idParam = bothParameters[0]
  const nameParam = bothParameters[1]
  
  const guideId = idParam.split("=")[1]
  const guideName = nameParam.split("=")[1].replace("%20", " ")
  
  guideInfo.name = guideName 
  guideInfo.id = guideId
  
  var guestAmount = $('#guestNo');

  $('#cnt-up').click(function() {
    guestAmount.val(Math.min(parseInt($('#guestNo').val()) + 1, 1000));
  });
  $('#cnt-down').click(function() {
    guestAmount.val(Math.max(parseInt($('#guestNo').val()) - 1, 1));
  });

  $('.btn').click(function() {
    const currentUser = firebase.auth().currentUser
    if (!currentUser) {
      document.querySelector('#error').innerHTML = 'You Must Sign In First!'
      return
    }
    var $btn = $('.btn');

    $btn.toggleClass('booked');
    $('.diamond').toggleClass('windup');
    $('form').slideToggle(300);
    $('.linkbox').toggle(200);

    if ($btn.text() === "BOOK NOW") {
      $btn.text("CONFIRMED with "+guideInfo.name);
    }
    else {
      $btn.text("BOOK NOW");
    }
  })
})

const submitButton = document.querySelector('.btn')
submitButton.addEventListener('click', e => {
  addBookingToDatabase()
})


const loc = document.querySelector('#location')
const guestNumber = document.querySelector('#guestNo')
const arrival = document.querySelector('#arrival')
const departure = document.querySelector('#departure')

function addBookingToDatabase() {
  const currentUser = firebase.auth().currentUser
  if (!currentUser) {
    // document.querySelector('#error').innerHTML = 'You Must Sign In First!'
    return
  }

  const userId = firebase.auth().currentUser.uid


  const data = {
    id: userId,
    location: loc.value,
    guests: guestNumber.value,
    arrivalDate: arrival.value,
    departureDate: departure.value,
    tourGuideName: guideInfo.name,
    tourGuideId: guideInfo.id
  }

  const bookingReference = database.collection('bookings')
  bookingReference.add(data)
    .then(res => {
      console.log('success!')
    })
    .catch(err => {
      console.log(err)
    })
}
