const players = [
    {
        name: 'Vakho',
        team: 'Borussia',
        games: 4,
        goalsFor: 14,
        goalsAgainst: 4,
        points: 9,
    },
    {
        name: 'Dato',
        team: 'Barcelona',
        games: 4,
        goalsFor: 13,
        goalsAgainst: 3,
        points: 9,
    },
    {
        name: 'Roina',
        team: 'Milan',
        games: 4,
        goalsFor: 15,
        goalsAgainst: 5,
        points: 1,
    },
    {
        name: 'Tornike',
        team: 'Bayern',
        games: 4,
        goalsFor: 15,
        goalsAgainst: 5,
        points: 4,
    }
];

const table = document.getElementsByTagName('table')[0];

function render(p) {
    for(let i = 0; i < p.length; i++) {
        let tr = document.createElement('tr');
        table.tBodies[0].appendChild(tr);
        for(let k in p[i]) {
            let td = document.createElement('td');
            tr.appendChild(td);
            td.textContent = p[i][k];
        } 
    }
} 

function sortByPoints(p){
    function compareNumbers(a, b) {
        if(a.points < b.points) {
            return 1;
        } else {
            if (a.points === b.points) {
                if(a.goalsFor-a.goalsAgainst < b.goalsFor - b.goalsAgainst) {
                    return 1;
                } else {
                    if(a.goalsFor - a.goalsAgainst == b.goalsFor - b.goalsAgainst){
                        if(a.goalsFor < b.goalsFor) {
                            return 1;
                        } else {
                            return -1;
                        }
                    } else {
                        return -1;
                    }
                }
            } else {
                return -1;
            }
        }
    }
    p.sort(compareNumbers);
}

sortByPoints(players);
render(players);
