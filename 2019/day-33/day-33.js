const main = document.querySelector('[data-js="main"]');

const soldiers = [
  { id: 1, player: "Soldier 1", kills: 18, deaths: 17, assist: 8, team: 1 },
  { id: 2, player: "Soldier 2", kills: 10, deaths: 22, assist: 7, team: 2 },
  { id: 3, player: "Soldier 3", kills: 12, deaths: 10, assist: 9, team: 1 },
  { id: 4, player: "Soldier 4", kills: 20, deaths: 10, assist: 9, team: 1 },
  { id: 5, player: "Soldier 5", kills: 12, deaths: 18, assist: 5, team: 2 },
  { id: 6, player: "Soldier 6", kills: 15, deaths: 10, assist: 5, team: 2 }
];

const getTeamScore = (soldiers, team) => soldiers
  .filter(player => player.team === team)
  .map(detail => detail.kills * 100 + detail.assist * 20)
  .reduce((acc, score) => acc + score, 0);

const getSquad = (soldiers, team) => soldiers.filter(player => player.team === team);

const getTotal = (soldiers, team, item) => getSquad(soldiers, team).reduce((acc, items) => acc + items[item], 0);

const getBody = (soldiers, team) => getSquad(soldiers, team).map(
  soldier => `<tr><td>${soldier.player}</td><td>${soldier.kills}</td><td>${soldier.deaths}</td><td>${soldier.assist}</td></tr>`
).join('');

const getFoot = team => `<tr><td>Total</td><td>${getTotal(soldiers, team, 'kills')}</td><td>${getTotal(soldiers, team, 'deaths')}</td><td>${getTotal(soldiers, team, 'assist')}</td></tr>`;

main.innerHTML = `
  <h2 class="subtitle">Guerrilla Squad <span>Score ${getTeamScore(soldiers, 1)}</span></h2>
  <table class="table color-1">
    <thead><tr><th>Player</th><th>Kills</th><th>Deaths</th><th>Assist</th></tr></thead>
    <tbody>
      ${getBody(soldiers, 1)}
    </tbody>
    <tfoot>
      ${getFoot(1)}
    </tfoot>
  </table>

  <h2 class="subtitle">Special Forces <span>Score ${getTeamScore(soldiers, 2)}</span></h2>
  <table class="table color-2">
    <thead><tr><th>Player</th><th>Kills</th><th>Deaths</th><th>Assist</th></tr></thead>
    <tbody>
    ${getBody(soldiers, 2)}
    </tbody>
    <tfoot>
      ${getFoot(2)}
    </tfoot>
  </table>
`;
