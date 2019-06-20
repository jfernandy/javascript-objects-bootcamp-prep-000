var playlist = {eminem: "criminal"};

function updatePlaylist(playlist, artistName, songTitle) {
  return Object.assign({}, playlist, { [artistName]: songTitle})
}

function removeFromPlaylist(playlist, artistName, songTitle) {
  
}