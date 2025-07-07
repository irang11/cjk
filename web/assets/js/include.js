<script>
  window.addEventListener("DOMContentLoaded", () => {
    fetch("components/header.html")
      .then(res => res.text())
      .then(data => document.getElementById("header").innerHTML = data);

    fetch("components/footer.html")
      .then(res => res.text())
      .then(data => document.getElementById("footer").innerHTML = data);

    // 연도 자동 업데이트
    const yearSpan = document.getElementById("current-year");
    if (yearSpan) yearSpan.textContent = new Date().getFullYear();
  });
</script>
