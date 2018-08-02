const database = firebase.firestore()

$(document).ready(function() {
  
  const currentUser = firebase.auth().currentUser
  if (!currentUser){
    document.querySelector('#error').innerHTML = 'Please Sign In First!'
    return
  }


window.onload = function(){
  getTourGuides()
  currentUser()
}

function getTourGuides(){
  // write some code to go get the tour guides from the database
  // then we're going to loop over all the tour guides
  // and display them on the page
  const query = database.collection('guides')
  
  query.get()
  .then( snapshot => {
    if (snapshot.size) {
      snapshot.forEach( doc => {
        let guide = doc.data() 
        displayTourGuideInfo(guide)
      })
    }
  })
}

function shortenDescription(description){
  if (description.length > 140) {
    return description.substring(0, 137) + '...'
  } else {
    return description
  }
}

function displayTourGuideInfo(guide){
  let descrip = shortenDescription(guide.description)
  let profImg
  if (!guide.imageURL) {
    profImg = 'fake_profile.png'
  } else {
    profImg = guide.imageURL
  }
  
  document.querySelector('#tour-guide-holder').innerHTML +=
  
  `
  <figure class="snip1336 hover">
    <img src="${bgImg}" alt="sample74" />
    <figcaption>
      <img src="${profImg}" alt="profile-sample2" class="profile" />
      <h2>${guide.name}<span>Tour Guide</span></h2>
      <p>${descrip}</p>
      <a href="bookform.html" class="info">Book A Tour With Me!</a>
    </figcaption>
  </figure>  
  `
}





// ===================================================
// ===================================================
// ===================================================
// ===================================================
// ===================================================
// ===================================================
// ===================================================
// ===================================================






 $(document).ready(function() {
   /* Navigation smooth scroll */
   $(function() {
     $('a[href*="#"]:not([href="#"])').click(function() {
       if (location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') && location.hostname == this.hostname) {
         var target = $(this.hash);
         target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
         if (target.length) {
           $('html, body').animate({
             scrollTop: target.offset().top - 30
           }, 1000);
           return false;
         }
       }
     });
   });

   /* Change menu background on scrolling */
   $(document).scroll(function() {
     if ($(document).scrollTop() > 100) {
       $("nav").addClass("navbar-scrolled");
     }
     else {
       $("nav").removeClass("navbar-scrolled");
     }
   });
 });
 