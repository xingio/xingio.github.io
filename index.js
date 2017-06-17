// 宣告一個函式，使其能產生 start 到 end 範圍的隨機數字
var random = function(start, end) {
    return Math.floor(Math.random() * (end - start + 1)) + start
}

$('#random').on('click', function() {

    // 取得使用者輸入的 n 值
    var n = Number($('#n').val());

    // 宣告陣列，目的是記錄 n 個隨機數字
    var data = [];

    // 執行迴圈跑 n 次，將產生隨機 1到49中的一個數字，並且 push 到 data 陣列中
    for (var i = 1; i <= n; i++) {
        data.push(random(1, 49));
    }

    // 將顯示數字的 item 先清空
    $('div#data').empty();

    // 執行迴圈跑 data.length 次數
    for (var i = 0; i < data.length; i++) {
        // 在記憶體建立 <div class="item"></div> 的DOM元件
        $item = $('<div>').attr('class', 'item').text(data[i]);
        // 在記憶體建立 <div class="col-3"></div> 的DOM元件
        $div = $('<div>').attr('class', 'col-3');

        // 將 $item 放到 $div 裡面，即變成 $div 的內容
        // <div class="col-3">
        //   <div class="item"></div>
        // </div>
        $div.append($item);

        // 再把 $div 放到 div#data 內，畫面就能顯示一個數字出來
        $('div#data').append($div);
    }
})