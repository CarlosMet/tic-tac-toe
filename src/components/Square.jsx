import React from 'react'

const Square = ({children, updateBoard, index, isSelected})=>{
    const className = `${isSelected && 'bg-blue-700'}`
    const clickHandler = ()=>{
      updateBoard(index)
    }
    return (
      <div onClick={clickHandler} className={`${className} 2xl:w-[100px] 2xl:h-[100px] h-[80px] w-[80px] border-2 border-solid rounded-md text-[48px] cursor-pointer place-content-center grid`} >
        {children}
      </div>
    )
  }

  export default Square