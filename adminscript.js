var songCounter = 0;

function counterReset() {
    songCounter = 0;
}

function addSongForm() {
    songCounter++;
    songContainer = document.getElementById("song-container");
    htmlString = htmlString = `<div class="add-song">
    <p class="song-p">Name</p>
    <input name="sname[${songCounter}]" class="fm-input" type="text"/>
    
    <p class="song-p">Genre</p>
    <input name="sgenre[${songCounter}]]" class="fm-input" type="text"/>		
    
    <p class="song-p">Duration</p>
    <input name="sdur[${songCounter}]]" class="fm-input" type="text"/>
    
    <p class="song-p">Artists</p>
    <input name="sarts[${songCounter}]]" class="fm-input" type="text"/></div>
    `;
    newElement = document.createElement("div");
    newElement.classList.add("add-song");
    newElement.innerHTML = htmlString;
    button = songContainer.children[songContainer.children.length - 2];
    songContainer.insertBefore(newElement, button);
}

function addSongForm() {
    if (songCounter >= 0) {
    
        songContainer = document.getElementById("song-container");
        lastSong = songContainer.children[songCounter];
        // songContainer.classList.
    
        songCounter--;
    }

}