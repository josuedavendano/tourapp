// const database = firebase.firestore()
// const auth = firebase.auth()

$(document).ready(function() {

// window.onLoad = function() {

  $('.btn-lg').click(function() {
    const currentUser = firebase.auth().currentUser
    if (!currentUser) {
      document.querySelector('#error').classList.remove('pull-up')    
      document.querySelector('#error').innerHTML = '<h1 style="color:red">You Must Sign In First!</h1>'
      return
    }
    // var $btn = $('.btn');
    else{
      document.querySelector('#error').classList.add('pull-up')
      document.querySelector('#error').innerHTML = `
        <div style="background-color:transparent !important;"class="row">
            <div class="col-lg-4 col-md-4 col-sm-4 col-xs-4">
                <p id="welcomeUser"> Welcome, ${currentUser.displayName}</p>
                <img src="https://comps.canstockphoto.ca/cute-boy-cartoon-vector-clipart_csp45578506.jpg" alt="Josue Avendano" class="img-circle img-responsive center-block" id="avatar">
            </div>
            <div class="col-lg-4 col-md-4 col-sm-4 col-xs-4">
                <form>
                    <div class="form-group">
                        <label for=fullName>Full Name</label>
                        <input type="text" class="form-control" id="fullName" value=${currentUser.displayName}>
                    </div>
                    <div class="form-group">
                        <label for=email>Email</label>
                        <input type="email" class="form-control" id="email" value="${currentUser.email}">
                    </div>
                    <div class="form-group ">
                        <label for=birthday>Birthday</label>
                        <input type="date" class="form-control" id="birthday">
                    </div>
                    <div class="row mt-5">
                        <div class="col">
                            <button type="button" class="btn btn-primary btn-block">Save Changes</button>
                        </div>
                        <div class="col">
                            <button type="button" class="btn btn-default btn-block">Cancel</button>
                        </div>
                    </div>
                </form>

            </div>
            <div class="col-lg-4 col-md-4 col-sm-4 col-xs-4">
                <label>Logistics</label>
                <button type="button" class="btn btn-default btn-block">Manage Your Bookings</button>
            </div>
        </div>
        `
    }
        var $btn = $('.btn');
  })
})
//       const currentUser = firebase.auth().currentUser
//       if (!currentUser) {
//         document.querySelector('#error').innerHTML = 'Please Sign In First!'
//         return
//       }
//       else(){
//           document.querySelector('#error').innerHTML = `
//                 <div class="row">
//             <div class="col-lg-4 col-md-4 col-sm-4 col-xs-4">
//                 <p id="welcomeUser"> Welcome, USER</p>
//                 <img src="https://comps.canstockphoto.ca/cute-boy-cartoon-vector-clipart_csp45578506.jpg" alt="Josue Avendano" class="img-circle img-responsive center-block" id="avatar">
//             </div>
//             <div class="col-lg-4 col-md-4 col-sm-4 col-xs-4">
//                 this is the profile settings
//                 <form>
//                     <div class="form-group">
//                         <label for=fullName>Full Name</label>
//                         <input type="text" class="form-control" id="fullName">
//                     </div>
//                     <div class="form-group">
//                         <label for=email>Email</label>
//                         <input type="email" class="form-control" id="email">
//                     </div>
//                     <div class="form-group">
//                         <label for=pass>Password</label>
//                         <input type="password" class="form-control" id="pass">
//                     </div>
//                     <div class="form-group ">
//                         <label for=birthday>Birthday</label>
//                         <input type="date" class="form-control" id="birthday">
//                     </div>
//                     <div class="row mt-5">
//                         <div class="col">
//                             <button type="button" class="btn btn-primary btn-block">Save Changes</button>
//                         </div>
//                         <div class="col">
//                             <button type="button" class="btn btn-default btn-block">Cancel</button>
//                         </div>
//                     </div>
//                 </form>

//             </div>
//             <div class="col-lg-4 col-md-4 col-sm-4 col-xs-4">
//                 <label>Logistics</label>
//                 <button type="button" class="btn btn-default btn-block">Manage Your Bookings</button>
//             </div>
//         </div>
//         `
//         }
//       })
// })

    // window.onload = function(){

    //   getTourGuides()
    // }

    // function getTourGuides(){
    //   // write some code to go get the tour guides from the database
    //   // then we're going to loop over all the tour guides
    //   // and display them on the page
    //   const query = database.collection('guides')

    //   query.get()
    //   .then( snapshot => {
    //     if (snapshot.size) {
    //       snapshot.forEach( doc => {
    //         let guide = doc.data() 
    //         displayTourGuideInfo(guide)
    //       })
    //     }
    //   })
    // }

    // function shortenDescription(description){
    //   if (description.length > 140) {
    //     return description.substring(0, 137) + '...'
    //   } else {
    //     return description
    //   }
    // }

    // function displayTourGuideInfo(guide){
    //   let descrip = shortenDescription(guide.description)
    //   let profImg
    //   if (!guide.imageURL) {
    //     profImg = 'fake_profile.png'
    //   } else {
    //     profImg = guide.imageURL
    //   }

    //   document.querySelector('#tour-guide-holder').innerHTML +=

    //   `
    //   <figure class="snip1336 hover">
    //     <img src="${bgImg}" alt="sample74" />
    //     <figcaption>
    //       <img src="${profImg}" alt="profile-sample2" class="profile" />
    //       <h2>${guide.name}<span>Tour Guide</span></h2>
    //       <p>${descrip}</p>
    //       <a href="bookform.html" class="info">Book A Tour With Me!</a>
    //     </figcaption>
    //   </figure>  
    //   `
    // }





    // ===================================================
    // ===================================================
    // ===================================================
    // ===================================================
    // ===================================================
    // ===================================================
    // ===================================================
    // ===================================================






    // $(document).ready(function() {
    //   /* Navigation smooth scroll */
    //   $(function() {
    //     $('a[href*="#"]:not([href="#"])').click(function() {
    //       if (location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') && location.hostname == this.hostname) {
    //         var target = $(this.hash);
    //         target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
    //         if (target.length) {
    //           $('html, body').animate({
    //             scrollTop: target.offset().top - 30
    //           }, 1000);
    //           return false;
    //         }
    //       }
    //     });
    //   });

    //   /* Change menu background on scrolling */
    //   $(document).scroll(function() {
    //     if ($(document).scrollTop() > 100) {
    //       $("nav").addClass("navbar-scrolled");
    //     }
    //     else {
    //       $("nav").removeClass("navbar-scrolled");
    //     }
    //   });
    // });