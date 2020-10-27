import React from 'react'
import {useContext} from 'react'
import {RoomContext} from '../context'
import Room from './Room'
import Title from './Title'

// get all unique values
const getUnique = (items, property) => {
    return [...new Set(items.map(item => item[property]))]
}
export default function RoomsFilter({rooms}) {
    const context = useContext(RoomContext)
    const {
        handleChange, type, capacity, price,
        minPrice, maxPrice, minSize, maxSize,
        breakfast, pets }   = context;
    // get unique types
    let types = getUnique(rooms, 'type');
    console.log(rooms)
    // add all
    types = ['all', ...types];
    // map to jsx
    types = types.map((item, index) => {
    return <option key={index} value={item}>{item}</option>
    })

    let people = getUnique(rooms, 'capacity');
    people = people.map((item, index) => {
        return <option value={item} key={index}>{item}</option>
    })
    return (
        <section className="filter-container">
            <Title title="search rooms" /> 
            <form className="filter-form">
                {/*select type*/}
                <div className="form-group">
                    <label htmlFor="type">room type</label>
                    <select name="type" id="type" value={type}
                    className="form-control" onChange={handleChange}>
                        {types}
                    </select>
                </div>
                {/* end select type */}

                {/*quests*/}
                <div className="form-group">
                    <label htmlFor="capacity">Guests</label>
                    <select name="capacity" id="capacity" value={capacity}
                    className="form-control" onChange={handleChange}>
                        {people}
                    </select>
                </div>
                {/* end quests */}
                {/* room price */}
                <div className="form-group">
                    <label htmlFor="price">
                        room price ${price}
                    </label>
                    <input type="range" name="price" min={minPrice} max={maxPrice}
                    id="price" value={price} onChange={handleChange} className="form-control"/>
                </div>
                {/* end of room price */}
                {/* room size */ }
                <div className="form-group">
                    <label htmlFor="size">
                        room size
                    </label>
                    <div className="size-inputs">
                    <input type="text" className="form-control"
                    name ="minSize" className="size-input" id="size" onChange={handleChange} value={minSize}/>
                    <input type="text" className="form-control"
                    name ="maxSize" className="size-input" onChange={handleChange} value={maxSize}/>
                    </div>

                </div>
                {/* end of room size */ }

                { /* extras*/ }
                <div className="form-group">
                    <div className="single-extra">
                        <input type="checkbox" onChange={handleChange} checked={breakfast} name="breakfast" id="breakfast"/>
                        <label htmlFor="breakfast">breakfast</label>
                    </div>
                    <div className="single-extra">
                        <input type="checkbox" onChange={handleChange} checked={pets} name="pets" id="pets"/>
                        <label htmlFor="pets">pets</label>
                    </div>
                </div>
                { /* extras end*/ }

            </form>
        </section>
    )
}
