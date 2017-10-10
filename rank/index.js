let fs = require("fs");

let ranksolution = (words, solution) => {
  let solutionArr = solution.split(" ");
  let rank = 0;
  for(let i = 0; i < solutionArr.length; i++) {
    if(words.indexOf(solutionArr[i]) !== -1) {
      rank++;
    }
  }
  return rank;
}

let rankSolutions = (solutions) => {
  let ranks = {};
  let contents = fs.readFileSync("./rank/dict.txt", 'utf8');
  let words = contents.split("\n");
  for (let i = 0; i < solutions.length; i++) {
    ranks[solutions[i]] = ranksolution(words, solutions[i]);
  }
  return ranks;
}

let getMostLikely = (solutions) => {
  let ranks = rankSolutions(solutions);
  let largest = {value: "", rank: 0};
  for(var key in ranks) {
    if(ranks[key] > largest.rank) {
      largest = {value: key, rank: ranks[key]};
    }
  }
  return largest.value;
}

module.exports = {
  rankSolutions,
  ranksolution,
  getMostLikely
}
