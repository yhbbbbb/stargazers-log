// fetch events.json and render starred repo list
async function loadStarredRepos() {
  try {
    const response = await fetch('events.json');
    const repos = await response.json();

    const listEl = document.getElementById('repo-list');

    repos.forEach(repo => {
      const li = document.createElement('li');
      li.innerHTML = `
        <div class="repo-name">${repo.owner}/${repo.repoName}</div>
        <div class="repo-desc">${repo.description}</div>
        <div class="repo-stats">⭐ Stars: ${repo.stars} | Starred at: ${new Date(repo.starredAt).toLocaleDateString()}</div>
      `;
      listEl.appendChild(li);
    });
  } catch (err) {
    console.error('Failed to load events.json', err);
    document.getElementById('repo-list').textContent = "Could not load repository data.";
  }
}

// run function on page load
loadStarredRepos();
