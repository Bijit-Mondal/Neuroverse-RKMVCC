const form = document.querySelector('#auth_form');
const registerButton = document.querySelector('.btn-auth');
registerButton.addEventListener('click', (event) => {
    event.preventDefault(); // prevent the default form submission behavior
    const hackerRankID = document.getElementById('hackerRankID').value.trim();
    const urlParams = new URLSearchParams(window.location.search);
    const id = urlParams.get('id');
    const email = urlParams.get('email');
    const manualCheckbox = document.getElementById('manualCheckbox').checked;
    if(hackerRankID!=='' && manualCheckbox){
        const options = {
            method: 'POST',
            headers: {'content-type': 'application/json'},
            body: 'https://hackerrank.com/bijit567'
          };
          
          fetch(`https://neuroverse.bijit.xyz/api/v1/finalist/hackerRankID/${id}/${email}`, options)
          .then(response => {
            return response.json();
          })
          .then(response => {
            if(response.status == 200){
              $("div#form_modal").toggleClass("active");
            }else{
              console.log(response.message);
            }
          })
          .catch(err => alert(err));
    }else {
        alert("All Details are not given properly")
    }
});