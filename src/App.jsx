import { useEffect, useState } from 'react'
import './App.css'
import Swal from 'sweetalert2'
import 'animate.css';

function App() {
  const [count, setCount] = useState(0)
  const [show,setShow] = useState(false)

  const activeShow = () => {
    setShow(!show)
  }
const entrada = () => {
  Swal.fire({
    html: '<h1 style="font-family: \'Loved by the King\', cursive;">¿Te gustaria saber un secreto?<h1>',
    showClass: {
      popup: `
        animate__animated
        animate__fadeInUp
        animate__faster
      `
    },
    hideClass: {
      popup: `
        animate__animated
        animate__fadeOutDown
        animate__faster
      `
    },
    icon: 'question',
    showCancelButton: true,
    confirmButtonColor: '#3085d6',
    cancelButtonColor: '#d33',
    confirmButtonText: 'Si quiero',
    cancelButtonText: 'No me interesa',
  }).then((result) => {
    if (result.isConfirmed) {
      Swal.fire({        
        //title:'Felicidades has elegido una sorpresita rosa!',
        html:'<h1 style="font-family: \'Loved by the King\', cursive;">La verdad es que... <h1>',
        showClass: {
          popup: `
            animate__animated
            animate__fadeInUp
            animate__faster
          `
        },
        timer: 3000,
        timerProgressBar: true,
        didOpen: () => {
          Swal.showLoading()
        },
        willClose: () => {
          Swal.close()
          setShow(true)
        }
      })
    } else if (
      result.dismiss === Swal.DismissReason.cancel
    ) {
      Swal.fire({        
        html:'<h1 style="font-family: \'Loved by the King\', cursive;">¿Segura? Te doy otra chance... <h1>',
        
        willClose: () => {
          entrada()
        }
      })
    }
  })
}

useEffect(() => {
  //entrada()
}, [])

  return (
    <div style={{display:'flex',justifyContent:'center',alignItems:'center'}}>
        
        <div className="night" style={{display:'flex',justifyContent:'center',alignItems:'center'}}>

          </div>

        <div style={{ display:'flex',justifyContent:'center',alignItems:'center',flexDirection:'column'}}>
          <div className='song'>
            <h1 style={{zIndex:'10',color:'white',paddingTop: 50,fontFamily: "Loved by the King",fontSize:50,animation:'zoomIn 3s'}}>Tus flores Amarillas</h1>
            {/* <iframe style={{borderRadius:'10px',zIndex:'10'}} src="https://open.spotify.com/embed/track/0KAqMRUSZwzG3dZLdDA4eH?utm_source=generator"  frameBorder="0" allowfullscreen="" allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture" loading="lazy"></iframe> */}
            <div><p style={{color: 'white'}}>Copyright 2024 - SebasCodeDev</p></div>
          </div>
       <div className="flowers">
          
          <div className="flower flower--1">
            <div className="flower__leafs flower__leafs--1">
              <div className="flower__leaf flower__leaf--1"></div>
              <div className="flower__leaf flower__leaf--2"></div>
              <div className="flower__leaf flower__leaf--3"></div>
              <div className="flower__leaf flower__leaf--4"></div>
              

              <div className="flower__white-circle"></div>
      
              <div className="flower__light flower__light--1"></div>
              <div className="flower__light flower__light--2"></div>
              <div className="flower__light flower__light--3"></div>
              <div className="flower__light flower__light--4"></div>
              <div className="flower__light flower__light--5"></div>
              <div className="flower__light flower__light--6"></div>
              <div className="flower__light flower__light--7"></div>
              <div className="flower__light flower__light--8"></div>
      
            </div>
            <div className="flower__line">
              <div className="flower__line__leaf flower__line__leaf--1"></div>
              <div className="flower__line__leaf flower__line__leaf--2"></div>
              <div className="flower__line__leaf flower__line__leaf--3"></div>
              <div className="flower__line__leaf flower__line__leaf--4"></div>
              <div className="flower__line__leaf flower__line__leaf--5"></div>
              <div className="flower__line__leaf flower__line__leaf--6"></div>
            </div>
          </div>
      
          <div className="flower flower--2">
            <div className="flower__leafs flower__leafs--2">
              <div className="flower__leaf flower__leaf--1"></div>
              <div className="flower__leaf flower__leaf--2"></div>
              <div className="flower__leaf flower__leaf--3"></div>
              <div className="flower__leaf flower__leaf--4"></div>
              <div className="flower__white-circle"></div>
      
              <div className="flower__light flower__light--1"></div>
              <div className="flower__light flower__light--2"></div>
              <div className="flower__light flower__light--3"></div>
              <div className="flower__light flower__light--4"></div>
              <div className="flower__light flower__light--5"></div>
              <div className="flower__light flower__light--6"></div>
              <div className="flower__light flower__light--7"></div>
              <div className="flower__light flower__light--8"></div>
      
            </div>
            <div className="flower__line">
              <div className="flower__line__leaf flower__line__leaf--1"></div>
              <div className="flower__line__leaf flower__line__leaf--2"></div>
              <div className="flower__line__leaf flower__line__leaf--3"></div>
              <div className="flower__line__leaf flower__line__leaf--4"></div>
            </div>
          </div>
      
          <div className="flower flower--3">
            <div className="flower__leafs flower__leafs--3">
              <div className="flower__leaf flower__leaf--1"></div>
              <div className="flower__leaf flower__leaf--2"></div>
              <div className="flower__leaf flower__leaf--3"></div>
              <div className="flower__leaf flower__leaf--4"></div>
              <div className="flower__white-circle"></div>
      
              <div className="flower__light flower__light--1"></div>
              <div className="flower__light flower__light--2"></div>
              <div className="flower__light flower__light--3"></div>
              <div className="flower__light flower__light--4"></div>
              <div className="flower__light flower__light--5"></div>
              <div className="flower__light flower__light--6"></div>
              <div className="flower__light flower__light--7"></div>
              <div className="flower__light flower__light--8"></div>
      
            </div>
            <div className="flower__line">
              <div className="flower__line__leaf flower__line__leaf--1"></div>
              <div className="flower__line__leaf flower__line__leaf--2"></div>
              <div className="flower__line__leaf flower__line__leaf--3"></div>
              <div className="flower__line__leaf flower__line__leaf--4"></div>
            </div>
          </div>
          <div className="flower flower--4">
            <div className="flower__leafs flower__leafs--3">
              <div className="flower__leaf flower__leaf--1"></div>
              <div className="flower__leaf flower__leaf--2"></div>
              <div className="flower__leaf flower__leaf--3"></div>
              <div className="flower__leaf flower__leaf--4"></div>
              <div className="flower__white-circle"></div>
      
              <div className="flower__light flower__light--1"></div>
              <div className="flower__light flower__light--2"></div>
              <div className="flower__light flower__light--3"></div>
              <div className="flower__light flower__light--4"></div>
              <div className="flower__light flower__light--5"></div>
              <div className="flower__light flower__light--6"></div>
              <div className="flower__light flower__light--7"></div>
              <div className="flower__light flower__light--8"></div>
      
            </div>
            <div className="flower__line">
              <div className="flower__line__leaf flower__line__leaf--1"></div>
              <div className="flower__line__leaf flower__line__leaf--2"></div>
              <div className="flower__line__leaf flower__line__leaf--3"></div>
              <div className="flower__line__leaf flower__line__leaf--4"></div>
            </div>
          </div>
          <div className="flower flower--5">
            <div className="flower__leafs flower__leafs--3">
              <div className="flower__leaf flower__leaf--1"></div>
              <div className="flower__leaf flower__leaf--2"></div>
              <div className="flower__leaf flower__leaf--3"></div>
              <div className="flower__leaf flower__leaf--4"></div>
              <div className="flower__white-circle"></div>
      
              <div className="flower__light flower__light--1"></div>
              <div className="flower__light flower__light--2"></div>
              <div className="flower__light flower__light--3"></div>
              <div className="flower__light flower__light--4"></div>
              <div className="flower__light flower__light--5"></div>
              <div className="flower__light flower__light--6"></div>
              <div className="flower__light flower__light--7"></div>
              <div className="flower__light flower__light--8"></div>
      
            </div>
            <div className="flower__line">
              <div className="flower__line__leaf flower__line__leaf--1"></div>
              <div className="flower__line__leaf flower__line__leaf--2"></div>
              <div className="flower__line__leaf flower__line__leaf--3"></div>
              <div className="flower__line__leaf flower__line__leaf--4"></div>
            </div>
          </div>
      
          <div className="grow-ans" style={{"--d":":1.2s"}}>
            <div className="flower__g-long">
              <div className="flower__g-long__top"></div>
              <div className="flower__g-long__bottom"></div>
            </div>
          </div>
      
          <div className="growing-grass">
            <div className="flower__grass flower__grass--1">
              <div className="flower__grass--top"></div>
              <div className="flower__grass--bottom"></div>
              <div className="flower__grass__leaf flower__grass__leaf--1"></div>
              <div className="flower__grass__leaf flower__grass__leaf--2"></div>
              <div className="flower__grass__leaf flower__grass__leaf--3"></div>
              <div className="flower__grass__leaf flower__grass__leaf--4"></div>
              <div className="flower__grass__leaf flower__grass__leaf--5"></div>
              <div className="flower__grass__leaf flower__grass__leaf--6"></div>
              <div className="flower__grass__leaf flower__grass__leaf--7"></div>
              <div className="flower__grass__leaf flower__grass__leaf--8"></div>
              <div className="flower__grass__overlay"></div>
            </div>
          </div>
      
          <div className="growing-grass">
            <div className="flower__grass flower__grass--2">
              <div className="flower__grass--top"></div>
              <div className="flower__grass--bottom"></div>
              <div className="flower__grass__leaf flower__grass__leaf--1"></div>
              <div className="flower__grass__leaf flower__grass__leaf--2"></div>
              <div className="flower__grass__leaf flower__grass__leaf--3"></div>
              <div className="flower__grass__leaf flower__grass__leaf--4"></div>
              <div className="flower__grass__leaf flower__grass__leaf--5"></div>
              <div className="flower__grass__leaf flower__grass__leaf--6"></div>
              <div className="flower__grass__leaf flower__grass__leaf--7"></div>
              <div className="flower__grass__leaf flower__grass__leaf--8"></div>
              <div className="flower__grass__overlay"></div>
            </div>
          </div>
      
          <div className="grow-ans" style={{"--d":":2.4s"}}>
            <div className="flower__g-right flower__g-right--1">
              <div className="leaf"></div>
            </div>
          </div>
      
          <div className="grow-ans" style={{"--d":":2.8s"}}>
            <div className="flower__g-right flower__g-right--2">
              <div className="leaf"></div>
            </div>
          </div>
      
          <div className="grow-ans" style={{"--d":":2.8s"}}>
            <div className="flower__g-front">
              <div className="flower__g-front__leaf-wrapper flower__g-front__leaf-wrapper--1">
                <div className="flower__g-front__leaf"></div>
              </div>
              <div className="flower__g-front__leaf-wrapper flower__g-front__leaf-wrapper--2">
                <div className="flower__g-front__leaf"></div>
              </div>
              <div className="flower__g-front__leaf-wrapper flower__g-front__leaf-wrapper--3">
                <div className="flower__g-front__leaf"></div>
              </div>
              <div className="flower__g-front__leaf-wrapper flower__g-front__leaf-wrapper--4">
                <div className="flower__g-front__leaf"></div>
              </div>
              <div className="flower__g-front__leaf-wrapper flower__g-front__leaf-wrapper--5">
                <div className="flower__g-front__leaf"></div>
              </div>
              <div className="flower__g-front__leaf-wrapper flower__g-front__leaf-wrapper--6">
                <div className="flower__g-front__leaf"></div>
              </div>
              <div className="flower__g-front__leaf-wrapper flower__g-front__leaf-wrapper--7">
                <div className="flower__g-front__leaf"></div>
              </div>
              <div className="flower__g-front__leaf-wrapper flower__g-front__leaf-wrapper--8">
                <div className="flower__g-front__leaf"></div>
              </div>
              <div className="flower__g-front__line"></div>
            </div>
          </div>
      
          <div className="grow-ans" style={{"--d":":3.2s"}}>
            <div className="flower__g-fr">
              <div className="leaf"></div>
              <div className="flower__g-fr__leaf flower__g-fr__leaf--1"></div>
              <div className="flower__g-fr__leaf flower__g-fr__leaf--2"></div>
              <div className="flower__g-fr__leaf flower__g-fr__leaf--3"></div>
              <div className="flower__g-fr__leaf flower__g-fr__leaf--4"></div>
              <div className="flower__g-fr__leaf flower__g-fr__leaf--5"></div>
              <div className="flower__g-fr__leaf flower__g-fr__leaf--6"></div>
              <div className="flower__g-fr__leaf flower__g-fr__leaf--7"></div>
              <div className="flower__g-fr__leaf flower__g-fr__leaf--8"></div>
            </div>
          </div>
      
          <div className="long-g long-g--0">
            <div className="grow-ans" style={{"--d":":3s"}}>
              <div className="leaf leaf--0"></div>
            </div>
            <div className="grow-ans" style={{"--d":":2.2s"}}>
              <div className="leaf leaf--1"></div>
            </div>
            <div className="grow-ans" style={{"--d":":3.4s"}}>
              <div className="leaf leaf--2"></div>
            </div>
            <div className="grow-ans" style={{"--d":":3.6s"}}>
              <div className="leaf leaf--3"></div>
            </div>
          </div>
      
          <div className="long-g long-g--1">
            <div className="grow-ans" style={{"--d":":3.6s"}}>
              <div className="leaf leaf--0"></div>
            </div>
            <div className="grow-ans" style={{"--d":":3.8s"}}>
              <div className="leaf leaf--1"></div>
            </div>
            <div className="grow-ans" style={{"--d":":4s"}}>
              <div className="leaf leaf--2"></div>
            </div>
            <div className="grow-ans" style={{"--d":":4.2s"}}>
              <div className="leaf leaf--3"></div>
            </div>
          </div>
      
          <div className="long-g long-g--2">
            <div className="grow-ans" style={{"--d":":4s"}}>
              <div className="leaf leaf--0"></div>
            </div>
            <div className="grow-ans" style={{"--d":":4.2s"}}>
              <div className="leaf leaf--1"></div>
            </div>
            <div className="grow-ans" style={{"--d":":4.4s"}}>
              <div className="leaf leaf--2"></div>
            </div>
            <div className="grow-ans" style={{"--d":":4.6s"}}>
              <div className="leaf leaf--3"></div>
            </div>
          </div>
      
          <div className="long-g long-g--3">
            <div className="grow-ans" style={{"--d":":4s"}}>
              <div className="leaf leaf--0"></div>
            </div>
            <div className="grow-ans" style={{"--d":":4.2s"}}>
              <div className="leaf leaf--1"></div>
            </div>
            <div className="grow-ans" style={{"--d":":3s"}}>
              <div className="leaf leaf--2"></div>
            </div>
            <div className="grow-ans" style={{"--d":":3.6s"}}>
              <div className="leaf leaf--3"></div>
            </div>
          </div>
      
          <div className="long-g long-g--4">
            <div className="grow-ans" style={{"--d":":4s"}}>
              <div className="leaf leaf--0"></div>
            </div>
            <div className="grow-ans" style={{"--d":":4.2s"}}>
              <div className="leaf leaf--1"></div>
            </div>
            <div className="grow-ans" style={{"--d":":3s"}}>
              <div className="leaf leaf--2"></div>
            </div>
            <div className="grow-ans" style={{"--d":":3.6s"}}>
              <div className="leaf leaf--3"></div>
            </div>
          </div>
      
          <div className="long-g long-g--5">
            <div className="grow-ans" style={{"--d":":4s"}}>
              <div className="leaf leaf--0"></div>
            </div>
            <div className="grow-ans" style={{"--d":":4.2s"}}>
              <div className="leaf leaf--1"></div>
            </div>
            <div className="grow-ans" style={{"--d":":3s"}}>
              <div className="leaf leaf--2"></div>
            </div>
            <div className="grow-ans" style={{"--d":":3.6s"}}>
              <div className="leaf leaf--3"></div>
            </div>
          </div>
      
          <div className="long-g long-g--6">
            <div className="grow-ans" style={{"--d":":4.2s"}}>
              <div className="leaf leaf--0"></div>
            </div>
            <div className="grow-ans" style={{"--d":":4.4s"}}>
              <div className="leaf leaf--1"></div>
            </div>
            <div className="grow-ans" style={{"--d":":4.6s"}}>
              <div className="leaf leaf--2"></div>
            </div>
            <div className="grow-ans" style={{"--d":":4.8s"}}>
              <div className="leaf leaf--3"></div>
            </div>
          </div>
      
          <div className="long-g long-g--7">
            <div className="grow-ans" style={{"--d":":3s"}}>
              <div className="leaf leaf--0"></div>
            </div>
            <div className="grow-ans" style={{"--d":":3.2s"}}>
              <div className="leaf leaf--1"></div>
            </div>
            <div className="grow-ans" style={{"--d":":3.5s"}}>
              <div className="leaf leaf--2"></div>
            </div>
            <div className="grow-ans" style={{"--d":":3.6s"}}>
              <div className="leaf leaf--3"></div>
            </div>
          </div>
        </div>

        </div>
    </div>
  )
}

export default App
