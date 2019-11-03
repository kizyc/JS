
var data = JSON.parse(localStorage.getItem('listData')) || [];
var list = document.querySelector('.list');
var addBtn = document.querySelector('.btn');
var delBtn = document.querySelector('.delBtn');

// 監聽與更新
addBtn.addEventListener('click', addData);
list.addEventListener('click', toggleDone);
updateList(data);

//加入列表，並同步更新網頁與 localstorage
function addData(e) {
    e.preventDefault();
    var txt = document.querySelector('.input-item').value;
    var todo = {
        content: txt
    };
    data.push(todo);
    updateList(data);
    localStorage.setItem('listData', JSON.stringify(data));
}
// 更新網頁內容
function updateList(items) {
    str = '';
    var len = items.length;
    for (var i = 0; len > i; i++) {
        str += '<li><a href="#" data-index=' + i + ' />刪除</a> <span>' + items[i].content + '</span></li>';
    }
    list.innerHTML = str;
}

//刪除
function toggleDone(e) {
    e.preventDefault();
    if (e.target.nodeName !== 'A') { return };
    var index = e.target.dataset.index;
    data.splice(index, 1);
    localStorage.setItem('listData', JSON.stringify(data));
    updateList(data);
}