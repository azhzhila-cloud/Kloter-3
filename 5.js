let angka = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
let random = []
let random2 = []
let hitung = null

function randomize(jumlah) {
    // Mengambil data dari angka
    for (let index = 0; index < angka.length; index++) {
        let data = angka[index]
            // Mengambil nilai ganjil
        if (data % 2 == !0) {
            random.push(data)
        }
    }

    // looping sesuai randomize yang di input
    for (let index = 0; index < jumlah; index++) {
        // Acak angka ganjil
        var item = random[Math.floor(Math.random() * random.length)]
        random2.push(item)
        hitung += element
    }
    console.log(random2)
    console.log(hitung)
}