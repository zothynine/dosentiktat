function init() {

  document.querySelector("body").addEventListener('click', event => {
    const target = event.target
    const action = target
                && target.dataset
                && target.dataset.size

    // toggle font-size
    if (action) {
      action === 'big'
        ? document.body.classList.add('big')
        : document.body.classList.remove('big')
    }


    // hide show sentence
    if (target.nodeName.toLowerCase() === 'li') {
      target.classList.toggle('hidden')
    }
  })
}

window.addEventListener('DOMContentLoaded', init)

// deploy with:
// surge  --domain ddkt.surge.sh
