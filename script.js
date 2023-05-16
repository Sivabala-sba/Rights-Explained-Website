// JavaScript code for expanding the rule boxes
const viewMoreButtons = document.querySelectorAll('.view-more');
const searchInput = document.querySelector('#search');

/*viewMoreButtons.forEach(button => {
  button.addEventListener('click', () => {
    const ruleBox = button.parentElement;
    const fullArticle = ruleBox.querySelector('.full-article');
    fullArticle.style.display = 'block';
  });
});*/

viewMoreButtons.forEach(button => {
  button.addEventListener('click', () => {
    const ruleBox = button.parentElement;
    const fullArticle = ruleBox.querySelector('.full-article');
    ruleBox.classList.toggle('expanded');
    fullArticle.style.display = ruleBox.classList.contains('expanded') ? 'block' : 'none';
  });
});

// JavaScript code for filtering rules by hashtags
searchInput.addEventListener('input', () => {
  const searchTerm = searchInput.value.toLowerCase();
  const ruleBoxes = document.querySelectorAll('.rule-box');

  ruleBoxes.forEach(ruleBox => {
    const hashtags = ruleBox.querySelector('.full-article').textContent.toLowerCase();
    
    if (hashtags.includes(searchTerm)) {
      ruleBox.style.display = 'block';
    } else {
      ruleBox.style.display = 'none';
    }
  });
});

// JavaScript code for shuffling the rule boxes on page refresh
const rulesContainer = document.querySelector('#rules-container');
const ruleBoxes = Array.from(document.querySelectorAll('.rule-box'));

function shuffleArray(array) {
  for (let i = array.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]];
  }
  return array;
}

function renderShuffledRules() {
  const shuffledRuleBoxes = shuffleArray(ruleBoxes);
  shuffledRuleBoxes.forEach(ruleBox => {
    rulesContainer.appendChild(ruleBox);
  });
}

renderShuffledRules();
