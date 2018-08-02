const database = firebase.firestore()

$(document).ready(function() {

  var guestAmount = $('#guestNo');

  $('#cnt-up').click(function() {
    guestAmount.val(Math.min(parseInt($('#guestNo').val()) + 1, 20));
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
      $btn.text("CONFIRMED");
    } else {
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

function addBookingToDatabase(){
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
    tourGuide: 'Josue'
  }
  
  const bookingReference = database.collection('bookings')
  bookingReference.add(data)
  .then( res => {
    console.log('success!')
  })
  .catch( err => {
    console.log(err)
  })
}