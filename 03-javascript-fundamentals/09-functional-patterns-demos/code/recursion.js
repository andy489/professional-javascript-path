// Basic recursion — function calls itself with a smaller number
function countdown(number) {
  console.log(number);

  if (number === 0) {
    return;
  }

  countdown(number - 1);
}

countdown(3);

// Infinite recursion warning — no progress toward a stopping condition
function brokenCountdown(number) {
  console.log(number);

  // Do not call this as written — it will recurse until the call stack overflows
  // brokenCountdown(number);
}

// Nested data — each team can contain more teams
const organization = {
  name: "Company",
  teams: [
    {
      name: "Engineering",
      teams: [
        { name: "Platform", teams: [] },
        { name: "Developer Experience", teams: [] }
      ]
    },
    {
      name: "Product",
      teams: []
    }
  ]
};

// Recursion over nested data — base case is reached when teams array is empty
function printTeamNames(team, indentation = "") {
  console.log(`${indentation}${team.name}`);

  for (const childTeam of team.teams) {
    printTeamNames(childTeam, `${indentation}. `);
  }
}

printTeamNames(organization);