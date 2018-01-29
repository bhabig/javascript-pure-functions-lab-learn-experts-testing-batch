const episodes = [
  { id: 's06e01', title: 'The Red Woman' },
  { id: 's06e02', title: 'Home' },
  { id: 's06e03', title: 'Oathbreaker' },
  { id: 's06e04', title: 'Book of the Stranger' },
  { id: 's06e05', title: 'The Door' },
  { id: 's06e06', title: 'Blood of My Blood' },
  { id: 's06e07', title: 'The Broken Man' },
  { id: 's06e08', title: 'No One' },
  { id: 's06e09', title: 'Battle of the Bastards' },
];

const finaleEpisode = { id: 's06e10', title: 'The Winds of Winter' };

const addToPlaylist = (pl, ep) => [...pl, ep]

const getNextEpisodeInPlaylist = (e) => e[0];

const removeFromPlaylist = (pl, ep) => pl.filter(
  e => ep !== e
);

function bingeWatch (pl) {
  if (pl.length !== 0) {
    let ep = pl[0];
    let newPl = removeFromPlaylist(pl, ep);
    bingeWatch(newPl);
  }
  return "Please let there be more!";
}
