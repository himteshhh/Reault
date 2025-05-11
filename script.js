function checkResult() {
  const roll = document.getElementById("roll").value.trim();
  const mother = document.getElementById("mother").value.trim().toLowerCase();
  const school = document.getElementById("school").value.trim();

  // Replace with your friend's correct info
  const correctRoll = "1234567";
  const correctMother = "abc";
  const correctSchool = "99999";

  if (
    roll === correctRoll &&
    mother === correctMother &&
    school === correctSchool
  ) {
    document.getElementById("resultContainer").innerHTML = `
      <h3>Your Result:</h3>
      <img src="result.jpg" alt="Result" />
    `;
  } else {
    document.getElementById("resultContainer").innerHTML =
      "<p style='color:red;'>Incorrect information. Please try again.</p>";
  }
}