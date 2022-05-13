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

  document.querySelector("header").addEventListener("click", event => {
    const action = event?.target?.className
    action === "bigger"
      ? list.classList.add("big")
      : list.classList.remove("big")
  })
}

window.addEventListener("DOMContentLoaded", init)

// deploy with surge  --domain ddkt.surge.sh
