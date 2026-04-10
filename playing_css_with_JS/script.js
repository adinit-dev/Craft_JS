
const input = document.querySelectorAll(".control input");

function handleChange(){
    const suffix = this.dataset.sizing || '';
    document.documentElement.style.setProperty(`--${this.name}`, this.value + suffix);
}

input.forEach(input => {
    input.addEventListener('change', handleChange)
});
input.forEach(input => {

 input.addEventListener('mousemove', handleChange)
});



