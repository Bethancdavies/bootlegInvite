document.addEventListener("DOMContentLoaded", function () {
  const revealCode = document.getElementById("reveal-code");
  const hiddenCode = document.getElementById("hidden-code");
  const hiddenCodeSection = this.getElementById("secret-message")
  const decryptButton = document.getElementById("decrypt-button");
  const shiftNumber = document.getElementById("shift-number");
  const encryptedDetails = document.querySelectorAll(".encrypted-details");
  const decryptedDetailsContainer = document.getElementById(
    "decrypted-details-container"
  );

  revealCode.addEventListener("click", function () {
    hiddenCode.style.display = "block";
  });

  decryptButton.addEventListener("click", function () {
    const shift = parseInt(shiftNumber.value);
    decryptedDetailsContainer.innerHTML = ""; // Clear previous decrypted details
    encryptedDetails.forEach((detail) => {
      const decryptedText = caesarCipherDecrypt(detail.textContent, shift);
      const decryptedParagraph = document.createElement("p");
      decryptedParagraph.textContent = decryptedText;
      decryptedDetailsContainer.appendChild(decryptedParagraph);
    });
    decryptedDetailsContainer.style.display = "block";
  });

  function caesarCipherDecrypt(text, shift) {
    shift = shift % 26; // Ensure the shift is within the range of 0-25
    if (shift == 24) { //if the number is the correct number, then show message block
        hiddenCodeSection.style.display = "block"; 
       encryptedDetails.forEach(detail => {
         detail.style.display = "none";        
 
       });
    }
    return text
      .split("")
      .map((char) => {
        if (char.match(/[a-z]/i)) {
          const code = char.charCodeAt(0);
          let shiftedCode = code - shift;
          if (code >= 65 && code <= 90) {
            if (shiftedCode < 65) shiftedCode += 26;
          } else if (code >= 97 && code <= 122) {
            if (shiftedCode < 97) shiftedCode += 26;
          }
          return String.fromCharCode(shiftedCode);
        }
        return char;
      })
      .join("");
  }
});
