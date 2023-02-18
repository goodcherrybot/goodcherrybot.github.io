function updateSideBySide() {
  let trial = $("#SideBySide_Select").val();
  let vidDiv = $("#SideBySide");
  vidDiv.empty();
  const agentNames = {
    "human": "Human",
    "rl": "RL Agent (ours)",
    "ct100": "100Hz Controller"
  };
  for (let agent of ["human", "ct100", "rl"]) {
    vidDiv.append(`<div class="column is-one-third"><video autoplay loop muted><source src="media/vids/trials/${agent}_trial${trial}.mp4" ` + 
                  `type="video/mp4"/>Video of trial ${trial}.</video>${agentNames[agent]}</div>`);
  }
}

$(document).ready(function() {
    // Check for click events on the navbar burger icon
    $(".navbar-burger").click(function() {
      // Toggle the "is-active" class on both the "navbar-burger" and the "navbar-menu"
      $(".navbar-burger").toggleClass("is-active");
      $(".navbar-menu").toggleClass("is-active");
    });

    $("#SideBySide_Select").on("change", updateSideBySide);
    updateSideBySide();
})

