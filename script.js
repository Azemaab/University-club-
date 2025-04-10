// Search functionality
const searchBar = document.querySelector('.search-bar');
const clubCards = document.querySelectorAll('.club-card');

searchBar.addEventListener('input', (e) => {
	const searchTerm = e.target.value.toLowerCase();
	clubCards.forEach((card) => {
		const title = card.querySelector('.club-title').textContent.toLowerCase();
		const description = card
			.querySelector('.club-description')
			.textContent.toLowerCase();
		card.style.display =
			title.includes(searchTerm) || description.includes(searchTerm)
				? 'block'
				: 'none';
	});
});

// Burger toggle
const burger = document.getElementById('burger');
const navLinks = document.getElementById('navLinks');

burger.addEventListener('click', () => {
	navLinks.classList.toggle('active');
});
