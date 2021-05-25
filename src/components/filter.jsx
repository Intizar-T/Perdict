import { ScreenLockPortraitSharp } from '@material-ui/icons';
import React from 'react'
import NavBar from './NavBar.jsx'
import Perfume1 from "../perfume_pictures/aventus creed.png"
import Perfume2 from "../perfume_pictures/A La Rose.png"
import Perfume3 from "../perfume_pictures/CK One.png"
import Perfume4 from "../perfume_pictures/Cherry Blossom.png"
import Perfume5 from "../perfume_pictures/Do Son.png"
import Perfume6 from "../perfume_pictures/English Pear & Freesia.png"
import Perfume7 from "../perfume_pictures/Voyage d'Hermes.png"
import Perfume8 from "../perfume_pictures/Un Jardin En Mediterranee.png"
import Perfume9 from "../perfume_pictures/Acqua di Gio Profumo.png"
import Perfume10 from "../perfume_pictures/Alien Mugler.png"
import Perfume11 from "../perfume_pictures/Aqua Allegoria Herba Fresca.png"
import Perfume12 from "../perfume_pictures/Aqva Pour Homme Atlantiqve.png"
import Perfume13 from "../perfume_pictures/Baccarat Rouge.png"
import Perfume14 from "../perfume_pictures/Black Opium.png"
import Perfume15 from "../perfume_pictures/Coco Mademoiselle.png"
import Perfume16 from "../perfume_pictures/Fahrenheit Christian Dior.png"
import Perfume17 from "../perfume_pictures/Honey Oud.png"
import Perfume18 from "../perfume_pictures/La Nuit de I'Homme.png"
import Perfume19 from "../perfume_pictures/Luna Rossa Carbon.png"
import Perfume20 from "../perfume_pictures/Modern princess lanvin.png"
import Perfume21 from "../perfume_pictures/Dry Wood Ramon.png"
import Perfume22 from "../perfume_pictures/Poolside Breeze.png"
import Perfume23 from "../perfume_pictures/Radish Vetiver.png"
import Perfume24 from "../perfume_pictures/Sailing Day.png"
import Perfume25 from "../perfume_pictures/Snow Mint.png"
import Perfume26 from "../perfume_pictures/La Vie Est Belle.png"
import Perfume27 from "../perfume_pictures/black orchid.png"
import Perfume28 from "../perfume_pictures/Tobacco Vanille.png"
import Perfume29 from "../perfume_pictures/Rock Volume One.png"


// const rootElement = document.getElementById("root");
// ReactDOM.render(<App />, rootElement);


const filter = () => {
    // perfume_list = [[perfume_name, [tobefiltered_metric_list], img], [], []]
    const perfume_list = [
      {
        "name": "CK One",
        "ingredient": ["citrus", "green", "drywood", "mossywood", "powdery"]
      },
      {
        "name": "English Pear & Freesia",
        "ingredient": ["floral", "fruity", "water", "musk", "aromatic"]
      },
      {
        "name": "Do Son",
        "ingredient": ["floral", "citrus", "musk"]
      },
      {
        "name": "Un Jardin En Mediterranee",
        "ingredient": ["citrus", "aromatic", "floral", "mossywood"]
      },
      {
        "name": "Voyage d'Hermes",
        "ingredient": ["softspicy", "citrus", "green", "aromatic", "drywood"]
      },
      {
        "name": "La Vie Est Belle",
        "ingredient": ["fruity", "aromatic", "softspicy"]
      },
      {
        "name": "Cherry Blossom",
        "ingredient": ["floral", "fruity", "musk"]
      },
      {
        "name": "A La Rose ",
        "ingredient": ["citrus", "musk", "drywood", "floral"]
      },
      {
        "name": "Modern Princess",
        "ingredient": ["fruity", "aromatic", "floral"]
      },
      {
        "name": "Baccarat Rouge",
        "ingredient": ["drywood", "softspicy", "aromatic"]
      },
      {
        "name": "Alien",
        "ingredient": ["floral", "powdery", "softspicy", "drywood"] 
      },
      {
        "name": "Tobacco Vanille",
        "ingredient": ["softspicy", "powdery", "drywood"]
      },
      {
        "name": "Aventus",
        "ingredient": ["drywood", "green", "musk", "citrus"]
      },
      {
        "name": "Coco Mademoiselle",
        "ingredient": ["citrus", "drywood", "floral", "softspicy"]
      },
      {
        "name": "Black Opium",
        "ingredient": ["floral", "powdery", "drywood", "fruity"]
      },
      {
        "name": "Black Orchid",
        "ingredient": ["softspicy", "drywood", "floral"]
      },
      {
        "name": "La Nuit de I'Homme",
        "ingredient": ["aromatic", "softspicy", "drywood", "citrus"]
      },
      {
        "name": "Rock Volume One",
        "ingredient": ["musk", "sharpspicy"]
      },
      {
        "name": "Fahrenheit",
        "ingredient": ["musk", "drywood"]
      },
      {
        "name": "Acqua di Giò Profumo",
        "ingredient": ["aromatic", "water"]
      },
      {
        "name": "Sailing Day",
        "ingredient": ["mossywood", "water"]
      },
      {
        "name": "Snow Mint",
        "ingredient": ["green", "aromatic"]
      },
      {
        "name": "Aqva Pour Homme Atlantiqve ",
        "ingredient": ["aromatic", "water", "citrus"]
      },
      {
        "name": "Aqua Allegoria Herba Fresca",
        "ingredient": ["green", "citrus", "aromatic"]
      },
      {
        "name": "Poolside Breeze",
        "ingredient": ["water", "floral"]
      },
      {
        "name": "Luna Rossa Carbon",
        "ingredient": ["sharpspicy", "aromatic"]
      },
      {
        "name": "Radish Vetiver ",
        "ingredient": ["drywood", "green"]
      },
      {
        "name": "Dry Wood Ramon",
        "ingredient": ["drywood", "sharpspicy"]
      },
      {
        "name": "Honey Oud",
        "ingredient": ["powdery", "floral", "fruity"]
      }
   ]
    // checked elements to be filtered

    var filter_list = ["metallic", "citrus"];
    var showlist = [];
    var remove = [];

    //filtering 
    function nextpage(){
        var tobeshown = perfume_list;
        for (let i = 0; i < tobeshown.length; i++){
            for (let j = 0; j < filter_list.length; j++){
                if (tobeshown[i]['ingredient'].includes(filter_list[j])){
                    remove.push(i);
                    break;
                }
            }
        }

        // console.log(remove);
        for (let i = 0; i < tobeshown.length; i++){
            if (!remove.includes(i)){
                showlist.push(tobeshown[i]['name']);
            }
        }

        console.log(showlist);
        console.log(filter_list);

        showlist = [];
    }


    function handleclick(){
        //localStorage.setItem('perfume_id', 0)
        window.location.href = "/visual";
    }

//     function checkbox(){
//         document.getElementById("choice_musk").onclick = function(){
//             if (filter_list.includes('musk')){
//                 filter_list.remove('musk');
//             }
//             filter_list.push('musk');
//         }
//     }

// checkbox()


    // function show_perfume_() {
    //   var table = document.getElementById("resultTable");
    //   for (let i = 0; i < printlist.length; i++ ){
    //     var row = table.insertRow(0);
    //     var cell1 = row.insertCell(0);
    //     cell1.innerHTML = printlist[i]["img"];
    //   }
    // }
  
    var perfume_image_list = []; 
    for (let i = 1; i < 28; i++){
      perfume_image_list.push("Perfume" + String(i))
    }
    console.log(perfume_image_list);


  //   function show_perfume_list(){
  //     var tobeshown = perfume_image_list;
  //     var ele = document.getElementById('PerfumeTable');

  //     for (let i = 0; i < tobeshown.length; i++){
  //         for (let j = 0; j < filter_list.length; j++){
  //             if (tobeshown[i]['ingredient'].includes(filter_list[j])){
  //                 remove.push(i);
  //                 break;
  //             }
  //         }
  //     }
  // }

    // this.state = []
    // changestate = () => {
    //     this.setState(['musk'])
    //     console.log(this)
    // }

    return (
        
        <div>
        <button onClick = {nextpage}> do filter </button>

        <NavBar />
        <button onClick = {handleclick}> perfume info </button>
        <script>
        console.log('html');
        </script>

        <div> filter </div>
        <h1> PERFUME FINDER </h1>
        <h2> Choose scents to avoid: </h2>

        
        {/* <li class="choice1">
        <input name="input1" type="checkbox" value="1" id="choice_musk" ></input>
        <label for="choice_musk" id="musk"> Musk </label>
        </li>

        <li class="choice2">
        <input name="input2" type="checkbox" value="2" id="choice_aromatic"></input>
        <label for="choice_aromatic" id="aromatic"> aromatic </label>
        </li>

        <li class="choice3">
        <input name="input3" type="checkbox" value="3" id="choice_woody"></input>
        <label for="choice_woody" id="woody"> Woody </label>
        </li>

        <li class="choice4">
        <input name="input4" type="checkbox" value="4" id="choice_citrus"></input>
        <label for="choice_citrus" id="citrus"> Citrus </label>
        </li>

        <li class="choice5">
        <input name="input5" type="checkbox" value="5" id="choice_oriental"></input>
        <label for="choice_oriental" id="oriental"> oriental </label>
        </li>

        <li class="choice6">
        <input name="input6" type="checkbox" value="6" id="choice_metallic"></input>
        <label for="choice_metallic" id="metallic"> metallic </label>
        </li>

        <li class="choice7">
        <input name="input7" type="checkbox" value="7" id="choice_honey"></input>
        <label for="choice_honey" id="honey"> Honey </label>
        </li>

        <li class="choice8">
        <input name="input8" type="checkbox" value="8" id="choice_green"></input>
        <label for="choice_green" id="green"> Green </label>
        </li>

        <li class="choice9">
        <input name="input9" type="checkbox" value="9" id="choice_dry"></input>
        <label for="choice_dry" id="dry"> Dry </label>
        </li>

        <li class="choice10">
        <input name="input10" type="checkbox" value="10" id="choice_leathery"></input>
        <label for="choice_leathery" id="leathery"> Leathery </label>
        </li>

        <li class="choice11">
        <input name="input11" type="checkbox" value="11" id="choice_marine"></input>
        <label for="choice_marine" id="marine"> Marine </label>
        </li>

        <li class="choice12">
        <input name="input12" type="checkbox" value="12" id="choice_minty"></input>
        <label for="choice_minty" id="minty"> Minty </label>
        </li>

        <li class="choice13">
        <input name="input13" type="checkbox" value="13" id="choice_spicy"></input>
        <label for="choice_spicy" id="spicy"> Spicy </label>
        </li>

        <li class="choice14">
        <input name="input14" type="checkbox" value="14" id="choice_floral"></input>
        <label for="choice_floral" id="floral"> Floral </label>
        </li>

        <li class="choice15">
        <input name="input15" type="checkbox" value="15" id="choice_powdery"></input>
        <label for="choice_powdery" id="powdery"> Powdery </label>
        </li>

        <li class="choice16">
        <input name="input16" type="checkbox" value="16" id="choice_watery"></input>
        <label for="choice_watery" id="watery"> Watery </label>
        </li> */}



        <table id='resultTable'>

          <tr>
            <td> Perfume List available </td>
          </tr>

          <tr>
          <td className='main_table'><img src={Perfume1} alt = "" /></td>
          <td className='main_table'><img src={Perfume2} alt = "" /></td>
          <td className='main_table'><img src={Perfume3} alt = "" /></td>
          </tr>

          <tr>
          <td className='main_table'><img src={Perfume4} alt = "" /></td>
          <td className='main_table'><img src={Perfume5} alt = "" /></td>
          <td className='main_table'><img src={Perfume6} alt = "" /></td>
          </tr>


          <tr>
          <td className='main_table'><img src={Perfume7} alt = "" /></td>
          <td className='main_table'><img src={Perfume8} alt = "" /></td>
          <td className='main_table'><img src={Perfume9} alt = "" /></td>
          </tr>
          
          <tr>
          <td className='main_table'><img src={Perfume10} alt = "" /></td>
          <td className='main_table'><img src={Perfume11} alt = "" /></td>
          <td className='main_table'><img src={Perfume12} alt = "" /></td>
          </tr>

          <tr>
          <td className='main_table'><img src={Perfume13} alt = "" /></td>
          <td className='main_table'><img src={Perfume14} alt = "" /></td>
          <td className='main_table'><img src={Perfume15} alt = "" /></td>
          </tr>

          <tr>
          <td className='main_table'><img src={Perfume16} alt = "" /></td>
          <td className='main_table'><img src={Perfume17} alt = "" /></td>
          <td className='main_table'><img src={Perfume18} alt = "" /></td>
          </tr>
          
          <tr>
          <td className='main_table'><img src={Perfume19} alt = "" /></td>
          <td className='main_table'><img src={Perfume20} alt = "" /></td>
          <td className='main_table'><img src={Perfume21} alt = "" /></td>
          </tr>

          <tr>
          <td className='main_table'><img src={Perfume22} alt = "" /></td>
          <td className='main_table'><img src={Perfume23} alt = "" /></td>
          <td className='main_table'><img src={Perfume24} alt = "" /></td>
          </tr>

          <tr>
          <td className='main_table'><img src={Perfume25} alt = "" /></td>
          <td className='main_table'><img src={Perfume26} alt = "" /></td>
          <td className='main_table'><img src={Perfume27} alt = "" /></td>
          </tr>

          <tr>
          <td className='main_table'><img src={Perfume28} alt = "" /></td>
          <td className='main_table'><img src={Perfume29} alt = "" /></td>
          
          </tr>

        </table>

  

        {/* <tr>
        <td className='main_table'><img src={Perfume1} alt = "" /></td>
        </tr>
        <tr>
        <td className='main_table'><img src={Perfume2} alt = "" /></td>
        </tr>
        <tr>
        <td className='main_table'><img src={Perfume3} alt = "" /></td>
        </tr>
        <tr>
        <td className='main_table'><img src={Perfume4} alt = "" /></td>
        </tr>
        <tr>
        <td className='main_table'><img src={Perfume5} alt = "" /></td>
        </tr>
        <tr>
        <td className='main_table'><img src={Perfume6} alt = "" /></td>
        </tr>
        <tr>
        <td className='main_table'><img src={Perfume7} alt = "" /></td>
        </tr>
        <tr>
        <td className='main_table'><img src={Perfume8} alt = "" /></td>
        </tr> */}

        {/* <div id='root'></div> */}
        

        {/* perfumeimg_list = [
        {
                title: value.title,
                artist: value.artist,
                url: value.url,
                description: value.description,
                vote: value.vote - 1,
                voteID: value.voteID
            }] */}


        {/* <script>
        for (var i = 0; i < lst.length; i++) {
            document.write('<tr><td>' +  + '</td><td>' +  + '</td><td>' + jobs[i].salary + '</td></tr>');
          }
        </script> */}


        {/* {[print_list].reverse().map((value, index) => {
            return (
                    <tbody>
                        <tr>
                            <td width = "80%">{value.img} </td>
                        </tr>
                        <tr>
                        </tr>
                    </tbody>
                )
        })}   */}
        

        {/* <div class="cell box" style="flex-grow: 0;">
        <div class="card-section"> */}

     
        {/* <img src="https://.jpg"></img>
        <div class="card-section"><p><a href="https://www.html"> Name of perfume 
        

        <span class="link-span"></span></a></p> 
        <p><small> Type </small></p>

        </div> */}

        {/* </div>
        </div> */}
   
        <div id="root"> </div>
 

        </div>
        

            )
        }

export default filter
