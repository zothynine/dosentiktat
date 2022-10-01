const sentences = [
  "Peter hat Gregor mit dem Ball am Kopf getroffen.",
  "Wir brauchen noch Mehl für den Kuchen.",
  "Sie treffen sich jede Woche bei ihren Nachbarn.",
  "Simone weint, weil sie ihre Hose zerrissen hat.",
  "Das Brot ist schon hart.",
  "Lisa gießt jeden Tag in Omas Zimmer die Blumen.",
  "Roland trifft sich morgen mit seinen Freunden.",
  "Sei nicht so frech!",
  "Das war wirklich eine Gemeinheit!",
  "Mir war langweilig, da habe ich Steine in den See geworfen."
];

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
    const action = event && event.target && event.target.className
    action === "bigger"
      ? list.classList.add("big")
      : list.classList.remove("big")
  })
}

window.addEventListener("DOMContentLoaded", init)

// deploy with:
// surge  --domain ddkt.surge.sh
