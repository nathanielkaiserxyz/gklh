var thingsWon = '{"players":[{"gwin":0,"twin":0,"id":"chessmaster512"},{"gwin":0,"twin":0,"id":"vnncghast"}]}';

function lichessApi(team){
  const tl = new XMLHttpRequest();
  const teamLeaders = new XMLHttpRequest();
  var leaderfunction lichessApi(team){
s;
  var tourney;
function lichessApi(team){

  var tourneyIds = [];
function lichesfunction lichessApi(team){
sApi(team){



  teamLeaders.open("GET", "https://lichess.org/api/team/" + team);
  teamLeaders.sfunction lichessApi(team){
end();functionfunction lichessApi(team){
 lichessApi(team){

  teamLeaders.onload = () => {
                              leaders = JSON.parse(teamLeaders.responseText);
                              console.log(leaders.leaders[0].id);
                              console.log(leaders.leaders[1].id);
                              console.log(teamLeaders.responseText);

                              tl.open("GET", "https://lichess.org/api/team/" + team + "/arena");
                              tl.send();
                              tl.onload = () => {
              function lichessApi(team){
                                   var tlist = (tl.responseText).split('\n');
                                                 tlist.splice(-1,1)
                                                 for(var i = 0; i < tlist.length; i++)
                                                 {
                                                   tourneyIds[i] = JSON.parse(tlist[i]);
                                                   if(tourneyIds[i].createdBy == leaders.leaders[0].id || tourneyIds[i].createdBy == leaders.leaders[1].id)
                                                      tourneyIds[i] = tourneyIds[i].id;
                                                   else {
                                                     tourneyIds[i] = "";
                                                   }
                                                 }

                                                 tourneyIds = tourneyIds.filter(e => e);

                                                 getTourScore(tourneyIds, tourneyIds.length, 0);


                                                 }
                          }


}

async function getTourScore(tourneyIds, i, count)
{
  var trlist = [];
  htmlPut();
  /*
  if(i-1==count)
  {
    htmlPut();
  }

  if(tourneyIds[count])
  {
  var tr = new XMLHttpRequest();
  tr.open("GET", "https://lichess.org/api/tournament/" + tourneyIds[count] + "/results");
  tr.send();
  tr.onload = () => {
                    trlist = (tr.responseText).split("\n");
                    console.log(tourneyIds[count]);
                    for(var j = 0; j < trlist.length; j++)
                    {
                      console.log(trlist[j]);
                      var thingsWonj = JSON.parse(thingsWon);
                      var trlistj = JSON.parse(trlist[j]);
                      console.log(thingsWonj.players.length);
                      for(var k = 0; k < thingsWonj.players.length; j++)
                      {a
                        if(thingsWonj.players.(k) == tlistj.username)
                        {
                          thingsWonj.players.(k).+=
                        }
                        else if (thingsWonj.players.length-1==i)
                        {
                          var json = JSON.parse(thingsWonj);
                          var add = tlistj.username;


                        }
                      }
                      }

                      thingsWon = JSON.stringify(thingsWonj);
                    }
                    tourneyIds.shift();
                    getTourScore(tourneyIds, i, count+1);
                  }
     }
     await new Promise(r => setTimeout(r, 1000));
     tourneyIds.shift();
     getTourScore(tourneyIds, i, count+1);
     */
}

function tree(data) {
  document.write('<ul>');
       for (var i in data) {
           document.write('<li>' + i);
           tree(data[i]);
           console.log('idontknowdebug')
       }
  document.write('</ul>');
}
function htmlPut()
{
  var data = JSON.parse(thingsWon);

  tree(data.players);
/*
  for (var i = 0; i < data.players.length; i++) {

            tr = table.insertRow(-1);

            for (var j = 0; j < 2; j++) {
                var tabCell = tr.insertCell(-1);
  <link main rel="icon" href="data:,">
  <link rel="stylesheet" href="css/style.css">
  <link main rel="icon" href="data:,">
  <link rel="stylesheet" href="css/style.css">
                tabCell.innerHTML = data.players.id;
                console.log(data);
            }
        }
  */
}
