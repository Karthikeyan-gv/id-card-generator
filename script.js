function generate(params) {

    

    let name=document.getElementById("name").value
    localStorage.setItem("name",name)

    let rollno=document.getElementById("rollno").value
    localStorage.setItem("rollno",rollno)

    let dept=document.getElementById("dept").value
    localStorage.setItem("dept",dept)

    let batch=document.getElementById("batch").value
    localStorage.setItem("batch",batch)

    // let d=document.getElementById("d").value
    // let h=document.getElementById("h").value
    const option=document.querySelector("input[name='radio']:checked").value
    localStorage.setItem("d",option)

    let dob=document.getElementById("dob").value
    localStorage.setItem("dob",dob)

    let blood=document.getElementById("blood").value
    localStorage.setItem("blood",blood)

    let address=document.getElementById("address").value
    localStorage.setItem("address",address)

    let phno1=document.getElementById("phno1").value
    localStorage.setItem("phno1",phno1)

    let phno2=document.getElementById("phno2").value
    localStorage.setItem("phno2",phno2)

    let inputimg=document.getElementById("img")
    let file=inputimg.files[0]
    let reader=new FileReader()
    reader.onload=(e)=>{
        let img=e.target.result
        localStorage.setItem("img",img)
        window.location.href="idcard.html"
    }
    reader.readAsDataURL(file)

    window.location.href="idcard.html"

}

function clearstorage(params) {
    setTimeout(()=>{
        localStorage.clear();
    },60000)
}
clearstorage()
