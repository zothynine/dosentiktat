import { sentences } from './data.js'

function toggleSentence(ev) {
  const item = ev.target
  console.info(`toggling ${item}`)
  item.classList.toggle("hidden")
}

function writeSentences(list) {
  if (!list) return;
  console.info("writing sentences …")

  sentences.forEach(sentence => {
    list.insertAdjacentHTML("beforeend", `<li>${sentence}</li>`)
    list.querySelector("li:last-child").addEventListener("click", toggleSentence)
  })

  return list
}

function init() {
  const list = document.querySelector("main ul")
  writeSentences(list)
}

window.addEventListener("DOMContentLoaded", init)
