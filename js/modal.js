/*
 Open an image in a modal window
 */
const galleryImgId = document.getElementsByClassName('photos')
const modalBackground = document.getElementById('modal')
const modalHtml = []
const country = document.getElementById('country').textContent.toLowerCase()
const textContent = document.getElementsByClassName('photo-text')

// addModalElements(): Add divs for modal windows
function addModalElements() {
  for (let i = 0; i < galleryImgId.length; i++) {
    let j = i + 1
    const src = galleryImgId[i].getAttribute('src')
    const text = textContent[i].textContent
    modalHtml.push('<img class="modal-image" id="modal-image' + j + '" src="' + src + '" alt="">' + '<p class="modal-text" id="modal-text' + j + '">' + text + '</p>')
  }
  modalHtml.push('<div id="close">close</div>')
  modalBackground.insertAdjacentHTML('afterend', modalHtml.join(' '))
}

// openmodal(): Show a modal window
function openModal() {
  for (let i = 0; i < galleryImgId.length; i++) {
    const modalImgId = 'modal-image' + (i + 1)
    const modalTxtId = 'modal-text' + (i + 1)
    const modalImg = document.getElementById(modalImgId)
    const modalTxt = document.getElementById(modalTxtId)
    const photoTxt = document.getElementsByClassName('photo-text')
    const closeButton = document.getElementById('close')

    // Show a modal window when an image is clicked
    photoTxt[i].addEventListener('click', () => {
      modalBackground.style.display = 'block'
      modalImg.style.display = 'block'
      modalTxt.style.display = 'block'
      closeButton.style.display = 'block'

      // Add an eventlistener to close the modal window
      closeModal(modalImgId, modalTxtId)
    })
  }
}

// hideElements(): Hide the modal window
function hideElements(closeImg, closeTxt) {
  const button = document.getElementById('close')
  closeImg.style.display = 'none'
  modalBackground.style.display = 'none'
  closeTxt.style.display = 'none'
  button.style.display = 'none'

  // Add an eventlistener to open the modal window
  openModal()
}

// closeModal(): Call hideElements() when the area 
// around the modal window image is clicked
function closeModal(closeImgId, closeTxtId) {
  const closeImg = document.getElementById(closeImgId)
  const closeTxt = document.getElementById(closeTxtId)
  modalBackground.addEventListener('click', () => {
    hideElements(closeImg, closeTxt)
  })
  const closeButton = document.getElementById('close')
  closeButton.addEventListener('click', () => {
    hideElements(closeImg, closeTxt)
  })
}

// Create divs for the modal window
addModalElements()
// modal the gallery image
openModal()
