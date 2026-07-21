(function () {
  "use strict";

  var form = document.getElementById("notifyForm");
  var note = document.getElementById("notifyNote");
  var FORMSPREE_ID = "meeyzkdp";

  form.addEventListener("submit", function (e) {
    e.preventDefault();
    var email = form.querySelector('input[name="email"]').value;
    fetch("https://formspree.io/f/" + FORMSPREE_ID, {
      method: "POST",
      headers: { "Accept": "application/json", "Content-Type": "application/json" },
      body: JSON.stringify({
        email: email,
        subject: "Auditools waitlist",
        source: "Auditools hub"
      })
    })
      .then(function (r) {
        if (r.ok) {
          note.textContent = "✓ You're on the list. We'll email when the next audit drops.";
          note.style.color = "var(--good)";
        } else {
          note.textContent = "Couldn't subscribe — try again.";
          note.style.color = "#ef4444";
        }
      })
      .catch(function () {
        note.textContent = "Couldn't subscribe — try again.";
        note.style.color = "#ef4444";
      });
    form.reset();
  });
})();
