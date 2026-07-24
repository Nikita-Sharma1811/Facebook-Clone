async function signup() {
  const email = document.getElementById("email").value;
  const password = document.getElementById("password").value;

  if (!email || !password) {
    alert("Please fill all fields ❗");
    return;
  }

  const res = await fetch("http://localhost:3000/api/signup", {
    method: "POST",
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify({ email, password })
  });

  const data = await res.text();
  alert(data);
}


// ✅ LOGIN FUNCTION (MISSING THA)
async function login() {
  const email = document.getElementById("email").value;
  const password = document.getElementById("password").value;

  if (!email || !password) {
    alert("Please fill all fields ❗");
    return;
  }

  const res = await fetch("http://localhost:3000/api/login", {
    method: "POST",
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify({ email, password })
  });

   const data = await res.text();
  if (data === "Login successful ✅") {
        // 👉 LOGIN KE BAAD REDIRECT
        window.location.href = "home.html";  // 👈 YE LINE IMPORTANT HAI
    } else {
        alert(data);
    }
}

