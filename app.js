// chovy.com — render the feed of short (<=240 char) posts, terminal style.

const MAX_LEN = 240;

function escapeHtml(str) {
  return str
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;");
}

// Highlight inline shell snippets like `$ command` for a little terminal flavor.
function highlight(text) {
  return escapeHtml(text).replace(/(\$\s[^\n]+)/g, '<span class="sh">$1</span>');
}

function renderPost(post) {
  const text = (post.text || "").slice(0, MAX_LEN);
  return `
    <div class="post">
      <div class="meta"><span class="hash">#${post.id}</span> ${escapeHtml(post.date)} · ${text.length}/${MAX_LEN}</div>
      <div class="text">${highlight(text)}</div>
    </div>`;
}

async function loadFeed() {
  const feed = document.getElementById("feed");
  try {
    const res = await fetch("posts.json", { cache: "no-cache" });
    const posts = await res.json();
    posts.sort((a, b) => b.id - a.id);
    feed.innerHTML = posts.map(renderPost).join("");
  } catch (err) {
    feed.innerHTML = '<p class="line muted">error: could not load feed.log</p>';
    console.error(err);
  }
}

loadFeed();
