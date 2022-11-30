const subBtn = document.querySelector('#flatBtn')
const formFlat = document.querySelector('[data-formFlat]')

subBtn.addEventListener('click', async (event) => {
    event.preventDefault();
    const adress = formFlat.adress.value;
    const photo = formFlat.photo.value;
    const price = formFlat.price.value;
    const size = formFlat.size.value;
    const floor = formFlat.floor.value;
    const response = await fetch('/form/flat', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({ adress, photo, price, size, floor })
    });
    console.log(response.status);
    if (response.status === 200) {
        const div = document.createElement('div');
        div.innerText = 'Спасибо, ваш голос учтен';
        event.target.parentElement.append(div);
        const modal = `<div class="modal" tabindex="-1">
  <div class="modal-dialog">
    <div class="modal-content">
      <div class="modal-header">
        <h5 class="modal-title">Modal title</h5>
        <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
      </div>
      <div class="modal-body">
        <p>Modal body text goes here.</p>
      </div>
      <div class="modal-footer">
        <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
        <button type="button" class="btn btn-primary">Save changes</button>
      </div>
    </div>
  </div>
</div>`

    }
})