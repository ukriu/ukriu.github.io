fetch('posts.json')
    .then(response => response.json())
    .then(data => {
        data.sort((a, b) => b.order - a.order);
        displayPosts(data);
    })
    .catch(error => console.error('Error fetching posts:', error));

function displayPosts(posts) {
    const container = document.getElementById('posts-container');
    if (!container) return;

    container.innerHTML = '';

    posts.forEach(post => {
        const hrBefore = document.createElement('hr');
        const hrAfter = document.createElement('hr');
        const article = document.createElement('article');
        article.className = 'post';

        const authorDiv = document.createElement('div');
        authorDiv.className = 'author';
        authorDiv.style.fontSize = '0.8em';
        authorDiv.style.display = 'flex';
        authorDiv.style.alignItems = 'center';

        if (post.author || post.author_pfp) {
            const authorLink = document.createElement('a');
            authorLink.href = post.author_link || '#';
            authorLink.target = '_blank';
            authorLink.style.textDecoration = 'none';
            authorLink.style.display = 'flex';
            authorLink.style.alignItems = 'center';

            if (post.author_pfp) {
                const authorPfp = document.createElement('img');
                authorPfp.src = post.author_pfp;
                authorPfp.alt = post.author || 'Profile picture';
                authorPfp.style.width = '1.2em';
                authorPfp.style.height = '1.2em';
                authorLink.appendChild(authorPfp);
            }

            if (post.author) {
                const authorName = document.createElement('span');
                authorName.textContent = post.author;
                authorName.style.marginLeft = '0.5em';
                authorLink.appendChild(authorName);
            }

            authorDiv.appendChild(authorLink);
        }

        if (post.timestamp) {
            if (post.author || post.author_pfp) {
                const separator = document.createElement('span');
                separator.textContent = ' | ';
                separator.style.marginLeft = '0.5em';
                authorDiv.appendChild(separator);
            }

            const timestamp = document.createElement('span');
            timestamp.className = 'timestamp';
            timestamp.textContent = post.timestamp;
            timestamp.style.marginLeft = '0.5em';
            authorDiv.appendChild(timestamp);
        }

        if (authorDiv.hasChildNodes()) {
            article.appendChild(authorDiv);
        }

        if (post.title) {
            const title = document.createElement('h2');
            title.textContent = post.title;
            title.style.fontSize = '1.8em';
            title.style.marginTop = '0.2em';
            title.style.marginBottom = '0.4em';
            article.appendChild(title);
        }

        if (post.description) {
            const description = document.createElement('p');
            description.className = 'description';
            description.innerHTML = post.description.replace(/\n/g, '<br>');
            article.appendChild(description);
        }

        if (post.thumbnail) {
            const thumbnail = document.createElement('img');
            thumbnail.src = post.thumbnail;
            thumbnail.alt = post.title || 'Thumbnail';
            article.appendChild(thumbnail);
        }

        container.appendChild(hrBefore);
        container.appendChild(article);
        container.appendChild(hrAfter);
    });
}