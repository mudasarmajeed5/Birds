import React,{useEffect,useState} from 'react'

const TextAnimation = () => {
    const [OF,SetOF] = useState(false)
    useEffect(() => {
      
      let digital = document.getElementById("content_types")
      const digital_marketing = setTimeout(() => {
        digital.innerHTML = "Your Brand's Potential"
      }, 1200);
      const on_the_go = setTimeout(() => {
        digital.innerHTML = "with"
      }, 1700);
      const With = setTimeout(() => {
        digital.innerHTML = "Innovative"
      }, 2100);
      const perspectives = setTimeout(() => {
        digital.innerHTML = "Marketing Solutions "
      }, 2800);
      const hyphen = setTimeout(() => {
        digital.innerHTML = digital.innerHTML+ "!"
      }, 4000);
      
      return()=>{
        clearTimeout(on_the_go);
        clearTimeout(perspectives);
        clearTimeout(With);
        clearTimeout(digital_marketing);
        clearTimeout(hyphen);
      }
    }, []); 
    useEffect(()=>{
      setTimeout(() => {
        SetOF(true)
      }, 4000);
    },[OF])
  
    return (
      <div className="flex justify-center items-center flex-col gap-3">
      <div className='md:text-3xl text-2xl sliding-text text-white font-bold'>PIONEERING NEW PERSPECTIVES</div>
      <div id='hide' className={`md:text-4xl text-3xl text-blue-300 font-bold ${OF? "":"hidden"}`}>OF</div>
      <div id='content_types' className='mt-2 md:text-6xl text-4xl sliding-text font-bold'>Unleash</div>
      
    </div>
    );
  };

export default TextAnimation
