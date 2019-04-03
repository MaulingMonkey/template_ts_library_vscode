addEventListener("load", function() {
    let e = document.getElementById("output") as HTMLDivElement | undefined;
    if (!e) return;
    e.textContent = mmk.example.hello_world();
});
