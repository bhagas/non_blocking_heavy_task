
function a(a,b){
    return new Promise((ya, tdk)=>{
        setTimeout(() => {
            let hasil = a* b;
            if(hasil >5){
                tdk('kegedean')
            }else{
                ya(hasil)
            }
          
        }, 1000);
    })
}

 function x() {
    a(2, 5).then((hasil)=>{
        console.log(hasil);
    }).catch((err)=>{
        console.log(err, 'ini error');
    }).finally(()=>{
        console.log('selalu jalan');
    })
}
x()


class Mahasiswa{
    // constructor(){
    //     this.a =0;
    //     this.b =0;
    // }

    static TambahIstri(){

    }
}

// let Mahasiswa2 = {
//     a:0,
//     b:0,
//     TambahIstri: () =>{
//         return this.a + this.b;
//     }
// }

// Mahasiswa2.TambahIstri()

// function Mahasiswa3() {
//     this.a =0;
//     this.TambahIstri = function() {
        
//     }
// }