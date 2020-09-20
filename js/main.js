




$('#recipeCarousel').carousel({
  interval: 10000
})

$('.carousel .carousel-item').each(function(){
    var minPerSlide = 3;
    var next = $(this).next();
    if (!next.length) {
    next = $(this).siblings(':first');
    }
    next.children(':first-child').clone().appendTo($(this));
    
    for (var i=0;i<minPerSlide;i++) {
        next=next.next();
        if (!next.length) {
        	next = $(this).siblings(':first');
      	}
        
        next.children(':first-child').clone().appendTo($(this));
      }
});

let db = firebase.firestore();
let auth = firebase.auth();
let createAccForm = document.getElementById('create-acc-form');
let createAccMobile = document.querySelector('.mobile-create-acc-btn')
let signInForm = document.getElementById('signin-form');
let signInFormMobile = document.getElementById('signin-form-mobile');
let logOutBtn = document.querySelectorAll('.logout-btn')
let nameOfUser = document.querySelector('.nameOfUser')
let loginMobileBtn = document.querySelector('.login-mobile')
let playerAvatar = document.getElementById('playerAvatar');



createAccForm.addEventListener('submit', function(e) {
  e.preventDefault();
  let fName = document.getElementById('fName').value;
  let lName = document.getElementById('lName').value;
  let pass = document.getElementById('pass').value;
  let email = document.getElementById('email').value;
  let bDay = new Date(this.bDay.value);
  let bDayTimeStamp = firebase.firestore.Timestamp.fromDate(bDay)
 
  let newUser = {
    email: email,
    name: fName,
    surname: lName,
    img: 'avatar-default.png',
    bDay: bDayTimeStamp
  }
  if (fName == "" || lName == "" || pass == "" || email == "") {
    alert('Please fill all the inputs');
  } else {
    db.collection('users')
    .where('email', '==', email)
    .get()
    .then(snapshot => {
      if (snapshot.empty) {
        db.collection("users").doc().set(newUser)
        .then(e => {
          console.log('Added new user')
        })
        .catch(function(error) {
          console.error("Error adding user: ", error);
        });
        let promise = auth.createUserWithEmailAndPassword(email, pass);
        promise.then(e => {
          alert("Signed Up")
          window.open("index.html", "_self")
        })
        .catch(e => alert(e.message));	


      } else {
        alert('Another used already registered with this email')
      }
    })
    .catch(e => alert('there was an error making acc', e))


	}
})
createAccMobile.addEventListener('click', (e) => {
  signInOverlay.style.display = "block";
})
loginMobileBtn.addEventListener('click', (e) => {
  signInFormMobile.classList.toggle('expandList')
})


signInForm.addEventListener('submit', (e) => {
  let email = document.getElementById('emailLogin').value
  let pass = document.getElementById('passLogin').value
  e.preventDefault();
  if (email == "" || pass == "") {
    alert('Please fill all the inputs');
  } else {
    let promise = auth.signInWithEmailAndPassword(email, pass);
    promise.then(e => {
      if(!alert('Loged in!')) {
        window.location.reload()
      } 
    })
    .catch(e => alert(e.message));
    
    
  }

})
signInFormMobile.addEventListener('submit', (e) => {
  let email = document.getElementById('emailLoginMobile').value
  let pass = document.getElementById('passLoginMobile').value
  e.preventDefault();
  if (email == "" || pass == "") {
    alert('Please fill all the inputs');
  } else {
    let promise = auth.signInWithEmailAndPassword(email, pass);
    promise.then(e => {
      if(!alert('Loged in!')) {
        window.location.reload()
      } 
    })
    .catch(e => alert(e.message));
    
    
  }

})
logOutBtn.forEach(btn => {
  btn.addEventListener('click', () => {
		auth.signOut();
		alert("Signed Out");
})
})


auth.onAuthStateChanged(function(user){

  if(user){
    document.querySelector('.login-signup').style.display="none";
    document.querySelector('.signed-in-content-nav').style.display="block";
    document.querySelector('.new-to-ss').style.display="none";
    document.querySelector('.signed-in-menu').style.display="block";
    document.querySelector('.footer-container').classList.remove('side-menu')
    document.querySelector('.notification-div').classList.remove('notification-div-hide')
    db.collection("users")
    .where('email', '==', user.email)
    .get()
    .then(snapshot => {
      snapshot.forEach(doc => {
          nameOfUser.innerHTML=doc.data().name;
          playerAvatar.src = `players/${doc.data().img}`
          document.getElementById("playerImgEditProfile").src = `players/${doc.data().img}`

          
      })

    })
    .catch(function(error) {
      console.log("Error getting documents: ", error);
    });
    
  }else{
    document.querySelector('.footer-container').classList.add('side-menu')
    document.querySelector('.notification-div').classList.add('notification-div-hide')
    document.querySelector('.footer-container').style.display="none";
    document.querySelector('.signed-in-content-nav').style.display="none";
    document.querySelector('.login-signup').style.display="block";
    document.querySelector('.signed-in-menu').style.display="none";
    document.querySelector('.new-to-ss').style.display="block";
  }
});











