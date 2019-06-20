var playlist = {eminem: "criminal", beyonce: "single ladies"};

function updatePlaylist(playlist, artistName, songTitle) {
  playlist[artistName] = songTitle
}

function removeFromPLaylist(playlist, artistName) {
  delete (playlist.artistName)
  return playlist
}