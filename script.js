function apiCall(ids) {
  let container = document.querySelector(".container")
fetch(`https://db.ygoprodeck.com/api/v7/cardinfo.php?id=${ids.join(",")}`)
  .then((r) => r.json())
  .then((data) => data.data).then((cardArray) => {
    container.innerHTML = `<img class="atem" src="Atem Yugi.jpeg" alt="not found" />`
    for (let i = 0; i < cardArray.length; i++){
      let div = document.createElement("div")
      div.className = "card-box"
      div.innerHTML = `<img src="${cardArray[i].card_images[0].image_url}" alt="">`
      container.appendChild(div)
    }
  })
}

let magic = document.querySelector(".magician")

magic.onclick = ()=>{const ids = [
  46986414, 38033121, 70781052, 37267041,
  99789342,29436665, 1784686,
  10000000,10000010, 10000020,
];
apiCall(ids)}

let blue = document.querySelector(".blue-eyes")
blue.onclick = ()=>{const ids = [
  89631139,38517737,23995346,71413901,55410871,59822133,
  86240887,6556909,24696097,53347303,
  67831115
];
apiCall(ids)}