const init = () => {
  const inputForm = document.querySelector('form');
  inputForm.addEventListener('submit', (e)=>{
    e.preventDefault();
    const input = document.querySelector('#searchByID');
    // console.log(input.value);

    fetch(`http://localhost:3000/movies/${input.value}`) // Use interpolation to get a specific value 
    .then(function (response){
        return response.json();
    })
    .then(function(data){
        const title = document.querySelector('#movieDetails h4');
        const summary = document.querySelector('#movieDetails p');

        title.innerText = data.title;
        summary.innerText = data.summary;
    })
  })
}

document.addEventListener('DOMContentLoaded', init);