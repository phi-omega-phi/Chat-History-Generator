function addHistory() {
    let input = document.getElementById('input');
    let avatar = input.querySelector('input[avatar]').value;
    let text = input.querySelector('input[text]').value;
    let box = document.getElementById('left');
    box.innerHTML += '' +
    '<div class="chat-piece" onclick="this.remove()">' +
    '   <img class="avatar" src="' + avatar + '">' +
    '   <img class="strange_thing" src="https://s2.ax1x.com/2019/10/19/Kn60JJ.png">' +
    '   <div class="border">' +
    '       <span class="text">' + text + '</span>' +
    '   </div>' +
    '</div>';
    input.querySelector('input[text]').value = '';
}