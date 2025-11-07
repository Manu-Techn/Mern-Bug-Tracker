// Simple check to make sure title isn't empty
function validateBug(bug) {
    if (!bug.title || bug.title.trim() === '') return false;
    return true;
}

module.exports = validateBug;