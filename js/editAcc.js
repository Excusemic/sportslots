
// // document.getElementById("editFirstName").placeholder = `First name: ${}`;
// auth.onAuthStateChanged(function(user){
//     if(user){
//       db.collection("users")
//       .where('email', '==', user.email)
//       .get()
//       .then(snapshot => {
//         snapshot.forEach(doc => {
//             nameOfUser.innerHTML=doc.data().name;
//             playerAvatar.src = `players/${doc.data().img}`
//         })
  
//       })
//       .catch(function(error) {
//         console.log("Error getting documents: ", error);
//       });
      
//     }else{
//       document.querySelector('.signed-in-content-nav').style.display="none";
//       document.querySelector('.login-signup').style.display="block";
//       document.querySelector('.signed-in-menu').style.display="none";
//       document.querySelector('.new-to-ss').style.display="block";
//     }
//   });