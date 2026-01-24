import React, { useEffect, useState } from "react";

export default function RepoList({ username }) {
  const [repos, setRepos] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch(`https://api.github.com/users/${username}/repos?sort=updated&per_page=6`)
      .then((res) => res.json())
      .then(setRepos)
      .catch(() => setRepos([]))
      .finally(() => setLoading(false));
  }, [username]);

  return (
    <div className="projects">
      <h2>Latest Projects</h2>
      {loading ? (
        <p>Loading projects...</p>
      ) : (
        <div className="repo-list">
          {repos.map((repo) => (
            <div className="repo-card" key={repo.id}>
              <h3>
                <a href={repo.html_url} target="_blank" rel="noopener noreferrer" className="repo-link">
                  {repo.name}
                </a>
              </h3>
              <p>{repo.description || "No description provided."}</p>
              <div className="repo-meta">
                <span>★ {repo.stargazers_count}</span>
                <span>Updated: {new Date(repo.updated_at).toLocaleDateString()}</span>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}