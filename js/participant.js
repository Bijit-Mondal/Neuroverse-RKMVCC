const form = document.querySelector('#auth_form');

const registerButton = document.querySelector('.btn-auth');
registerButton.addEventListener('click', (event) => {
  event.preventDefault(); // prevent the default form submission behavior
  
  const firstName = document.getElementById('FirstName').value.trim();
  const lastName = document.getElementById('LastName').value.trim();
  const email = document.getElementById('email').value.trim();
  const phone = document.getElementById('phone').value.trim();
  const semester = document.getElementById('semester').value.trim();
  const roll = document.getElementById('roll').value.trim();
  const stream = document.getElementById('stream').value.trim();
  const manualCheckbox = document.getElementById('manualCheckbox').checked;

  if (firstName !== '' && lastName !== '' && email !== '' && phone !== '' && semester !== '' && roll !== '' && stream !== '' && manualCheckbox) {
    const options = {
        method: 'POST',
        headers: {'content-type': 'application/json'},
        body: JSON.stringify({
          email: email,
          firstName: firstName,
          lastName: lastName,
          stream: stream,
          phone: phone,
          semester: semester,
          roll: roll
        })
    };
    fetch('https://neuroverse.bijit.xyz/api/v1/participant/create', options)
      .then(response => {
        return response.json();
      })
      .then(response => {
        if(response.status == 200){
          $("div#form_modal").toggleClass("active");
        }else{
          alert(response.message);
        }
      })
      .catch(err => alert(err));
  } else {
    alert("All Details are not given properly")
  }
})