const database = firebase.firestore()

window.onload = function(){
  getTourGuides()
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
        displaySingleTourGuide(guide)
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

function displaySingleTourGuide(guide){
  const bgImages = [
    'https://s3-us-west-2.amazonaws.com/s.cdpn.io/331810/sample87.jpg',
    'https://s3-us-west-2.amazonaws.com/s.cdpn.io/331810/sample74.jpg',
    'https://s3-us-west-2.amazonaws.com/s.cdpn.io/331810/sample69.jpg'
  ]
  let descrip = shortenDescription(guide.description)
  let rand = Math.floor(Math.random() * bgImages.length)
  let bgImg = bgImages[rand]
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
      <h2>${guide.name.split("-")[0]}<span>Tour Guide</span></h2>
      <p>${descrip}</p>
      <a href="bookform.html?guideID=${guide.userID}&guide_name=${guide.name}" class="info">Book A Tour With Me!</a>
    </figcaption>
  </figure>  
  `
}