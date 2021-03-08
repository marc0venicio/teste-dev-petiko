function setup() {
    // Write your code here.
    document.querySelectorAll('.remove')
  .forEach(button => 
    button.addEventListener('click', () => button.parentElement.remove())
  )

}


document.body.innerHTML = `
<div class="image">
  <img src="image2.jpg" alt="First">
  <button class="remove">X</button>
</div>
<div class="image">
  <img src="image1.jpg" alt="Second">
  <button class="remove">X</button>
</div>`;

setup();

$(".remove").get(0).click();
console.log(document.body.innerHTML);