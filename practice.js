
let searchinput=document.querySelectorAll("#myinput")[0];

var contest=[];

// searchinput.addEventListener("input",(e)=>{
//     const value=e.target.value;
//     contest.forEach((item)=>{
//       if(item.name.includes(value) || item.site.includes(value)){
//         let s=item.site;
//         let b=document.querySelectorAll(".card")
//         b.forEach((item)=>{
//           if(!item.classList.contains(s)){
//             // item.classList.toggle('hide');
//             // console.log(item.classList);
//             item.style.display="none";
//           }
//           else item.style.display="block";
//       })
//     }
//     // console.log(contest);
//   })
// })

// function filterout(str){
//   let buttons=document.querySelectorAll(".codeforces");
//   buttons.forEach((button)=>{
//     button.classList.add("blue","red");
//   })
//   console.log(buttons);
//   location.reload();
//   let p=fetch("https://kontests.net/api/v1/all");
// p.then((response)=>{
//     return response.json();
// }).then((contests)=>{
//   let arr=Array.from(contests);
//   let ihtml='';
//   let urls=["https://images.yourstory.com/cs/images/companies/codechef-1592821643695.jpg?fm=auto&ar=1:1&mode=fill&fill=solid&fill-color=fff","https://bookface-images.s3.amazonaws.com/logos/d0ee664b5d927c7f395fd14fbb7e337dc5b84430.png","https://media.licdn.com/dms/image/C510BAQH9HO8sfdUS6w/company-logo_200_200/0/1565976260956?e=2147483647&v=beta&t=RaD9bQUZGwnNPOPLbUdRhc7Ibzq21aknrWian7cv1bg","https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQw4uPMuD_PbFkrvOyKHlKgcJOTPHKRPYuR2g&usqp=CAU","https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRZH2i-vuT81pR40_3buQPFe0jCSnOKNI9mSg&usqp=CAU","https://cdn.cdo.mit.edu/wp-content/uploads/sites/67/2021/01/0_zuhXdNAIUoxEem4-.png"];
//     // [codechef,hackerrank,codeforces,atcoder,hackerearth,LeetCode]
//     const num={
//         "CodeChef": 0,
//         "HackerEarth" :4,
//         "AtCoder": 3,
//         "CodeForces" :2,
//         "CodeForces::Gym":2,
//         "HackerRank" :1,
//         "LeetCode" :5
//     }
//   arr.forEach((item)=>{
//     if(item['site'].toUpperCase()==str.toUpperCase()){

//     ihtml+=`<div class="card mx-2 my-2 border border-secondary all ${item['site'].toLowerCase()}" style="width: 18rem;">
//         <img src=${urls[num[item['site']]]} class="card-img-top" alt="${item['site']} Logo">
//         <div class="card-body">
//           <h5 class="card-title">${item['name']}</h5>
//           <p class="card-text">Excellent way to improve programming and logical skills through this contest</p>
//           <p><strong>Start Time: </strong>${item['start_time']}</p>
//           <p><strong>End Time: </strong>${item['end_time']}</p>
//           <p><strong>Duration(Minutes): </strong>${item['duration']/120}</p>
//           <a href="${item['url']}" class="btn btn-info">Contest Link</a>
//         </div>
//       </div>`
//     }
//   })
//   cardContainer.innerHTML=ihtml;
// });

// }


let p=fetch("https://kontests.net/api/v1/all");
p.then((response)=>{
    return response.json();
}).then((contests)=>{
    var arr=Array.from(contests);
    console.log(arr);
    let ihtml='';
    let urls=["https://images.yourstory.com/cs/images/companies/codechef-1592821643695.jpg?fm=auto&ar=1:1&mode=fill&fill=solid&fill-color=fff","https://bookface-images.s3.amazonaws.com/logos/d0ee664b5d927c7f395fd14fbb7e337dc5b84430.png","https://media.licdn.com/dms/image/C510BAQH9HO8sfdUS6w/company-logo_200_200/0/1565976260956?e=2147483647&v=beta&t=RaD9bQUZGwnNPOPLbUdRhc7Ibzq21aknrWian7cv1bg","https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQw4uPMuD_PbFkrvOyKHlKgcJOTPHKRPYuR2g&usqp=CAU","https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRZH2i-vuT81pR40_3buQPFe0jCSnOKNI9mSg&usqp=CAU","https://cdn.cdo.mit.edu/wp-content/uploads/sites/67/2021/01/0_zuhXdNAIUoxEem4-.png"];
    // [codechef,hackerrank,codeforces,atcoder,hackerearth,LeetCode]
    const num={
        "CodeChef": 0,
        "HackerEarth" :4,
        "AtCoder": 3,
        "CodeForces" :2,
        "CodeForces::Gym":2,
        "HackerRank" :1,
        "LeetCode" :5
    }
    contest=arr.map((item)=>{
        let chtml=`<div class="card mx-2 my-2 border border-secondary all ${item['site'].toLowerCase()}" style="width: 18rem;">
        <img src=${urls[num[item['site']]]} class="card-img-top" alt="${item['site']} Logo">
        <div class="card-body">
          <h5 class="card-title">${item['name']}</h5>
          <p class="card-text">Excellent way to improve programming and logical skills through this contest</p>
          <p><strong>Start Time: </strong>${item['start_time']}</p>
          <p><strong>End Time: </strong>${item['end_time']}</p>
          <p><strong>Duration(Minutes): </strong>${item['duration']/120}</p>
          <a href="${item['url']}" class="btn btn-info">Contest Link</a>
        </div>
      </div>`
      ihtml+=chtml;
      return {name: item['name'],site: item['site'],start: item['start_time'],end: item['end_time'],html: chtml};
    })
    cardContainer.innerHTML=ihtml;


    document.getElementsByClassName("codeforces")[0].onclick=()=>{
      let b=document.querySelectorAll(".card")
      b.forEach((item)=>{
        if(!item.classList.contains('codeforces')){
          // item.classList.toggle('hide');
          // console.log(item.classList);
          item.style.display="none";
        }
        else item.style.display="block";
      })

    };


    document.getElementsByClassName("codechef")[0].onclick=()=>{
      let b=document.querySelectorAll(".card")
      b.forEach((item)=>{
        if(!item.classList.contains('codechef')){
          // item.classList.toggle('hide');
          // console.log(item.classList);
          item.style.display="none";
        }
        else item.style.display="block";
      })

    };

    document.getElementsByClassName("atcoder")[0].onclick=()=>{
      let b=document.querySelectorAll(".card")
      b.forEach((item)=>{
        if(!item.classList.contains('atcoder')){
          // item.classList.toggle('hide');
          // console.log(item.classList);
          item.style.display="none";
        }
        else item.style.display="block";
      })

    };

    document.getElementsByClassName("hackerrank")[0].onclick=()=>{
      let b=document.querySelectorAll(".card")
      b.forEach((item)=>{
        if(!item.classList.contains('hackerrank')){
          // item.classList.toggle('hide');
          // console.log(item.classList);
          item.style.display="none";
        }
        else item.style.display="block";
      })

    };


    document.getElementsByClassName("hackerearth")[0].onclick=()=>{
      let b=document.querySelectorAll(".card")
      b.forEach((item)=>{
        if(!item.classList.contains('hackerearth')){
          // item.classList.toggle('hide');
          // console.log(item.classList);
          item.style.display="none";
        }
        else item.style.display="block";
      })

    };


    document.getElementsByClassName("all")[0].onclick=()=>{
      let b=document.querySelectorAll(".card")
      b.forEach((item)=>{
        // if(!item.classList.contains('codechef')){
          // item.classList.toggle('hide');
          // console.log(item.classList);
          // item.style.display="none";
        // }
       item.style.display="block";
      })

    };

    document.getElementsByClassName("leetcode")[0].onclick=()=>{
      let b=document.querySelectorAll(".card")
      b.forEach((item)=>{
        if(!item.classList.contains('leetcode')){
          // item.classList.toggle('hide');
          // console.log(item.classList);
          item.style.display="none";
        }
        else item.style.display="block";
      })

    };
})

// let p=fetch("https://cdn.jsdelivr.net/gh/fawazahmed0/currency-api@1/2023-06-21/eur")
// p.then((response)=>{
//     return response.json();
// }).then((json)=>{
//     console.log(json);
// })




// function filterout(value){
//   let b=document.getElementsByClassName("card");
//   let arr=Array.from(b);
//   arr.forEach((item)=>{
//     if(item['site'].toUpper()==value.toUpper()){
//       console.log(item);
//     }
//   })
//   // console.log(b);
// }


// document.getElementById("myinput").addEventListener("keyup",()=>{
//   let text=document.getElementById("myinput").value;

// });
let buttons=document.querySelectorAll(".button-value");
console.log(buttons);

function filtercards(value){
  let buttons=document.querySelectorAll(".button-value");
  
  buttons.forEach((button)=>{
    // if(value.toUpperCase()==button.innerTexct.toUpperCase()){
    //   button.classList.add("active");
    // }
    // else{
    //   button.classList.remove("active");
    // }
    console.log(button);
  });
}

