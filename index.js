window.onload = () => {
    eminemAlbums()
    metallicaalbums()
    behemothAlbums()
  //DOM knytte bottom med function
    const eminemButton = document.getElementById("eminem-button")
    eminemButton.addEventListener("click", eminemAlbums)
    const metallicaButton = document.getElementById("metallica-button")
    metallicaButton.addEventListener("click", metallicaalbums)
    const behemothButton = document.getElementById("behemoth-button")
    behemothButton.addEventListener("click", behemothAlbums)
    const howManySongsButton = document.getElementById("how-many-songs-button")
    howManySongsButton.addEventListener("click", countSongs)
  }
  

  // puste  zminne do licznika 
  let eminemCounter = 0
  let metallicaCounter = 0
  let behemothCounter = 0
  
  // tworzenie kard do wyswietlenia w ciele 
  const createCard = (body, i) => {
    const albumCard = document.createElement("div") // tworzymy div
    albumCard.classList.add("col-12", "col-sm-12", "col-md-3", "col-lg-2", "p-2")
    albumCard.innerHTML = `<div class="card"> 
        <img src="${body.data[i].album.cover_big}" class="card-img-top img-fluid" >
        <div class="card-body">
          <h5 class="card-title">${body.data[i].title_short}</h5>
          <p class="album card-text">
              <b>Album:</b> ${body.data[i].album.title}
          </p>
          <p class="card-text">
              <b>Duration:</b> ${body.data[i].duration}sec 
          </p>
        </div>
      </div>`
    return albumCard
  }
  
  //function to generate Eminem list
  
  function eminemAlbums() {
    const eminemRow = document.getElementById("eminem-row")
    fetch("https://deezerdevs-deezer.p.rapidapi.com/search?q=eminem", {
      method: "GET",
      headers: {
        "x-rapidapi-key": "727e34e77cmsh746a91ecb9acf23p19fa3djsn87030c669d94",
        "x-rapidapi-host": "deezerdevs-deezer.p.rapidapi.com",
      },
    })
      .then((response) => response.json())
      // add one more then for body :

      .then((body) => {
        
        const ABCD = eminemCounter + 10
        for (eminemCounter; eminemCounter < ABCD; eminemCounter++) {
          eminemRow.appendChild(createCard(body, eminemCounter))
        }
      })
      .catch((err) => {
        console.error(err)
      })
  }
  
  
  
  function metallicaalbums() {
    const metallicaRow = document.getElementById("metallica-row")
    fetch("https://deezerdevs-deezer.p.rapidapi.com/search?q=Metallica", {
      method: "GET",
      headers: {
        "x-rapidapi-key": "727e34e77cmsh746a91ecb9acf23p19fa3djsn87030c669d94",
        "x-rapidapi-host": "deezerdevs-deezer.p.rapidapi.com",
      },
    })
      .then((response) => response.json())
      .then((body) => {
        const ABCD = metallicaCounter + 10 //licznik 
        
        for (metallicaCounter; metallicaCounter < ABCD; metallicaCounter++) {
          metallicaRow.appendChild(createCard(body, metallicaCounter))
        }
      })
      .catch((err) => {
        console.error(err)
      })
  }
  
  
  
  function behemothAlbums() {
    const behemothRow = document.getElementById("behemoth-row")
    fetch("https://deezerdevs-deezer.p.rapidapi.com/search?q=Behemoth", {
      method: "GET",
      headers: {
        "x-rapidapi-key": "727e34e77cmsh746a91ecb9acf23p19fa3djsn87030c669d94",
        "x-rapidapi-host": "deezerdevs-deezer.p.rapidapi.com",
      },
    })
      .then((response) => response.json())
      .then((body) => {
        const ABCD = behemothCounter + 10
        
        for (behemothCounter; behemothCounter < ABCD; behemothCounter++) {
          behemothRow.appendChild(createCard(body, behemothCounter))
        }
      })
      .catch((err) => {
        console.error(err)
      })
  }
  
  //counter
  
  const countSongs = () => {
    const albumParagraphs = document.getElementsByClassName("album")
    const listOfAlbums = []
    for (const album of albumParagraphs) {
      listOfAlbums.push(album.innerText)
    }
    const listOfUniqueAlbums = [...new Set(listOfAlbums)]
  
    console.log(listOfUniqueAlbums)
    let albumNumber = 0
    for (const album of listOfUniqueAlbums) {
      albumNumber++
    }
    const h3HowManySongs = document.getElementById("how-many-songs")
    h3HowManySongs.innerText = `There is a total of ${albumNumber} unique albums in the page`
  }