document.addEventListener("DOMContentLoaded", () => {
    // Antwort anzeigen
    document.querySelectorAll(".show-answer").forEach((button) => {
      button.addEventListener("click", () => {
        const answer = document.createElement("p");
        answer.textContent = "Das ist die Antwort zur Frage.";
        answer.classList.add("answer-text");
        button.after(answer);
        button.disabled = true;
      });
    });
  
    // Lesezeichen umschalten
    document.querySelectorAll(".bookmark").forEach((btn) => {
      btn.addEventListener("click", () => {
        btn.classList.toggle("active");
      });
    });
  });
  