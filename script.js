document.getElementById('recommendation-form').addEventListener('submit', function(e) {
    e.preventDefault();

    const name = e.target.name.value;
    const message = e.target.message.value;
    const recommendation = document.createElement('blockquote');

    recommendation.textContent = `${message} - ${name || 'Anonymous'}`;

    document.getElementById('recommendations-list').appendChild(recommendation);

    alert('Thank you for your recommendation!');

    e.target.reset();
});