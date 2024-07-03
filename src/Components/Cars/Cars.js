import React, { useState, version } from 'react'
import './Cars.css'
import Car from '../Car/Car'
export default function Cars() {

    const [allCars,setAllCars]=useState([  
        {
            id:1,
            model:'EQS SUV',
            vendor:'Mercedes',
            price:35000,
            imageUrl:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS8MYYQHWto-Ilnz6E-xeVYJbomZbGeo478_A&s'
        },
        {
            id:2,
            model:'XM SUV',
            vendor:'BMW',
            price:31000,
            imageUrl:'https://i0.wp.com/planetdave.com/wp-content/uploads/2023/07/2023-bmw-xm-1.jpg?resize=904%2C601&ssl=1'
        },
        {
            id:3,
            model:'Land Cruiser',
            vendor:'Toyota ',
            price:29000,
            imageUrl:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRozF5DHTHgKnFWA5Avi7b8nnkk_s0YDBudqQ&s'
        },
        {
            id:4,
            model:'Touareg',
            vendor:'Volkswagen ',
            price:33000,
            imageUrl:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTnFhtCTno_tAGyKZZnDUcdEVF6KEKg6TdEVZrPReRHGE32rj3pmZJZZYteDMvgUZR-qNA&usqp=CAU'
        },
        {
            id:5,
            model:'Palisade',
            vendor:'Hyundai',
            price:50000,
            imageUrl:'https://i.ytimg.com/vi/NUymYz6CjnE/maxresdefault.jpg'
        },
        {
            id:6,
            model:'2025 Pilot',
            vendor:'Honda',
            price:45000,
            imageUrl:'https://vehicle-images.dealerinspire.com/6050-110008047/5FNYG2H42SB002709/029bf83b34978be1c54e52be21716f05.jpg'
        }
    ])


    const [selectedItem,setSelectedItem]=useState({});
    const [isSelectedItem,setIsSelectedItem]=useState(false);
    function handleSelectedCarItemClick(carId){
        setIsCleared(false);
        setIsSelectedItem(true);
        allCars.forEach((car)=>{
            if(car.id===carId){
                setSelectedItem({
                    id:car.id,
                    vendor:car.vendor,
                    model:car.model,
                    price:car.price,
                    imageUrl:car.imageUrl
                })
            }
        })
    }

    function handleVendorChange(e){
        setSelectedItem(
            {
                ...selectedItem,
                vendor:e.target.value
            }
        )
    }

    function handleModelChange(e){
        setSelectedItem({
            ...selectedItem,
            model:e.target.value
        })
    }

    function handlePriceChange(e){
        setSelectedItem({
            ...selectedItem,
            price:e.target.value
        })
    }

    function handleImageUrlChange(e){
        setSelectedItem({
            ...selectedItem,
            imageUrl:e.target.value
        })
    }


    const [lID,setLID]=useState(allCars[allCars.length-1].id+1);
    const [isCleared,setIsCleared]=useState(true);
    function handleClearClick(){
        setIsSelectedItem(false);
        // setLID(lID+1);
        let newObj={
            id:lID,
            vendor:'',
            model:'',
            price:0,
            imageUrl:''
        };
        console.log('lID >> '+lID);
        setSelectedItem(newObj);
        setIsCleared(true);
        console.log('isCleared >> '+isCleared);
    }


    
    function handleAddClick(){
        if(selectedItem.length!==0){
            //pay attention here
          
            if(selectedItem.vendor.length!==0 && selectedItem.model.length!==0 && selectedItem.price.length!==0
                && selectedItem.imageUrl.length!==0){ 
                    setAllCars([
                        ...allCars,
                        {
                            id:selectedItem.id,
                            vendor:selectedItem.vendor,
                            model:selectedItem.model,
                            price:selectedItem.price,
                            imageUrl:selectedItem.imageUrl
                        }
                    ])   
                    setLID(lID+1);
                    let newObj={
                        id:lID,
                        vendor:'',
                        model:'',
                        price:0,
                        imageUrl:''
                    };
                    setSelectedItem(newObj);
            }
        }
    }



    function handleUpdateClick(){
      let updatedCarList= allCars.map((car)=>{
            if(car.id===selectedItem.id){
                return {
                    ...car,
                    id:selectedItem.id,
                    vendor:selectedItem.vendor,
                    model:selectedItem.model,
                    price:selectedItem.price,
                    imageUrl:selectedItem.imageUrl
                }
            }
            else{
                return car;
            }
        })
        setAllCars(updatedCarList);
        setIsSelectedItem(false);

        let newObj={
            id:lID,
            vendor:'',
            model:'',
            price:0,
            imageUrl:''
        };
        setSelectedItem(newObj);
        setIsCleared(true);
    }

    function handleHTLClick(){
        let carsPricesArray=[];
        allCars.forEach((car)=>carsPricesArray.push(car.price));
        carsPricesArray.sort(function(a, b){return a-b});
        let sortedCarObjArray=[];
        carsPricesArray.forEach((pr)=>{
            allCars.forEach((car)=>{
                if(pr===car.price){
                    sortedCarObjArray.push(car);
                }
            })
        })
        setAllCars(sortedCarObjArray);
    }

    function handleA_ZClick(){
        let carVendorsArray=[];
        allCars.forEach((car)=>carVendorsArray.push(car.vendor));
        carVendorsArray.sort();
        let sortedCarObjArray=[];
        carVendorsArray.forEach((cv)=>{
            allCars.forEach((car)=>{
                if(cv===car.vendor){
                    sortedCarObjArray.push(car);
                }
            })
        })
        setAllCars(sortedCarObjArray);
    }
    

    let addBtnStyle={
        backgroundColor:'green',
        pointerEvents:'visible'
    };

    let addBtnStyle2={
        backgroundColor:'gray',
        pointerEvents:'none'
    }

    let updateBtnStyle={
        backgroundColor:'red',
        pointerEvents:'visible'
    }

    let updateBtnStyle2={
        backgroundColor:'gray',
        pointerEvents:'none'
    }

    let clearOrRestartBtnStyle={
        backgroundColor:'red',
        color:'white',
        padding:'6px',
        borderRadius:'20px'
    }

  return (
    <section className='base-section'>
    <div>
        <button className='filter' onClick={handleHTLClick}>Lower To Higher</button>
        <button className='filter' onClick={handleA_ZClick}>A-Z</button>


        <section className='allCars-design'>
            {
                allCars.map((car,index)=>(
                    <Car car={car} id={car.id} handleSelectedCarItemClick={handleSelectedCarItemClick}></Car>
                ))
            }
        </section>
    </div>

    <div>
    <button onClick={handleClearClick} style={clearOrRestartBtnStyle}>Clear or Restart</button>
        <section className='edit-section'>
            <label>
                Id : <input value={selectedItem.id} readOnly/>
            </label>
            <label>
                Vendor : <input value={selectedItem.vendor} onChange={handleVendorChange}/>
            </label>
            <label>
                Model : <input value={selectedItem.model} onChange={handleModelChange}/>
            </label>
            <label>
                Price : <input value={selectedItem.price} onChange={handlePriceChange}/>
            </label>
            <label>
                ImageURL : <input value={selectedItem.imageUrl} onChange={handleImageUrlChange}/>
            </label>
        </section>
            <button className='op' style={isCleared ? addBtnStyle : addBtnStyle2} onClick={handleAddClick}>ADD</button>
            <button className='op' style={isSelectedItem ? updateBtnStyle : updateBtnStyle2} onClick={handleUpdateClick}>UPDATE</button>
    </div>
    </section>
  )
}
