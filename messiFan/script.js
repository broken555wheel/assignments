function displayFavoriteMoment() {
    const favoriteMomentInput = document.getElementById('favoriteMoment');
    const favoriteMomentDisplay = document.getElementById('favoriteMomentDisplay');

    const moment = favoriteMomentInput.value;

    if (moment) {
        favoriteMomentDisplay.textContent = `Your favorite Messi moment: ${moment}`;
    } else {
        favoriteMomentDisplay.textContent = "Please enter a moment.";
    }
}