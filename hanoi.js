function hanoi(n, from, to, tmp) {
if(n === 0) {
    // 0秒になったらおしまい
    return;
    }else{
    // + n - 1 次の円盤を柱 A から Bに移す
    hanoi(n - 1, from, tmp, to);
    // 最後の一枚の円盤をを柱 B から　柱　Cへ移す
    console.log(from + " から " + to + " へ移す ");
    hanoi(n - 1, tmp, to, from);
    }
}
hanoi(3, "A", "B", "C");