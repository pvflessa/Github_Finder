//Init github class

const github = new Github
//Init UI class

const ui = new UI;

//Search Input

const searchUser = document.querySelector('#searchUser')


searchUser.addEventListener('keyup', (e) =>{



//Get input text

const userText = e.target.value

if(userText !== ''){
   // Make http call
   github.getUser(userText)
    .then(data => {
      if(data.profile.message === 'Not Found') {
        // Show alert
        ui.showAlert('User not found', 'alert alert-danger')
      } else {
        // Show profile
        ui.showProfile(data.profile);
        ui.showRepos(data.repos);
        console.log(data.repos)
      }
    })
  } else {
    // Clear profile
    ui.clearProfile()

  }

})
