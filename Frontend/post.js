const API_BASE = "https://facebook-clone-3j2d.onrender.com";

function switchTab(tab) {
    document.querySelectorAll(".tab-btn").forEach((btn) => {
        btn.classList.toggle("active", btn.dataset.tab === tab);
    });

    document.getElementById("uploadPanel").classList.toggle("hidden", tab !== "upload");
    document.getElementById("linkPanel").classList.toggle("hidden", tab !== "link");
}

function setStatus(message, type = "") {
    const status = document.getElementById("statusMsg");
    status.textContent = message;
    status.className = `status-msg ${type}`;
}

function isVideoUrl(url) {
    return /\.(mp4|webm|mov)(\?|$)/i.test(url);
}

function renderMedia(url) {
    if (!url) return "";

    const fullUrl = url.startsWith("http") ? url : `${API_BASE}${url}`;

    if (isVideoUrl(fullUrl)) {
        return `<video controls src="${fullUrl}"></video>`;
    }

    return `<img src="${fullUrl}" alt="Post media">`;
}

function renderPost(post) {
    const card = document.createElement("article");
    card.className = "post-item";

    const time = post.createdAt
        ? new Date(post.createdAt).toLocaleString()
        : "Just now";

    card.innerHTML = `
        <div class="post-meta">
            <div class="avatar">f</div>
            <div>
                <strong>You</strong>
                <span>${time}</span>
            </div>
        </div>
        ${post.caption ? `<p class="post-caption">${escapeHtml(post.caption)}</p>` : ""}
        ${post.image ? `<div class="post-media">${renderMedia(post.image)}</div>` : ""}
    `;

    return card;
}

function escapeHtml(text) {
    const div = document.createElement("div");
    div.textContent = text;
    return div.innerHTML;
}

function clearForm() {
    document.getElementById("caption").value = "";
    document.getElementById("imageInput").value = "";
    document.getElementById("imageUrl").value = "";
    document.getElementById("fileLabel").textContent = "Choose photo or video";
    document.getElementById("filePreview").innerHTML = "";
    document.getElementById("filePreview").classList.add("hidden");
    document.getElementById("linkPreview").innerHTML = "";
    document.getElementById("linkPreview").classList.add("hidden");
}

async function loadPosts() {
    try {
        const res = await fetch(`${API_BASE}/api/posts/posts`);
        const posts = await res.json();

        const container = document.getElementById("postContainer");
        container.innerHTML = "";

        if (!posts.length) {
            container.innerHTML = `<p class="empty-feed">No posts yet. Create your first one above!</p>`;
            return;
        }

        posts.forEach((post) => container.appendChild(renderPost(post)));
    } catch (error) {
        console.error(error);
        setStatus("Could not load posts. Is the server running?", "error");
    }
}

async function addPost() {
    const caption = document.getElementById("caption").value.trim();
    const file = document.getElementById("imageInput").files[0];
    const imageUrl = document.getElementById("imageUrl").value.trim();
    const usingLink = !document.getElementById("linkPanel").classList.contains("hidden");

    if (!caption && !file && !(usingLink && imageUrl)) {
        setStatus("Add a caption, upload a file, or paste a media link.", "error");
        return;
    }

    setStatus("Posting...", "loading");

    try {
        const formData = new FormData();
        formData.append("caption", caption);

        if (file) {
            formData.append("image", file);
        } else if (usingLink && imageUrl) {
            formData.append("imageUrl", imageUrl);
        }

        const res = await fetch(`${API_BASE}/api/posts/post`, {
            method: "POST",
            body: formData,
        });

        const data = await res.json();

        if (!res.ok || !data.success) {
            setStatus(data.message || "Failed to create post.", "error");
            return;
        }

        clearForm();
        setStatus("Post created successfully!", "success");
        await loadPosts();
    } catch (error) {
        console.error(error);
        setStatus("Network error. Please try again.", "error");
    }
}

document.getElementById("imageInput").addEventListener("change", (event) => {
    const file = event.target.files[0];
    const preview = document.getElementById("filePreview");
    const label = document.getElementById("fileLabel");

    if (!file) {
        preview.innerHTML = "";
        preview.classList.add("hidden");
        label.textContent = "Choose photo or video";
        return;
    }

    label.textContent = file.name;
    preview.classList.remove("hidden");

    const objectUrl = URL.createObjectURL(file);
    preview.innerHTML = file.type.startsWith("video/")
        ? `<video controls src="${objectUrl}"></video>`
        : `<img src="${objectUrl}" alt="Preview">`;
});

document.getElementById("imageUrl").addEventListener("input", (event) => {
    const url = event.target.value.trim();
    const preview = document.getElementById("linkPreview");

    if (!url) {
        preview.innerHTML = "";
        preview.classList.add("hidden");
        return;
    }

    preview.classList.remove("hidden");
    preview.innerHTML = isVideoUrl(url)
        ? `<video controls src="${url}"></video>`
        : `<img src="${url}" alt="Link preview" onerror="this.parentElement.innerHTML='<p class=\\'preview-error\\'>Could not preview this link</p>'">`;
});

loadPosts();
