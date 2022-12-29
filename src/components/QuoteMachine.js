import React,{useState, useEffect} from 'react'
import { useSelector,useDispatch } from 'react-redux'
import { setIndexC } from '../store/slices/quoteSlice'
const QuoteMachine = () => {
    const {phrases} = useSelector(state=>state.quotes)
    const {color} = useSelector(state=>state.quotes)
    const {indexC} = useSelector(state=>state.quotes)
    const dispatch = useDispatch();
    const [index, setIndex] = useState(0)
 
    useEffect(()=>{
      let n = Math.floor(Math.random()*(9-0))+0
      let m = Math.floor(Math.random()*(9-0))+0
      setIndex(n)
      dispatch(setIndexC(m))
    },[dispatch])
  return (
    <div className='main-q' style={{backgroundColor: color[indexC].color}}>
    <div className='quote-box card' >
        <div className='card-body'>
            <div className='quote-text'>
            <i className='fa fa-quote-left' style={color[indexC]}></i><span className='card-text' style={color[indexC]}>  {phrases[index].phrase}</span>
            <p className='author'  style={color[indexC]}>{phrases[index].author}</p>
            </div>
        <div className='buton'>
          <button className='btn' onClick={()=>{
            let n = Math.floor(Math.random()*(9-0))+0
            let m = Math.floor(Math.random()*(9-0))+0
              setIndex(n)
              dispatch(setIndexC(m))
          }} style={{backgroundColor: color[indexC].color}}>New Quote</button>  
        </div>
        
        </div>
    </div>
    </div>
  )
}

export default QuoteMachine