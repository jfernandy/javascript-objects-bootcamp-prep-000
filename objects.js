var playlist = {eminem: "criminal", beyonce: "single ladies"};

function updatePlaylist(playlist, artistName, songTitle) {
  playlist[artistName] = songTitle
}

delete playlist.beyonce;

playlist;