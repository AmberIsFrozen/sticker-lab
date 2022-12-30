const res = document.getElementById("res");
const src = document.getElementById("src");
const search = document.getElementById("search");
try {
    search.addEventListener('input', callback);
} catch (e) {
    fallback();
}


function callback() {
    try {
        let term = search.value.toLowerCase();
        res.textContent = '';
        for (let img of src.children) {
            var keywords = img.getAttribute("keyword").split(",");
            for (let keyword of keywords) {
                if (keyword != null && (keyword.trim().length == 0 || keyword.toLowerCase().startsWith(term))) {
                    res.append(img.cloneNode());
                    break;
                }
            }
        }
    } catch (e) {
        fallback();
    }
}

function fallback() {
    src.style.display = 'block';
    res.style.display = 'none';
    search.style.display = 'none';
}
callback();