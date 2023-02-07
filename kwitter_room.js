const firebaseConfig = {
      apiKey: "AIzaSyDxsTFcKH9dfpFwDPevui0HTAyPmo4KJSY",
      authDomain: "kwittersocialwebsite.firebaseapp.com",
      projectId: "kwittersocialwebsite",
      storageBucket: "kwittersocialwebsite.appspot.com",
      messagingSenderId: "176201963955",
      appId: "1:176201963955:web:6e3df0064c653d528753c6"
    };

function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
       Room_names = childKey;
      //Start code

      //End code
      });});}
getData();