// bikin menu makanan untuk dipilih pembeli
// lakukan cek harga di setiap menu yang dipilih
// lakukan cek kesehatan makanan


// menu makanan : burger, kebab, hotdog, corndog,  capcai, salad, soup daging, tumis kangkung
// menu minuman : susu, teh, air putih, kopi, jahe, pop ice (cooming soon)



// setelah memilih berikan harga dan hasil cek kesehatan makanan
// jika sudah lakukan pengkondisian apakah jadi memesan atau tidak

var ulangiPemesanan = true;
var usr = true;


while(ulangiPemesanan){

    var usrMakanan = prompt("pilih satu menu makanan dan minuman yang ada di menu berikut :\n-Menu makanan : burger, kebab, hotdog, corndog, capcai, salad, soup daging, tumis kangkung \n-Menu minuman : susu, teh, air putih, kopi, jahe, pop ice ")

        switch(usrMakanan){
        case "burger" :
        case "kebab" :
        case "hotdog" :
        case "corndog" :
            alert("Rp 10.000,00 \nini adalah makanan tidak sehat")
            break;
        case "salad" :
            alert("Rp 20.000,00 \nini adalah makanan sehat")
            break;
        case "soup daging" :
            alert("Rp 15.000,00 \nini adalah makanan sehat")
            break;
        case "tumis kangkung" :
            alert("Rp 10.000,00 \nini adalah makanan sehat")
            break;
        case "" :
            alert("anda memasukkan pesanan kosong");
            break;
        default :
            alert("tidak ada menu tersebut di restoran ini")
            break;
        
        }

        usr = confirm("apakah kamu jadi memesan?")

        if(usr === true){
            alert("KODE PEMBAYARAN = *****")
        }
        
        ulangiPemesanan = confirm("apakah anda mau memesan yang lain"); 
}
 
                
    
alert("terimakasih")
