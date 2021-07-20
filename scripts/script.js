
let dataarr = [];
let str = [];


const browser_url = `https://swapi.dev/api/people`;

fetch(browser_url).then((response) => {
    // console.log(response);
    return response.json();
}).then((data) => {
    dataarr.push(data);
    dataarr[0].results.forEach(element => {
        let json = {
            name: element.name,
            height: element.height,
            mass: element.mass,
            hair_color: element.hair_color,
            gender: element.gender,
            skin_color: element.skin_color,
            eye_color: element.eye_color,
            birth_year: element.birth_year
        }
        str.push(json);
    });
    rerender(str);
});




function rerender(data) {
    let st = "";
    str.forEach((element, index) => {
        st += `<div class="card">
        <div class="container">
        <div>NAME:${element.name}</div><hr>
        <div>GENDER:${element.gender}</div><hr>
        <div>WEIGHT:${element.mass}</div><hr>
        <div>HEIGHT:${element.height}</div><hr>
        <div>BIRTH YEAR:${element.birth_year}</div><hr>
        <div>HAIR COLOR:${element.hair_color}</div><hr>
        <div>SKIN COLOR:${element.skin_color}</div><hr>
        <div>EYE COLOR:${element.eye_color}</div><hr>
        <button onclick="delete1(${index})">DELETE</button>
        </div>
        
    </div>`;
    });
    if(str.length == st.length && st.length!=""){
        setTimeout(() => {
            document.querySelector('.star').innerHTML = st;
        }, 2000);
    }
    else if(data.length != ""){
        document.querySelector('.star').innerHTML = st;
    }
    else{
        document.querySelector('.star').innerHTML = "No Data Found";
    }
}

function delete1(index) {
    str.splice(index, 1);
    rerender(str);
}