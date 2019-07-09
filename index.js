/* main js for sudoreal.github.io */

function getParameterByName(name, url) {
    // modified, if "dir" is null then it returns index.
    if (!url) url = window.location.href;
    name = name.replace(/[\[\]]/g, "\\$&");
    var regex = new RegExp("[?&]" + name + "(=([^&#]*)|&|#|$)"),
        results = regex.exec(url);
    if (!results) return 'index';
    if (!results[2]) return 'index';
    return decodeURIComponent(results[2].replace(/\+/g, " "));
}

var sitePath = getParameterByName('dir');

console.log('DEBUG: new path initialized: '+ sitePath);

function loadContent(loc) {
    /* loads content from json manifest files */
    //if (!loc) loc = 'index';
    alert(loc);

}

loadContent(sitePath);

let spans = document.querySelectorAll('.word span');
spans.forEach((span, idx) => {
    span.addEventListener('click', (e) => {
        e.target.classList.add('active');
    });
    span.addEventListener('animationend', (e) => {
        e.target.classList.remove('active');
    });
    
    // Initial animation
    setTimeout(() => {
        span.classList.add('active');
    }, 750 * (idx+1))
});
