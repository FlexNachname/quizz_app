// Antwort anzeigen
document.addEventListener("DOMContentLoaded", () => {
  document.querySelectorAll(".show-answer").forEach((button) => {
    button.addEventListener("click", () => {
      const answer = document.createElement("p");
      answer.textContent = "Antwort zur Frage.";
      answer.classList.add("answer-text", "fade-in");
      button.after(answer);
      button.disabled = true;

      // Nach 10 Sekunden: ausblenden und entfernen
      setTimeout(() => {
        answer.classList.remove("fade-in");
        answer.classList.add("fade-out");

        // Nach der Animation: löschen & Button reaktivieren
        setTimeout(() => {
          answer.remove();
          button.disabled = false;
        }, 1000); // Dauer des fade-out
      }, 1000);
    });
  });


  // Lesezeichen umschalten
  document.querySelectorAll(".bookmark").forEach((btn) => {
    btn.addEventListener("click", () => {
      btn.classList.toggle("active");
    });
  });
});
