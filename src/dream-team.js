const CustomError = require("../extensions/custom-error");

module.exports = function createDreamTeam( members ) {
  
  if (!Array.isArray(members)) {
    return false;
  }

  let dreamTeamName = [];

  members.forEach(name => {
    if (typeof(name) === 'string'){
      dreamTeamName.push (name.trim().substring(0, 1).toUpperCase())
    }
  })
  
  return dreamTeamName.length > 0  ? dreamTeamName.sort().join('') : false
};
