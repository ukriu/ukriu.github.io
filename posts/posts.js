async function fetchPosts() {
    try {
        const response = await fetch('../posts/posts.json');
        const data = await response.json();
        data.sort((a, b) => b.order - a.order);
        displayPosts(data);
    } catch (error) {
        console.error('Error fetching posts:', error);
    }
}

function displayPosts(posts) {
    const container = document.getElementById('posts-container');
    if (!container) return;
    container.innerHTML = '';

    posts.forEach(post => {
        const textBoxClass = (post.author === 'ukriu' || post.author === 'ukriuu' || post.author === 'ukrio' || post.author === 'ukrioo') ? 'text-box-owner' : 'text-box';
        const textBox = document.createElement('div');
        textBox.className = textBoxClass;

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
                authorPfp.style.marginRight = '0.5em';
                authorPfp.loading = 'lazy';
                authorLink.appendChild(authorPfp);
            }

            if (post.author) {
                const authorName = document.createElement('span');
                authorName.textContent = post.author;
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
            title.style.fontSize = '1.6rem';
            title.textContent = post.title;
            article.appendChild(title);
        }

        if (post.description) {
            const description = document.createElement('p');
            description.className = 'description';
            description.style.marginTop = '0.3em';
            description.style.marginBottom = '0.1em';

            let formattedDescription = post.description
                .replace(/\*\*(.*?)\*\*/g, '<strong>$1</strong>') // Bold
                .replace(/\*(.*?)\*/g, '<em>$1</em>') // Italic
                .replace(/\`(.*?)\`/g, '<code>$1</code>') // Code
                .replace(/\[([^\]]+)\]\((https?:\/\/[^\)]+)\)/g, '<a href="$2">$1</a>') // Masked links
                .replace(/\n/g, '<br>'); // Line breaks

            description.innerHTML = formattedDescription;
            article.appendChild(description);
        }

        if (post.thumbnail) {
            const thumbnail = document.createElement('img');
            thumbnail.src = post.thumbnail;
            thumbnail.alt = post.title || 'Thumbnail';
            thumbnail.loading = 'lazy';
            thumbnail.style.maxWidth = '100%';
            article.appendChild(thumbnail);
        }

        const postNumber = document.createElement('span');
        postNumber.textContent = `Post Number: ${post.order}`;
        postNumber.style.fontStyle = 'italic';
        article.appendChild(postNumber);
        textBox.appendChild(article);
        container.appendChild(textBox);
        container.appendChild(document.createElement('br'));
    });
}

fetchPosts();
