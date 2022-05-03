import { sentences } from './data.js'

function toggleSentence(ev) {
  const item = ev.target
  if (item.nodeName.toLowerCase() !== "span") return;
  console.info(`toggling ${item}`)
  item.classList.toggle("hidden")
}

function writeSentences(list) {
  if (!list) return;
  console.info("writing sentences …")

  sentences.forEach(sentence => {
    list.insertAdjacentHTML("beforeend", `<li><span>${sentence}</span></li>`)
    list.querySelector("li:last-child span").addEventListener("click", toggleSentence)
  })

  return list
}

function init() {
  const list = document.querySelector("main ul")
  writeSentences(list)
}

window.addEventListener("DOMContentLoaded", init)
