// converting hex into rgb using slice method
function rgbcolor() {
    let color = document.getElementById('color-picker').value
    let r = parseInt(color.substr(1, 2), 16)
    let g = parseInt(color.substr(3, 2), 16)
    let b = parseInt(color.substr(5, 2), 16)
    document.getElementById('red').value = r;
    document.getElementById('green').value = g;
    document.getElementById('blue').value = b;
}

function mycolor() {
    let color = document.getElementById('color-picker').value;
    let preview = document.getElementById('preview');
    document.getElementById('hex-code').value = color;
    document.getElementById('color-preview').style.backgroundColor = color;
    preview.classList.add('outline-[' + color + ']');
}

function closeFunction() {
    document.getElementById('container').style.display = "none";
}

function hideFunction() {
    let hide = document.getElementById('container');
    if (hide.classList.contains('h-fit')) {
        hide.classList.remove('h-fit'),
        hide.classList.add('h-[44px]')
        document.getElementById('title').style.opacity = "0",
        document.getElementById('preview').style.opacity = "0",
        document.getElementById('hex').style.opacity = "0",
        document.getElementById('rgb').style.opacity = "0"
    }

    else {
        hide.classList.remove('h-[44px]'),
        hide.classList.add('h-fit'),
        document.getElementById('title').style.opacity = "100",
        document.getElementById('preview').style.opacity = "100",
        document.getElementById('hex').style.opacity = "100",
        document.getElementById('rgb').style.opacity = "100"
    }



}


document.getElementById('color-picker').addEventListener('input', mycolor);
document.getElementById('color-picker').addEventListener('input', rgbcolor);



